export default function UpcomingSessions() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Upcoming Sessions</h2>

        <div className="space-y-4">
            <div className="bg-gray-50 dark:bg-zinc-900 rounded-xl p-6 border-l-4 border-codermana-orange hover:translate-x-2 transition-transform">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase text-white bg-green-600 mb-2">
                    UPCOMING
                </span>
                <p className="text-codermana-orange font-semibold text-sm mb-2">
                    Thursday, January 23, 2025 • 7:00 PM IST
                </p>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white hover:text-codermana-orange dark:hover:text-codermana-orange transition-colors">
                    🦀 Building Your First Rust CLI Tool
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Learn Rust fundamentals by building a practical command-line tool. We'll cover ownership, error handling, and leveraging the rich crates ecosystem.
                </p>
            </div>

            <div className="bg-gray-50 dark:bg-zinc-900 rounded-xl p-6 border-l-4 border-codermana-orange hover:translate-x-2 transition-transform">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase text-white bg-green-600 mb-2">
                    UPCOMING
                </span>
                <p className="text-codermana-orange font-semibold text-sm mb-2">
                    Thursday, February 6, 2025 • 7:00 PM IST
                </p>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white hover:text-codermana-orange dark:hover:text-codermana-orange transition-colors">
                    🤖 LLM Fundamentals: How Transformers Actually Work
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Demystify large language models by understanding transformer architecture, attention mechanisms, and the training process.
                </p>
            </div>

            <div className="bg-gray-50 dark:bg-zinc-900 rounded-xl p-6 border-l-4 border-codermana-orange hover:translate-x-2 transition-transform">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase text-white bg-green-600 mb-2">
                    UPCOMING
                </span>
                <p className="text-codermana-orange font-semibold text-sm mb-2">
                    Thursday, February 20, 2025 • 7:00 PM IST
                </p>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white hover:text-codermana-orange dark:hover:text-codermana-orange transition-colors">
                    🌐 Distributed Systems: Consistency vs Availability
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Explore the CAP theorem in practice. We'll examine real-world tradeoffs in systems like Cassandra, PostgreSQL, and etcd.
                </p>
            </div>
        </div>
    </section>
  );
}
