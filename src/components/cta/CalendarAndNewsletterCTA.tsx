export default function CalendarAndNewsletterCTA() {
  return (
    <div className="mt-12 bg-linear-to-br from-codermana-orange to-codermana-dark-orange rounded-2xl p-8 text-center text-white">
      <h2 className="text-2xl font-bold mb-3">Never Miss a Session</h2>
      <p className="text-lg mb-6 opacity-90">
        Subscribe to our calendar feed and get all upcoming sessions automatically added to your calendar.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <button className="inline-flex items-center justify-center gap-2 bg-white text-codermana-dark-orange px-6 py-3 rounded-full font-bold hover:shadow-xl transition-all">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
          Subscribe to Calendar
        </button>
        <a href="index.html#subscribe" className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm text-white border-2 border-white px-6 py-3 rounded-full font-bold hover:bg-white/30 transition-all">
          Get Email Updates
        </a>
      </div>
    </div>
  );
}
