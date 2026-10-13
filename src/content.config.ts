import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const insights=defineCollection({loader:glob({pattern:'**/*.md',base:'./src/content/insights'}),schema:z.object({title:z.string().min(1),description:z.string().min(1),date:z.string().regex(/^\d{4}-\d{2}-\d{2}$/),image:z.string().optional(),imageAlt:z.string().default(''),originalUrl:z.string().url().optional(),draft:z.boolean().default(false)})});
export const collections={insights};
