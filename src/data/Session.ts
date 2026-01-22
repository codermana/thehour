import type { CollectionEntry } from 'astro:content';

type AstroSession = CollectionEntry<'sessions'>;

export enum SESSION_STATUS {
  RECORDED = "recorded",
  UPCOMING = "upcoming",
  LIVE = "live",
}

export const SESSION_STATUS_COLOR: Record<SESSION_STATUS, string> = {
  [SESSION_STATUS.UPCOMING]: 'bg-green-600',
  [SESSION_STATUS.RECORDED]: 'bg-blue-600',
  [SESSION_STATUS.LIVE]: 'bg-red-600 animate-pulse',
};

export function wrapSession(session: AstroSession) {
  const date = new Date(session.data.startTime);

  return {
    ...session,

    // derived fields
    year: date.getFullYear().toString(),
    slugPath: `/sessions/${session.id}`,
    timestamp: +date,
    startDateTime: date,
  };
}

export type Session = ReturnType<typeof wrapSession>;
