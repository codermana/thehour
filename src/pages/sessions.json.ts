import { getCollection } from 'astro:content';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';
import type { APIContext } from 'astro';
import { getPublicSessions, wrapSession } from '../data/Session';

export async function GET(context: APIContext) {
  const sessions = getPublicSessions(await getCollection('sessions')).map(wrapSession);

  let sessionsToSerialize = sessions.map((session) => ({
    ...session.data,
    link: `${session.slugPath}/`,
  })).map(({ joinLink, ...rest }) => rest);

  const data = {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: sessionsToSerialize,
  };

  return new Response(JSON.stringify(data), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  });
}
