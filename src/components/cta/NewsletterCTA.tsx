export default function NewsletterCTA() {
  return (
    <section id="subscribe" className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-linear-to-br from-codermana-orange to-codermana-dark-orange rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Don't Miss Any Sessions</h2>
            <p className="text-lg mb-8 opacity-90">
                Subscribe to our newsletter for session announcements, resources, and exclusive content.
            </p>

            <div className="max-w-md mx-auto">
                <form className="flex flex-col sm:flex-row gap-3">
                    <input
                        type="email"
                        placeholder="your@email.com"
                        className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white bg-white "
                        required
                    />
                    <button
                        type="submit"
                        className="bg-white text-codermana-dark-orange px-6 py-3 rounded-lg font-bold hover:shadow-lg transition-shadow"
                    >
                        Subscribe
                    </button>
                </form>
                <p className="text-sm mt-4 opacity-75">
                  No spam. Unsubscribe anytime. Privacy-focused.
                </p>
            </div>
        </div>
    </section>
  );
}
