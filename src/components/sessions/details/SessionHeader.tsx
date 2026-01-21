import SessionStatus from "./SessionStatus";

import type { Session } from "../../../data/Session";
import DateTime from "../../generic/DateTime";

export default function SessionHeader({ session }: { session: Session }) {
  return (
    <div className="mb-8">
      <SessionStatus session={session}/>
      <p className="text-codermana-orange font-semibold mb-3">
        <DateTime timestamp={session.startDateTime}/>
      </p>
      <h1 className="text-4xl md:text-5xl font-black mb-4 text-gray-900 dark:text-white">
        {session.data.title}
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-400">
        {session.data.description}
      </p>
    </div>
  );
}
