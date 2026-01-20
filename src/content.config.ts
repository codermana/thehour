import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const videosSchema = z.object({
  fullLink: z.string().url(),
  embedLink: z.string().url(),
  platform: z.string(),
});

const resourcesSchema = z.object({
  slides: z.string().url().optional(),
  code: z.string().url().optional(),
  blog: z.string().url().optional(),
  videos: z.array(videosSchema).min(1).optional(),
  background: z.string().url().optional(),
});

const sessions = defineCollection({
	// Load Markdown and MDX files in the `src/content/sessions/` directory.
	loader: glob({ base: './src/content/sessions', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
      title: z.string(),
      description: z.string(),
      date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
      time: z.string(),
      upcoming: z.boolean(),
      live: z.boolean(),
      duration: z.string().optional(), // "51:20"
      topics: z.array(z.string()).min(1),
			heroImage: image().optional(),
      resources: resourcesSchema.optional(),
		}),
});

export const collections = { sessions };
