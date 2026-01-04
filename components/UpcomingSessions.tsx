import Link from 'next/link';

const UpcomingSessions = () => {
    return (
        <div className="mt-12 bg-zinc-900 rounded-xl border border-zinc-800 p-6" id="schedule">
            <h2 className="text-2xl font-bold mb-6 text-center">Upcoming Sessions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-zinc-800 rounded-lg p-5 border-l-4 border-codermana-orange hover:scale-105 transition-transform">
                    <p className="text-codermana-orange text-sm font-bold mb-2">Jan 23, 2025 • 7:00 PM</p>
                    <h3 className="font-semibold mb-2">🦀 Building Your First Rust CLI Tool</h3>
                    <p className="text-gray-400 text-sm">Learn Rust fundamentals through practical examples.</p>
                </div>

                <div className="bg-zinc-800 rounded-lg p-5 border-l-4 border-codermana-orange hover:scale-105 transition-transform">
                    <p className="text-codermana-orange text-sm font-bold mb-2">Feb 6, 2025 • 7:00 PM</p>
                    <h3 className="font-semibold mb-2">🤖 LLM Fundamentals</h3>
                    <p className="text-gray-400 text-sm">Understanding transformer architecture and attention mechanisms.</p>
                </div>

                <div className="bg-zinc-800 rounded-lg p-5 border-l-4 border-codermana-orange hover:scale-105 transition-transform">
                    <p className="text-codermana-orange text-sm font-bold mb-2">Feb 20, 2025 • 7:00 PM</p>
                    <h3 className="font-semibold mb-2">🌐 Distributed Systems</h3>
                    <p className="text-gray-400 text-sm">Consistency vs Availability in real-world systems.</p>
                </div>
            </div>
        </div>
    );
};

export default UpcomingSessions;
