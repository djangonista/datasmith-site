import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    // unlisted: wpis zostaje opublikowany pod swoim adresem, ale znika z list
    // (blog, strona glowna, llms-full.txt, sitemap). Dodane 2026-08-21 przy
    // zmianie pozycjonowania na biura rachunkowe: stare wpisy produkcyjne
    // nie znikaja z internetu, tylko przestaja byc pokazywane nowym czytelnikom.
    unlisted: z.boolean().default(false),
    image: z.string().optional(),
  }),
});

export const collections = { blog };
