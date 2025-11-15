import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    category: z.string(),
    date: z.string(),
    author: z.string().optional(),
  }),
});

const productos = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    description: z.string(),
    price: z.number(),
    category: z.string(),
    available: z.boolean().default(true),
  }),
});

const frases = defineCollection({
  type: 'data',
  schema: z.object({
    text: z.string(),
    context: z.string().optional(),
  }),
});

export const collections = {
  posts,
  productos,
  frases,
};
