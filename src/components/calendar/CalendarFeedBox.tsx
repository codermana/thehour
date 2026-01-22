import { useState } from "react";

export default function CalendarFeedBox({ url }: { url : string } ) {
  const [copied, setCopied] = useState(false);

  const copyCalendarURL = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      alert(
        `Failed to copy. Please copy manually: ${url}`
      );
    }
  };

  return (
    <div className="bg-linear-to-br from-codermana-orange to-codermana-dark-orange rounded-2xl p-8 mb-12 text-white">
      <h2 className="text-2xl font-bold mb-4">📅 Calendar Feed URL</h2>

      <p className="mb-4 opacity-90">
        Copy this URL to subscribe to all upcoming sessions:
      </p>

      <div onClick={copyCalendarURL} className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-4 border border-white/30 cursor-pointer">
        <code className="text-white font-mono text-sm break-all">
          {url}
        </code>
      </div>

      <button
        onClick={copyCalendarURL}
        className="flex items-center gap-2 bg-white text-codermana-dark-orange px-6 py-3 rounded-lg font-semibold hover:shadow-xl cursor-pointer transition-all"
        aria-live="polite"
      >
        {copied ? (
          <>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            Copied!
          </>
        ) : (
          <>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
            Copy URL
          </>
        )}
      </button>
    </div>
  );
}
