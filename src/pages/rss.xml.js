import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';
import { getPublicSessions, wrapSession } from '../data/Session';

export async function GET(context) {
	const sessions = getPublicSessions(await getCollection('sessions')).map(wrapSession);
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: sessions.map((session) => ({
			...session.data,
			link: `${session.slugPath}/`,
		})),
	});
}
