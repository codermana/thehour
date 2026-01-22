import { useEffect, useState } from "react";
import type { Session } from "../../data/Session";
import { isLive, isRecorded, isUpcoming } from "../../data/status";
import SessionHero from "./SessionHero";
import UpcomingSessions from "./UpcomingSessions";

export default function HomeSessions({ sessions }: { sessions: Session[] }) {
  let [upcomingSessions, setUpcomingSessions] = useState(sessions.filter((session) => isUpcoming(session) ));
  let [latestSession, setLatestSession] = useState(sessions.filter((session) => isRecorded(session))[0]);
  let [liveSession, setLiveSession] = useState(sessions.filter((session) => isLive(session))[0]);

  useEffect(() => {
    setUpcomingSessions(sessions.filter((session) => isUpcoming(session) ));

    setLatestSession(sessions.filter((session) => isRecorded(session))[0]);

    setLiveSession(sessions.filter((session) => isLive(session))[0]);
  }, [])

  return (
    <>
      <SessionHero latestSession={latestSession} liveSession={liveSession}/>
      <UpcomingSessions sessions={upcomingSessions}/>
    </>
  );
}
