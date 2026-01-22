import { getCollection } from 'astro:content';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const sessions = await getCollection('sessions');

  let sessionsToSerialize = sessions.map((session) => ({
    ...session.data,
    link: `/sessions/${session.id}/`,
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
