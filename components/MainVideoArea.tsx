import Link from 'next/link';

const MainVideoArea = () => {
    return (
        <div className="lg:col-span-2 space-y-4">
            {/* Video Player */}
            <div className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800">
                <div className="aspect-video bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center relative">
                    {/* Placeholder for video embed - Replace with actual video player */}
                    <div className="text-center">
                        <div className="text-6xl mb-4">🎥</div>
                        <p className="text-xl font-semibold mb-2">Video Stream Goes Here</p>
                        <p className="text-sm text-gray-400">Integrate with Daily.co, 100ms, or YouTube Live</p>
                    </div>

                    {/* Live indicator */}
                    <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-2">
                        <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                        LIVE
                    </div>

                    {/* Viewer count */}
                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                        👁️ 47 watching
                    </div>
                </div>
            </div>

            {/* Session Info */}
            <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800">
                <div className="flex items-start justify-between mb-4">
                    <div>
                        <h1 className="text-2xl font-bold mb-2">eBPF 101: Observing the Linux Kernel Safely</h1>
                        <p className="text-gray-400 text-sm">Thursday, January 9, 2025 • 7:00 PM IST</p>
                    </div>
                    <button className="text-gray-400 hover:text-codermana-orange transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
                        </svg>
                    </button>
                </div>

                <div className="prose prose-invert max-w-none">
                    <p className="text-gray-300 leading-relaxed">
                        Discover how eBPF (extended Berkeley Packet Filter) enables safe, performant kernel-level observability without requiring kernel modules or system reboots. In this session, we'll explore real-world use cases, understand the eBPF architecture, and write our first eBPF program together.
                    </p>
                </div>

                {/* Topics covered */}
                <div className="mt-6">
                    <h3 className="text-sm font-semibold text-gray-400 uppercase mb-3">Topics We'll Cover</h3>
                    <div className="flex flex-wrap gap-2">
                        <span className="bg-zinc-800 px-3 py-1 rounded-full text-sm">eBPF Basics</span>
                        <span className="bg-zinc-800 px-3 py-1 rounded-full text-sm">BPF Maps</span>
                        <span className="bg-zinc-800 px-3 py-1 rounded-full text-sm">Tracing</span>
                        <span className="bg-zinc-800 px-3 py-1 rounded-full text-sm">Performance Monitoring</span>
                        <span className="bg-zinc-800 px-3 py-1 rounded-full text-sm">bpftrace</span>
                    </div>
                </div>
            </div>

            {/* Resources Section */}
            <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span>📚</span> Session Resources
                </h2>
                <div className="space-y-3">
                    <Link href="#" className="flex items-center justify-between p-3 bg-zinc-800 rounded-lg hover:bg-zinc-750 transition-colors group">
                        <div className="flex items-center gap-3">
                            <span className="text-2xl">📄</span>
                            <div>
                                <p className="font-semibold group-hover:text-codermana-orange transition-colors">Slide Deck</p>
                                <p className="text-xs text-gray-400">PDF, 2.4 MB</p>
                            </div>
                        </div>
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                        </svg>
                    </Link>
                    <Link href="#" className="flex items-center justify-between p-3 bg-zinc-800 rounded-lg hover:bg-zinc-750 transition-colors group">
                        <div className="flex items-center gap-3">
                            <span className="text-2xl">💻</span>
                            <div>
                                <p className="font-semibold group-hover:text-codermana-orange transition-colors">Code Examples</p>
                                <p className="text-xs text-gray-400">GitHub Repository</p>
                            </div>
                        </div>
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                        </svg>
                    </Link>
                    <Link href="#" className="flex items-center justify-between p-3 bg-zinc-800 rounded-lg hover:bg-zinc-750 transition-colors group">
                        <div className="flex items-center gap-3">
                            <span className="text-2xl">🔗</span>
                            <div>
                                <p className="font-semibold group-hover:text-codermana-orange transition-colors">Additional Reading</p>
                                <p className="text-xs text-gray-400">Curated links & docs</p>
                            </div>
                        </div>
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MainVideoArea;
