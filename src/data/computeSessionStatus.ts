import { SESSION_STATUS } from "./Session";

const LIVE_WINDOW_MS = 60 * 60 * 1000;

export function computeSessionStatus(startTime: string | Date): SESSION_STATUS {
  const start = +new Date(startTime);
  const now = Date.now();

  if (now < start) return SESSION_STATUS.UPCOMING;
  if (now <= start + LIVE_WINDOW_MS) return SESSION_STATUS.LIVE;
  return SESSION_STATUS.RECORDED;
}
