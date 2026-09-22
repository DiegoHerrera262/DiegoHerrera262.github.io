// Curated Catppuccin accent palette — a tag's color is picked from this set
// via a hash of its name, so it's deterministic without ever producing a
// color that clashes with the rest of the theme.
const PALETTE = ['mauve', 'red', 'green', 'yellow', 'blue', 'pink', 'teal', 'peach'] as const;

export type TagColor = (typeof PALETTE)[number];

export function colorForTag(tag: string): TagColor {
	const hash = [...tag].reduce((h, c) => (h * 31 + c.charCodeAt(0)) | 0, 0);
	return PALETTE[Math.abs(hash) % PALETTE.length];
}
