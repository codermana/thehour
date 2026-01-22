import { useEffect, useState } from "react";
import { computeSessionStatus } from "../../data/computeSessionStatus";
import { SESSION_STATUS_COLOR, type Session } from "../../data/Session";
import FormattedDate from "../generic/FormattedDate";

export default function SessionCard({session}: {session: Session}) {
    let [status, setStatus] = useState(computeSessionStatus(session.startDateTime));

    useEffect(() => {
        setStatus(computeSessionStatus(session.startDateTime));
    }, [])

    return (
        <a href={'/sessions/'+session.id} className="block bg-gray-50 dark:bg-zinc-900 rounded-xl p-6 border border-gray-200 dark:border-zinc-800 hover:border-codermana-orange dark:hover:border-codermana-orange transition-all hover:shadow-lg group">
            <div className="flex items-start justify-between mb-4">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase text-white ${SESSION_STATUS_COLOR[status]}`}>
                    {status}
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
        </a>
    );
}
