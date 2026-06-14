import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    author: z.string().default('Equipo Strategio'),
    category: z.enum(['Finanzas', 'Estrategia', 'Gestión', 'Liderazgo']),
    readTime: z.number(),
    featured: z.boolean().default(false),
    image: z.string().optional(),
  }),
});

export const collections = { blog };
