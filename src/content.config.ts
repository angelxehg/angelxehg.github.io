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
    /** Site-absolute path to the post's social card, e.g. /images/posts/foo.png */
    image: z.string().startsWith('/').optional(),
    /** BCP 47 tag for the post's own language; becomes the page's <html lang>. */
    lang: z.string().default('en'),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
