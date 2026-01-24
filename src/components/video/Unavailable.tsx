export default function Unavailable() {
  return (
    <div id="video-unavailable" className="bg-gray-50 dark:bg-zinc-900 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-zinc-800 my-10">
      <div className="aspect-video relative bg-linear-to-br from-gray-100 to-gray-200 dark:from-zinc-800 dark:to-zinc-900 flex items-center justify-center">
          <div className="text-center px-4">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-300 dark:bg-zinc-700 rounded-full mb-4">
                  <svg className="w-10 h-10 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                  </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Video Temporarily Unavailable
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                  We're experiencing issues with the video. Please check back later or contact us.
              </p>
              <a href="mailto:thehour@codermana.com" className="inline-flex items-center gap-2 text-codermana-orange hover:underline font-semibold">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  Contact Support
              </a>
          </div>
      </div>
    </div>
  );
}
