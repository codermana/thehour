export default function Processing() {
  return (
    <div
      id="video-processing"
      className="
        my-10 rounded-xl overflow-hidden shadow-2xl border-2 transition-colors
        bg-gray-50 border-gray-200
        hover:border-codermana-orange
        dark:bg-gray-900 dark:border-transparent dark:hover:border-codermana-orange
      "
    >
      <div
        className="
          aspect-video relative
          bg-linear-to-br from-gray-100 via-gray-50 to-gray-100
          dark:from-gray-900 dark:via-zinc-900 dark:to-gray-800
        "
      >
        {/* Decorative background */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.04] dark:opacity-5"
            style={{
              backgroundImage:
                'linear-linear(rgba(255,140,66,.3) 1px, transparent 1px), linear-linear(90deg, rgba(255,140,66,.3) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />

          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-codermana-orange/10 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-codermana-orange/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: '1s' }}
          />
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
          {/* Spinner */}
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-codermana-orange/30 rounded-full blur-2xl animate-pulse" />
            <div className="relative bg-linear-to-br from-codermana-orange to-codermana-dark-orange p-6 rounded-2xl">
              <svg
                className="w-16 h-16 text-white animate-spin"
                style={{ animationDuration: '2s' }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </div>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 text-center">
            Video Processing
          </h3>

          <p className="text-gray-600 dark:text-gray-300 text-center mb-6 max-w-md">
            We're editing, processing and uploading the recording. This usually
            takes 2–3 days after the session ends.
          </p>

          {/* Progress */}
          <div className="w-full max-w-md mb-6">
            <div className="bg-gray-200 dark:bg-gray-800 rounded-full h-2 overflow-hidden">
              <div
                className="bg-linear-to-r from-codermana-orange to-codermana-dark-orange h-full rounded-full animate-pulse"
                style={{ width: '65%' }}
              />
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm text-center mt-2">
              Processing… Check back soon!
            </p>
          </div>

          {/* While you wait */}
          <div
            className="
              max-w-md rounded-xl p-4 border backdrop-blur-sm
              bg-white/70 border-gray-200
              dark:bg-gray-800/50 dark:border-gray-700
            "
          >
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
              <strong className="text-gray-900 dark:text-white">
                While you wait:
              </strong>
            </p>

            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              {[
                'Download slides and code below',
                'Subscribe to get notified when video is ready',
                'Check out previous sessions',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <svg
                    className="w-4 h-4 text-codermana-orange mt-0.5 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
