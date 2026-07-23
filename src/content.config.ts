import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    /** Site-absolute path to the social card; also the dev.to cover image. */
    image: z.string().startsWith('/').optional(),
    draft: z.boolean().default(false),
    /** Opt in per post: only these get created/updated on dev.to. */
    syndicate: z.boolean().default(false),
  }),
});

export const collections = { blog };
