export default function NextSessionCTA() {
  return (
    <div className="bg-linear-to-br from-codermana-orange to-codermana-dark-orange rounded-2xl p-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Don't Miss the Next Session</h2>
        <p className="text-lg mb-6 opacity-90">
          Join us for "Building Your First Rust CLI Tool" on January 23, 2025
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="/sessions" className="inline-block bg-white text-codermana-dark-orange px-8 py-3 rounded-full font-bold hover:shadow-xl transition-all">
            View All Sessions
          </a>
          <a href="/#subscribe" className="inline-block bg-white/20 backdrop-blur-sm text-white border-2 border-white px-8 py-3 rounded-full font-bold hover:bg-white/30 transition-all">
            Subscribe to Newsletter
          </a>
        </div>
    </div>
  );
}
