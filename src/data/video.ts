import type { Session } from "./Session";

export enum VIDEO_PLATFORM {
  YOUTUBE = "youtube",
  ODYSEE = "odysee",
}

export const MAIN_VIDEO_PLATFORM = VIDEO_PLATFORM.YOUTUBE;

export function getThumbnail(session: Session) {
  return session.data.resources?.videos?.find(
    (video) => video.platform == VIDEO_PLATFORM.YOUTUBE
  )?.thumbnail;
}
