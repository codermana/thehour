import setQueryParam from "../helpers/setQueryParam";
import Dropdown from "../generic/Dropdown";

import { SESSION_STATUS, type Session } from "../../data/Session";

interface FilterProps {
  sessions: Session[],
  selectedTopic: string | null,
  selectedYear: string | null,
  selectedStatus: string | null,
}

export default function SessionsFilter({ sessions, selectedTopic, selectedYear, selectedStatus }: FilterProps) {
  const topicCounts = sessions
    .flatMap(session => session.data.topics)
    .reduce((acc: any, topic: string) => {
      acc[topic] = (acc[topic] || 0) + 1;
      return acc;
    }, {});

  const allTopics = Object.entries(topicCounts)
    .sort((a, b) => b[1] - a[1])
    .map(([topic]) => topic);

  const uniqueYears = [...new Set(
    sessions.map(s => s.year)
  )];

  const allStatus = [SESSION_STATUS.RECORDED, SESSION_STATUS.UPCOMING];

  return (
    <div className="mb-8">
      <div className="flex flex-col lg:flex-row gap-4 mb-6">
        <div className="flex-1">
            <div className="relative">
                <input
                    type="text"
                    id="search-input"
                    placeholder="Search sessions by title, topic, or description..."
                    onChange={(e) => setQueryParam("q", e.target.value)}
                    className="w-full px-4 py-3 pl-12 bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-codermana-orange text-gray-900 dark:text-white"
                />
                <svg className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
            </div>
        </div>

        <div className="flex gap-2">
          <Dropdown options={allStatus} defaultLabel="All Sessions" selectedOption={selectedStatus} onOptionSelect={(value: string | null) => setQueryParam("status", value)}/>

          <Dropdown options={uniqueYears} defaultLabel="All Years" selectedOption={selectedYear} onOptionSelect={(value: string | null) => setQueryParam("year", value)}/>

          <Dropdown options={allTopics} defaultLabel="All Topics" selectedOption={selectedTopic} onOptionSelect={(value: string | null) => setQueryParam("topic", value)}/>

          <a href="/sessions">
            <button className="px-4 py-3 bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors">Reset</button>
          </a>
        </div>
      </div>
    </div>
  );
}
