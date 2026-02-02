import type { Session } from "../../data/Session";
import DateTime from "../generic/DateTime";

export default function UpcomingSessions({ sessions } : { sessions: Session[] }) {
  if(sessions.length == 0) {
    return null;
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Upcoming Sessions</h2>

      <div className="space-y-4">
        {sessions.sort((a, b) => a.timestamp - b.timestamp ).map((session) => (
          <a href={'/sessions/'+session.id} key={session.id} className="block bg-gray-50 dark:bg-zinc-900 rounded-xl p-6 border-l-4 border-codermana-orange hover:translate-x-2 transition-transform">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase text-white bg-green-600 mb-2">
              UPCOMING
            </span>
            <p className="text-codermana-orange font-semibold text-sm mb-2">
              <DateTime timestamp={session.startDateTime}/>
            </p>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white hover:text-codermana-orange dark:hover:text-codermana-orange transition-colors">
              {session.data.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {session.data.description}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
