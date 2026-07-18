import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const pages = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/pages' }),
  schema: z.object({
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
  }),
});

export const collections = { pages };
