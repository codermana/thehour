import type { CollectionEntry } from 'astro:content';
import formatHumanDate from '../helpers/formatHumanDate';

type AstroSession = CollectionEntry<'sessions'>;

export enum SESSION_STATUS {
  RECORDED = "recorded",
  UPCOMING = "upcoming",
  LIVE = "live",
}

const SESSION_STATUS_COLORS: Record<SESSION_STATUS, string> = {
  [SESSION_STATUS.UPCOMING]: 'bg-green-600',
  [SESSION_STATUS.RECORDED]: 'bg-blue-600',
  [SESSION_STATUS.LIVE]: 'bg-red-600 animate-pulse',
};

export function wrapSession(session: AstroSession) {
  let status = SESSION_STATUS.RECORDED;

  if(session.data.upcoming) {
    status = SESSION_STATUS.UPCOMING;

    if(session.data.live) {
      status = SESSION_STATUS.LIVE;
    }
  }

  return {
    ...session,

    // derived fields
    year: session.data.date.slice(0, 4),
    slugPath: `/sessions/${session.id}`,
    status: status,
    timestamp: +new Date(`${session.data.date}T00:00:00`),
    isRecorded: status == SESSION_STATUS.RECORDED,
    isUpcoming: status == SESSION_STATUS.UPCOMING,
    isLive: status == SESSION_STATUS.LIVE,

    statusColor: SESSION_STATUS_COLORS[status],
    formattedDate: formatHumanDate(session.data.date),
  };
}

export type Session = ReturnType<typeof wrapSession>;
