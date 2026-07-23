/**
 * Inline CMS client library for the mock site. All client-side (static build),
 * mirrors the style of `auth.ts`: pure path helpers plus thin Firestore
 * wrappers so components never touch the SDK directly.
 *
 * Scope (v1): home ("/") and platform ("/platform") only, text fields only.
 * See the CMS spec for the full data model and activation rules.
 */
import { db } from "./firebase";
import {
  doc,
  getDoc,
  setDoc,
  onSnapshot,
  serverTimestamp,
  type Unsubscribe,
} from "firebase/firestore";
import type { User } from "firebase/auth";

export const PAGES_COLLECTION = "pages-main";

/** A page document. Loose on purpose - identical shape to the built-in JSON. */
export type PageDoc = Record<string, unknown>;

// ---------------------------------------------------------------------------
// Path helpers
// ---------------------------------------------------------------------------

function toKey(part: string): string | number {
  return /^\d+$/.test(part) ? Number(part) : part;
}

/** Read a value at a dot-separated path (numeric segments index arrays). */
export function getByPath(obj: unknown, path: string): unknown {
  const parts = path.split(".");
  let cur: unknown = obj;
  for (const part of parts) {
    if (cur == null) return undefined;
    const key = toKey(part);
    cur = (cur as Record<string | number, unknown>)[key as never];
  }
  return cur;
}

function shallowClone<T>(node: T): T {
  if (Array.isArray(node)) return node.slice() as unknown as T;
  if (node && typeof node === "object") return { ...(node as Record<string, unknown>) } as T;
  return node;
}

/**
 * Set a value at a dot-separated path, immutably. Clones every node walked
 * along the path (shallow, per level) and leaves everything else untouched.
 * The path is assumed to already exist in the document (v1 never creates
 * new keys or array slots).
 */
export function setByPath<T>(obj: T, path: string, value: unknown): T {
  const parts = path.split(".");
  const root = shallowClone(obj);
  let cur: Record<string | number, unknown> = root as unknown as Record<string | number, unknown>;
  for (let i = 0; i < parts.length - 1; i++) {
    const key = toKey(parts[i]);
    const cloned = shallowClone(cur[key]);
    cur[key] = cloned;
    cur = cloned as Record<string | number, unknown>;
  }
  const lastKey = toKey(parts[parts.length - 1]);
  cur[lastKey] = value;
  return root;
}

// ---------------------------------------------------------------------------
// Field enumeration for the side panel
// ---------------------------------------------------------------------------

export interface CmsField {
  /** Dot path, matches data-cms-path on the rendered page. Doubles as the field id. */
  path: string;
  value: string;
  label: string;
  group: string;
  kind: "input" | "textarea";
}

/** Structural/config keys skipped everywhere in the walk - never editable text. */
const SKIP_KEYS = new Set(["type", "kind", "accent", "countUp", "href", "links", "url"]);

/** Nouns used to label array-of-object / array-of-string items by their key. */
const ARRAY_NOUNS: Record<string, string> = {
  subsections: "Subsection",
  stats: "Stat",
  chips: "Chip",
  ticker: "Ticker item",
  rates: "Rate",
  prompts: "Prompt",
  rows: "Row",
  headers: "Header",
  items: "Item",
};

/** Nouns used to label array-of-object items when the item carries a `kind`. */
const KIND_NOUNS: Record<string, string> = {
  p: "Paragraph",
  cta: "CTA",
  table: "Table",
};

function humanizeKey(key: string): string {
  const spaced = key.replace(/([a-z0-9])([A-Z])/g, "$1 $2").replace(/[_-]+/g, " ").trim();
  const lower = spaced.toLowerCase();
  return lower.charAt(0).toUpperCase() + lower.slice(1);
}

function singularNoun(key: string): string {
  if (ARRAY_NOUNS[key]) return ARRAY_NOUNS[key];
  const bare = key.endsWith("s") ? key.slice(0, -1) : key;
  return humanizeKey(bare);
}

function fieldKind(value: string): "input" | "textarea" {
  return value.length > 60 ? "textarea" : "input";
}

function walkObject(
  obj: Record<string, unknown>,
  path: string,
  group: string,
  labelParts: string[],
  fields: CmsField[],
): void {
  for (const key of Object.keys(obj)) {
    if (SKIP_KEYS.has(key)) continue;
    const value = obj[key];
    const childPath = path ? `${path}.${key}` : key;
    const childLabel = [...labelParts, humanizeKey(key)];
    walkValue(value, childPath, group, childLabel, fields);
  }
}

function walkValue(
  value: unknown,
  path: string,
  group: string,
  labelParts: string[],
  fields: CmsField[],
): void {
  if (value == null) return;

  if (typeof value === "string") {
    fields.push({
      path,
      value,
      label: labelParts.join(" ") || humanizeKey(path.split(".").pop() ?? path),
      group,
      kind: fieldKind(value),
    });
    return;
  }

  if (Array.isArray(value)) {
    const key = path.split(".").pop() ?? "";

    // Array of strings, e.g. chips/ticker.
    if (value.every((v) => typeof v === "string")) {
      const noun = singularNoun(key);
      const prefix = labelParts.slice(0, -1);
      value.forEach((v, i) => {
        walkValue(v, `${path}.${i}`, group, [...prefix, `${noun} ${i + 1}`], fields);
      });
      return;
    }

    // Array of arrays of strings, e.g. a comparison table's rows.
    if (value.every((v) => Array.isArray(v))) {
      (value as unknown[][]).forEach((row, r) => {
        row.forEach((cell, c) => {
          if (typeof cell === "string") {
            fields.push({
              path: `${path}.${r}.${c}`,
              value: cell,
              label: `Row ${r + 1} col ${c + 1}`,
              group,
              kind: fieldKind(cell),
            });
          }
        });
      });
      return;
    }

    // Array of objects, e.g. content blocks / subsections / stats.
    const prefix = labelParts.slice(0, -1);
    const counters = new Map<string, number>();
    value.forEach((item, i) => {
      if (item && typeof item === "object" && !Array.isArray(item)) {
        const itemKind = (item as Record<string, unknown>).kind;
        const noun = typeof itemKind === "string" ? KIND_NOUNS[itemKind] ?? humanizeKey(itemKind) : singularNoun(key);
        const count = (counters.get(noun) ?? 0) + 1;
        counters.set(noun, count);
        walkObject(item as Record<string, unknown>, `${path}.${i}`, group, [...prefix, `${noun} ${count}`], fields);
      }
    });
    return;
  }

  if (typeof value === "object") {
    walkObject(value as Record<string, unknown>, path, group, labelParts, fields);
  }
}

function sectionGroupLabel(section: Record<string, unknown>): string {
  const heading = section.heading;
  const eyebrow = section.eyebrow;
  if (typeof heading === "string" && heading) {
    return typeof eyebrow === "string" && eyebrow ? `${eyebrow} - ${heading}` : heading;
  }
  return typeof section.type === "string" ? section.type : "Section";
}

/**
 * Walk a page document and produce the ordered, grouped field list the side
 * panel renders from. Text-only: string leaves and string-array elements.
 * Skips structural keys (SKIP_KEYS) and the meta/draftNotes sections, except
 * meta.metaTitle and the top-level seoDescription, which land in "SEO".
 */
export function enumerateFields(pageDoc: PageDoc): CmsField[] {
  const fields: CmsField[] = [];

  if (typeof pageDoc.title === "string") {
    fields.push({ path: "title", value: pageDoc.title, label: "Title", group: "Page", kind: fieldKind(pageDoc.title) });
  }

  const sections = Array.isArray(pageDoc.sections) ? (pageDoc.sections as Record<string, unknown>[]) : [];
  sections.forEach((section, i) => {
    const type = section.type;
    if (type === "draftNotes") return;
    if (type === "meta") {
      if (typeof section.metaTitle === "string") {
        fields.push({
          path: `sections.${i}.metaTitle`,
          value: section.metaTitle,
          label: "Meta title",
          group: "SEO",
          kind: fieldKind(section.metaTitle),
        });
      }
      return;
    }
    const group = sectionGroupLabel(section);
    walkObject(section, `sections.${i}`, group, [], fields);
  });

  if (typeof pageDoc.seoDescription === "string") {
    fields.push({
      path: "seoDescription",
      value: pageDoc.seoDescription,
      label: "SEO description",
      group: "SEO",
      kind: fieldKind(pageDoc.seoDescription),
    });
  }

  if (pageDoc.stickyCta && typeof pageDoc.stickyCta === "object") {
    walkObject(pageDoc.stickyCta as Record<string, unknown>, "stickyCta", "Sticky CTA", [], fields);
  }

  if (pageDoc.chat && typeof pageDoc.chat === "object") {
    walkObject(pageDoc.chat as Record<string, unknown>, "chat", "Chat", [], fields);
  }

  return fields;
}

// ---------------------------------------------------------------------------
// Firestore wrappers
// ---------------------------------------------------------------------------

function pageRef(slug: string) {
  return doc(db, PAGES_COLLECTION, slug);
}

// ---------------------------------------------------------------------------
// Nested-array codec
//
// Firestore forbids an array from containing another array directly (e.g. a
// comparison table's rows: string[][]). We wrap each inner array as
// { __arr: [...] } on write and unwrap it on read, so the in-memory document,
// and therefore every data-cms-path, stays in its native shape; only the stored
// wire format differs. Our content never uses "__arr" as a real key.
// ---------------------------------------------------------------------------

const NESTED_ARRAY_KEY = "__arr";

function encodeForFirestore(value: unknown): unknown {
  if (Array.isArray(value)) {
    return value.map((el) =>
      Array.isArray(el)
        ? { [NESTED_ARRAY_KEY]: encodeForFirestore(el) }
        : encodeForFirestore(el),
    );
  }
  if (value && typeof value === "object") {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
      out[k] = encodeForFirestore(v);
    }
    return out;
  }
  return value;
}

function decodeFromFirestore(value: unknown): unknown {
  if (Array.isArray(value)) {
    return value.map((el) => decodeFromFirestore(el));
  }
  if (value && typeof value === "object") {
    const obj = value as Record<string, unknown>;
    const keys = Object.keys(obj);
    if (keys.length === 1 && keys[0] === NESTED_ARRAY_KEY && Array.isArray(obj[NESTED_ARRAY_KEY])) {
      return decodeFromFirestore(obj[NESTED_ARRAY_KEY]);
    }
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(obj)) {
      out[k] = decodeFromFirestore(v);
    }
    return out;
  }
  return value;
}

/** Subscribe to a page document. Fires with the doc data, or null if missing. */
export function subscribePage(slug: string, cb: (doc: PageDoc | null) => void): Unsubscribe {
  return onSnapshot(pageRef(slug), (snap) => {
    cb(snap.exists() ? (decodeFromFirestore(snap.data()) as PageDoc) : null);
  });
}

/** Overwrite the page document with `data`, stamping edit metadata. */
export async function savePage(slug: string, data: PageDoc, user: User): Promise<void> {
  // Encode the content first, then add metadata so the serverTimestamp sentinel
  // is never walked/rebuilt by the codec.
  const encoded = encodeForFirestore(data) as Record<string, unknown>;
  await setDoc(pageRef(slug), {
    ...encoded,
    updatedAt: serverTimestamp(),
    updatedBy: user.uid,
    updatedByEmail: user.email ?? null,
  });
}

/** Lazily seed the Firestore doc from the built-in page data if it does not exist yet. */
export async function seedPageIfMissing(slug: string, seed: PageDoc, user: User): Promise<void> {
  const snap = await getDoc(pageRef(slug));
  if (!snap.exists()) {
    await savePage(slug, seed, user);
  }
}
