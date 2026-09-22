import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Matches the frontmatter emitted by alejozen-cli: title, date, tags.
	schema: () =>
		z.object({
			title: z.string(),
			date: z.coerce.date(),
			tags: z.array(z.string()).default([]),
		}),
});

export const collections = { blog };
