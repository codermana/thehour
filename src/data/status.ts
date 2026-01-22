import { computeSessionStatus } from "./computeSessionStatus";
import { SESSION_STATUS, type Session } from "./Session";

export function isRecorded(session: Session) {
  let status = computeSessionStatus(session.startDateTime);
  return status == SESSION_STATUS.RECORDED;
}

export function isUpcoming(session: Session) {
  let status = computeSessionStatus(session.startDateTime);
  return status == SESSION_STATUS.UPCOMING;
}

export function isLive(session: Session) {
  let status = computeSessionStatus(session.startDateTime);
  return status == SESSION_STATUS.LIVE;
}
