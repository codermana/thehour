// TODO: Get the topics list from the past sessions
export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-linear-to-br from-codermana-orange to-codermana-dark-orange rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)'}}></div>

            <div className="relative z-10">
                <h1 className="text-4xl md:text-6xl font-black mb-4 drop-shadow-lg">
                    THE CODERMANA HOUR
                </h1>
                <p className="text-xl md:text-2xl mb-6 opacity-95">
                    Live Tech Sessions Every Other Thursday
                </p>
                <p className="text-lg md:text-xl mb-8 opacity-90">
                    🗓️ Fortnightly • ⏰ 7-8 PM IST • 🌍 Free & Open to All
                </p>

                <div className="flex flex-wrap justify-center gap-3 mb-8">
                    <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">Distributed Systems</span>
                    <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">LLMs</span>
                    <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">Programming Languages</span>
                    <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">eBPF</span>
                    <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">Open Source</span>
                </div>

                <a href="#sessions" className="inline-block bg-white text-codermana-dark-orange px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-xl hover:-translate-y-1 transition-all">
                    View All Sessions
                </a>
            </div>
        </div>
    </section>
  );
}
