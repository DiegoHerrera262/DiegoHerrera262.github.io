import roamTags from '../assets/roam_tags.json';

type RoamTagEntry = { title: string; description: string };

// roam_tags.json is keyed by tag -> [{ title: <slug>, description }].
// `title` there is actually the note's slug (matches a blog post's `id`),
// not its display title. Flatten into slug -> description, deduping since
// the same post appears once per tag it has.
export function getDescriptions(): Record<string, string> {
	const descriptions: Record<string, string> = {};
	for (const entries of Object.values(roamTags as Record<string, RoamTagEntry[]>)) {
		for (const { title, description } of entries) {
			descriptions[title] = description;
		}
	}
	return descriptions;
}
