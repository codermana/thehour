import type { CollectionEntry } from 'astro:content';
import { computeSessionStatus } from './computeSessionStatus';

type AstroSession = CollectionEntry<'sessions'>;

export enum SESSION_STATUS {
  RECORDED = "recorded",
  UPCOMING = "upcoming",
  LIVE = "live",
}

const STATUS_COLORS: Record<SESSION_STATUS, string> = {
  [SESSION_STATUS.UPCOMING]: 'bg-green-600',
  [SESSION_STATUS.RECORDED]: 'bg-blue-600',
  [SESSION_STATUS.LIVE]: 'bg-red-600 animate-pulse',
};

export function wrapSession(session: AstroSession) {
  const date = new Date(session.data.startTime);
  let status = computeSessionStatus(date);

  return {
    ...session,

    // derived fields
    year: date.getFullYear().toString(),
    slugPath: `/sessions/${session.id}`,
    status: status,
    timestamp: +date,
    startDateTime: date,
    isRecorded: status == SESSION_STATUS.RECORDED,
    isUpcoming: status == SESSION_STATUS.UPCOMING,
    isLive: status == SESSION_STATUS.LIVE,

    statusColor: STATUS_COLORS[status],
  };
}

export type Session = ReturnType<typeof wrapSession>;
