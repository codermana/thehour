import type { CollectionEntry } from "astro:content";

import SessionCard from "./SessionCard";
import type { Session } from "../../data/Session";

export default function SessionsList({ sessions }: { sessions: Session[] }) {
  if(sessions.length == 0) {
    return (
      <div className="text-center py-12">
        <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">No sessions found</h3>
        <p className="text-gray-600 dark:text-gray-400">Try adjusting your search or filters</p>
      </div>
    );
  }

  return (
    <div id="sessions-container" className="space-y-6 mb-12">
      {sessions.map((session) => (
        <SessionCard key={session.id} session={session}/>
      ))}
    </div>
  );
}
