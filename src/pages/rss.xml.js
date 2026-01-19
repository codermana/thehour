import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';

export async function GET(context) {
	const sessions = await getCollection('sessions');
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: sessions.map((session) => ({
			...session.data,
			link: `/sessions/${session.id}/`,
		})),
	});
}
