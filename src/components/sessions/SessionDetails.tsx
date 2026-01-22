import type { PropsWithChildren } from "react";

import SessionHeader from "./details/SessionHeader";
import SessionVideo from "./details/SessionVideo";
import TopicTags from "./details/TopicTags";
import SessionResources from "./details/SessionResources";

import type { Session } from "../../data/Session";
import Countdown from "./details/Countdown";
import SessionStatusBadge from "./details/SessionStatusBadge";

type SessionDetailsProps = {
  session: Session,
};

export default function SessionDetails({ children, session } : PropsWithChildren<SessionDetailsProps>) {
  return (
    <>
      <div className="mb-8 text-center">
        <SessionStatusBadge session={session}/>
        <Countdown session={session}/>
      </div>
      <SessionHeader session={session}/>

      <SessionVideo session={session}/>

      <div className="bg-gray-50 dark:bg-zinc-900 rounded-xl p-8 mb-8 border border-gray-200 dark:border-zinc-800">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Session Overview</h2>
          <div className="prose prose-gray dark:prose-invert max-w-none">
            {children}
          </div>
      </div>

      <TopicTags topics={session.data.topics}/>

      <SessionResources resources={session.data.resources}/>
    </>
  );
}
