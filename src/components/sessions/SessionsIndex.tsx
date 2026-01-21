import { useMemo } from 'react';

import useQueryParams from '../helpers/useQueryParams';
import SessionsFilter from './SessionsFilter';
import CalendarAndNewsletterCTA from '../cta/CalendarAndNewsletterCTA';
import SessionsList from './SessionsList';

import type { Session } from '../../data/Session';

export default function SessionsIndex({ sessions }: { sessions: Session[] }) {
    const query = useQueryParams();
    const selectedTopic = query.get("topic");
    const selectedYear = query.get("year");
    const selectedStatus = query.get("status");
    const searchQuery = query.get("q");

    const filteredSessions = useMemo(() => {
        return sessions
        .filter((session) => {
            // Filter by tag
            if (selectedTopic && !session.data.topics.includes(selectedTopic)) {
                return false;
            }

            // Filter by year
            if (selectedYear && (session.year != selectedYear)) {
                return false;
            }

            // Filter by status
            if (selectedStatus) {
                if (selectedStatus == "recorded" && session.data.upcoming) {
                    return false;
                }

                if (selectedStatus == "upcoming" && !session.data.upcoming) {
                    return false;
                }
            }

            // Filter by search query
            if (searchQuery) {
                const query = searchQuery.toLowerCase();
                return (
                    session.data.title.toLowerCase().includes(query) ||
                    session.data.description.toLowerCase().includes(query) ||
                    session.data.topics.some((tag) => tag.toLowerCase().includes(query)) ||
                    (session.body && session.body.toLowerCase().includes(query))
                );
            }
            return true;
        }).sort(
            (a, b) => (b.timestamp - a.timestamp).valueOf(),
        );
    }, [selectedTopic, searchQuery, selectedYear, selectedStatus]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black mb-4 text-gray-900 dark:text-white">
                All Sessions
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Explore our complete collection of tech sessions covering systems programming, cloud native, LLMs, and more.
            </p>
        </div>

        <SessionsFilter
            sessions={sessions}
            selectedTopic={selectedTopic}
            selectedYear={selectedYear}
            selectedStatus={selectedStatus}/>

        <div className="mb-6">
            <p className="text-gray-600 dark:text-gray-400">
                Showing <span id="results-count" className="font-semibold text-gray-900 dark:text-white">{filteredSessions.length}</span> sessions
            </p>
        </div>

        <SessionsList sessions={filteredSessions}/>

        <CalendarAndNewsletterCTA/>
    </div>
  );
}
