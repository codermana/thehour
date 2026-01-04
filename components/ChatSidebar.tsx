import Link from 'next/link';

const ChatSidebar = () => {
    return (
        <div className="lg:col-span-1 space-y-4">
            {/* Live Chat */}
            <div className="bg-zinc-900 rounded-xl border border-zinc-800 flex flex-col h-[600px]">
                <div className="border-b border-zinc-800 p-4">
                    <h2 className="font-bold flex items-center gap-2">
                        <span>💬</span> Live Chat
                    </h2>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-3">
                    {/* Chat messages */}
                    <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex-shrink-0 flex items-center justify-center text-sm font-bold">
                            A
                        </div>
                        <div>
                            <p className="text-sm"><span className="font-semibold text-codermana-orange">Alice</span> <span className="text-gray-500 text-xs">2 min ago</span></p>
                            <p className="text-sm text-gray-300">Great explanation of eBPF! Can you show how to use bpftrace?</p>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex-shrink-0 flex items-center justify-center text-sm font-bold">
                            B
                        </div>
                        <div>
                            <p className="text-sm"><span className="font-semibold text-codermana-orange">Bob</span> <span className="text-gray-500 text-xs">1 min ago</span></p>
                            <p className="text-sm text-gray-300">This is my first CoderMana session. Loving it! 🎉</p>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex-shrink-0 flex items-center justify-center text-sm font-bold">
                            C
                        </div>
                        <div>
                            <p className="text-sm"><span className="font-semibold text-codermana-orange">Charlie</span> <span className="text-gray-500 text-xs">30 sec ago</span></p>
                            <p className="text-sm text-gray-300">Is the code available on GitHub?</p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-zinc-800 p-4">
                    <div className="flex gap-2">
                        <input
                            type="text"
                            placeholder="Type a message..."
                            className="flex-1 bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-codermana-orange"
                        />
                        <button className="bg-codermana-orange hover:bg-codermana-dark-orange px-4 py-2 rounded-lg transition-colors">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Q&A Section */}
            <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-4">
                <h2 className="font-bold mb-4 flex items-center gap-2">
                    <span>❓</span> Q&A
                </h2>
                <button className="w-full bg-zinc-800 hover:bg-zinc-750 border border-zinc-700 rounded-lg px-4 py-3 text-sm text-left transition-colors">
                    + Ask a question
                </button>
                <div className="mt-4 space-y-3 text-sm">
                    <div className="bg-zinc-800 rounded-lg p-3">
                        <p className="font-semibold mb-1">How does eBPF compare to kernel modules?</p>
                        <p className="text-gray-400 text-xs">Asked by Dev • 3 votes</p>
                    </div>
                    <div className="bg-zinc-800 rounded-lg p-3">
                        <p className="font-semibold mb-1">Can I use eBPF for network security?</p>
                        <p className="text-gray-400 text-xs">Asked by Security_Pro • 2 votes</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatSidebar;
