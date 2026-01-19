import type { CollectionEntry } from 'astro:content';

export default function SessionsIndex({ sessions }: { sessions: CollectionEntry<'sessions'>[] }) {
  console.log(sessions);

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

        <div className="mb-8">
            <div className="flex flex-col lg:flex-row gap-4 mb-6">
                <div className="flex-1">
                    <div className="relative">
                        <input
                            type="text"
                            id="search-input"
                            placeholder="Search sessions by title, topic, or description..."
                            className="w-full px-4 py-3 pl-12 bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-codermana-orange text-gray-900 dark:text-white"
                        />
                        <svg className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </div>
                </div>

                <div className="flex gap-2">
                    <select id="status-filter" className="px-4 py-3 bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-codermana-orange text-gray-900 dark:text-white">
                        <option value="all">All Sessions</option>
                        <option value="upcoming">Upcoming</option>
                        <option value="recorded">Recorded</option>
                    </select>

                    <select id="year-filter" className="px-4 py-3 bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-codermana-orange text-gray-900 dark:text-white">
                        <option value="all">All Years</option>
                    </select>

                    <select id="sort-filter" className="px-4 py-3 bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-codermana-orange text-gray-900 dark:text-white">
                        <option value="newest">Newest First</option>
                        <option value="oldest">Oldest First</option>
                        <option value="title">Title A-Z</option>
                    </select>

                    <button id="view-toggle" className="px-4 py-3 bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors" title="Toggle year grouping">
                        <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>

            <div className="flex flex-wrap gap-2">
                <button className="topic-filter active px-4 py-2 rounded-full text-sm font-medium bg-codermana-orange text-white transition-colors" data-topic="all">
                    All Topics
                </button>
                <button className="topic-filter px-4 py-2 rounded-full text-sm font-medium bg-gray-200 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-zinc-700 transition-colors" data-topic="ebpf">
                    eBPF
                </button>
                <button className="topic-filter px-4 py-2 rounded-full text-sm font-medium bg-gray-200 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-zinc-700 transition-colors" data-topic="rust">
                    Rust
                </button>
                <button className="topic-filter px-4 py-2 rounded-full text-sm font-medium bg-gray-200 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-zinc-700 transition-colors" data-topic="llm">
                    LLMs
                </button>
                <button className="topic-filter px-4 py-2 rounded-full text-sm font-medium bg-gray-200 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-zinc-700 transition-colors" data-topic="distributed-systems">
                    Distributed Systems
                </button>
                <button className="topic-filter px-4 py-2 rounded-full text-sm font-medium bg-gray-200 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-zinc-700 transition-colors" data-topic="oss">
                    Open Source
                </button>
            </div>
        </div>

        <div className="mb-6">
            <p className="text-gray-600 dark:text-gray-400">
                Showing <span id="results-count" className="font-semibold text-gray-900 dark:text-white">12</span> sessions
            </p>
        </div>

        <div id="sessions-container" className="space-y-6 mb-12">
        </div>

        <div id="no-results" className="hidden text-center py-12">
            <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">No sessions found</h3>
            <p className="text-gray-600 dark:text-gray-400">Try adjusting your search or filters</p>
        </div>

        <div className="mt-12 bg-linear-to-br from-codermana-orange to-codermana-dark-orange rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-3">Never Miss a Session</h2>
            <p className="text-lg mb-6 opacity-90">
                Subscribe to our calendar feed and get all upcoming sessions automatically added to your calendar.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button className="inline-flex items-center justify-center gap-2 bg-white text-codermana-dark-orange px-6 py-3 rounded-full font-bold hover:shadow-xl transition-all">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    Subscribe to Calendar
                </button>
                <a href="index.html#subscribe" className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm text-white border-2 border-white px-6 py-3 rounded-full font-bold hover:bg-white/30 transition-all">
                    Get Email Updates
                </a>
            </div>
        </div>
    </div>
  );
}
