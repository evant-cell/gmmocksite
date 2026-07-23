/**
 * Auth API for the mock site. All client-side (static build). Wraps Firebase
 * Auth + Firestore so components/pages never touch the SDK directly.
 *
 * On signup a document is created in the `mocksite-user` collection keyed by uid,
 * carrying the user's role. New users default to `member`; `editor`/`admin` are
 * granted out-of-band (Firebase console / a trusted admin), never by the client.
 */
import { auth, db } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  updateProfile,
  onAuthStateChanged,
  type User,
} from "firebase/auth";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";

const googleProvider = new GoogleAuthProvider();

export const ROLES = ["member", "editor", "admin"] as const;
export type Role = (typeof ROLES)[number];
export const DEFAULT_ROLE: Role = "member";
export const USERS_COLLECTION = "mocksite-user";

export interface AuthState {
  user: User | null;
  role: Role | null;
}

function userDocRef(uid: string) {
  return doc(db, USERS_COLLECTION, uid);
}

/** Create the mocksite-user doc for a user if it does not already exist. */
async function createUserDoc(user: User, displayName?: string) {
  await setDoc(
    userDocRef(user.uid),
    {
      uid: user.uid,
      email: user.email,
      displayName: displayName ?? user.displayName ?? "",
      role: DEFAULT_ROLE,
      createdAt: serverTimestamp(),
    },
    { merge: true },
  );
}

/** Sign up with email/password, then create the mocksite-user document. */
export async function signUp(email: string, password: string, displayName?: string): Promise<User> {
  const cred = await createUserWithEmailAndPassword(auth, email, password);
  if (displayName) {
    await updateProfile(cred.user, { displayName });
  }
  await createUserDoc(cred.user, displayName);
  return cred.user;
}

export async function logIn(email: string, password: string): Promise<User> {
  const cred = await signInWithEmailAndPassword(auth, email, password);
  return cred.user;
}

export async function logOut(): Promise<void> {
  await signOut(auth);
}

/**
 * Sign in with Google. First-time sign-in acts as signup: ensureUserDoc creates
 * the mocksite-user document (role: member) if one doesn't already exist.
 */
export async function signInWithGoogle(): Promise<User> {
  const cred = await signInWithPopup(auth, googleProvider);
  await ensureUserDoc(cred.user);
  return cred.user;
}

/** Ensure a mocksite-user doc exists (covers accounts made before this doc existed). */
export async function ensureUserDoc(user: User): Promise<void> {
  const snap = await getDoc(userDocRef(user.uid));
  if (!snap.exists()) await createUserDoc(user);
}

/** Read a user's role from Firestore, falling back to the default. */
export async function getUserRole(uid: string): Promise<Role> {
  try {
    const snap = await getDoc(userDocRef(uid));
    const role = snap.exists() ? (snap.data().role as Role) : undefined;
    return role && ROLES.includes(role) ? role : DEFAULT_ROLE;
  } catch {
    return DEFAULT_ROLE;
  }
}

/**
 * Subscribe to auth state. Fires the callback with { user, role } on sign-in
 * (role resolved from Firestore) and { user: null, role: null } on sign-out.
 * Returns the unsubscribe function.
 */
export function watchAuth(cb: (state: AuthState) => void): () => void {
  return onAuthStateChanged(auth, async (user) => {
    if (!user) {
      cb({ user: null, role: null });
      return;
    }
    const role = await getUserRole(user.uid);
    cb({ user, role });
  });
}

export interface GuardOptions {
  /** Allowed roles. Omit to allow any signed-in user. */
  roles?: Role[];
  /** Where to send a signed-in user who lacks the role. Default: /account */
  redirectTo?: string;
  /** Where to send a signed-out visitor. Default: / */
  signedOutTo?: string;
}

/**
 * Client-side route guard for gated pages. Resolves with the AuthState when the
 * visitor is allowed; otherwise redirects and never resolves. This is a UX guard,
 * not a security boundary - data access is enforced by Firestore Security Rules.
 */
export function guardPage(opts: GuardOptions = {}): Promise<AuthState> {
  const { roles, redirectTo = "/account", signedOutTo = "/" } = opts;
  return new Promise((resolve) => {
    const unsub = watchAuth((state) => {
      unsub();
      if (!state.user) {
        window.location.replace(signedOutTo);
        return;
      }
      if (roles && (!state.role || !roles.includes(state.role))) {
        window.location.replace(redirectTo);
        return;
      }
      resolve(state);
    });
  });
}

/** Map Firebase auth error codes to human-readable messages. */
export function friendlyAuthError(code: string): string {
  switch (code) {
    case "auth/email-already-in-use":
      return "An account with this email already exists. Try logging in instead.";
    case "auth/invalid-email":
      return "That does not look like a valid email address.";
    case "auth/weak-password":
      return "Password is too weak. Use at least 6 characters.";
    case "auth/missing-password":
      return "Please enter a password.";
    case "auth/invalid-credential":
    case "auth/wrong-password":
    case "auth/user-not-found":
      return "Incorrect email or password.";
    case "auth/too-many-requests":
      return "Too many attempts. Please wait a moment and try again.";
    case "auth/network-request-failed":
      return "Network error. Check your connection and try again.";
    case "auth/popup-closed-by-user":
    case "auth/cancelled-popup-request":
      return "Google sign-in was cancelled.";
    case "auth/popup-blocked":
      return "Your browser blocked the Google sign-in popup. Allow popups and try again.";
    case "auth/account-exists-with-different-credential":
      return "An account already exists with this email using a different sign-in method.";
    default:
      return "Something went wrong. Please try again.";
  }
}
