import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const pages = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/pages' }),
  // The schema stays intentionally loose. Only the load-bearing fields are
  // validated (title, seoDescription, sections[].type); everything else is
  // passed through so pages can carry arbitrary, reusable content structures
  // (eyebrow, stats, card, ticker, link, chat, stickyCta, ...) without a schema
  // change each time. The rendering + future CMS are where shape is enforced.
  schema: z
    .object({
      title: z.string(),
      seoDescription: z.string().optional(),
      sections: z
        .array(
          z
            .object({
              type: z.string(),
            })
            .passthrough(),
        )
        .default([]),
    })
    .passthrough(),
});

export const collections = { pages };
