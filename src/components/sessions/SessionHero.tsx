import type { Session } from "../../data/Session";
import LatestSessionHero from "./details/LatestSessionHero";
import LiveSessionHero from "./details/LiveSessionHero";

interface SessionHeroProps {
  latestSession?: Session,
  liveSession?: Session,
}

export default function SessionHero({latestSession, liveSession}: SessionHeroProps) {
  if(!!liveSession) {
    return <LiveSessionHero session={liveSession}/>
  }

  if(!!latestSession) {
    return <LatestSessionHero session={latestSession}/>;
  }

  return null;
}
