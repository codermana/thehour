import type { Session } from "../../data/Session";
import FormattedDate from "../generic/FormattedDate";

export default function SessionCard({session}: {session: Session}) {
    return (
        <a href={'/sessions/'+session.id} className="block bg-gray-50 dark:bg-zinc-900 rounded-xl p-6 border border-gray-200 dark:border-zinc-800 hover:border-codermana-orange dark:hover:border-codermana-orange transition-all hover:shadow-lg group">
            <div className="flex items-start justify-between mb-4">
                <span className={"inline-block px-3 py-1 rounded-full text-xs font-bold uppercase text-white " + session.statusColor}>
                    {session.status}
                </span>
                { session.data.duration &&
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                        {session.data.duration}
                    </span>
                }
            </div>
            <p className="text-codermana-orange font-semibold text-sm mb-2">
                <FormattedDate timestamp={session.startDateTime}/>
            </p>
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-codermana-orange transition-colors">
                {session.data.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
                {session.data.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
                {session.data.topics.map(topic =>
                    <span key={topic} className="bg-gray-200 dark:bg-zinc-800 px-3 py-1 rounded-full text-xs text-gray-700 dark:text-gray-300">
                        {topic}
                    </span>
                )}
            </div>
            {/* { session.data.views &&
                <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 pt-4 border-t border-gray-200 dark:border-zinc-800">
                    <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                        </svg>
                        {session.data.views} views
                    </span>
                </div>
            } */}
        </a>
    );
}
