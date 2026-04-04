import getResourceCount from "../../../data/resources";
import type { Session } from "../../../data/Session";

export default function LiveSessionHero({ session }: { session: Session }) {
  return (
    <section id="sessions" className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
        <span id="session-status-text">Latest Session</span>
      </h2>

      <div className="bg-gray-50 dark:bg-zinc-900 rounded-xl overflow-hidden border-2 border-red-500 dark:border-red-600 shadow-2xl"
      >
        <div className="block relative bg-linear-to-br from-red-600 via-red-500 to-orange-500">
          <div className="aspect-video relative overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-linear-to-br from-red-600/80 via-red-500/80 to-orange-500/80 animate-pulse" />

              <div
                className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-bounce"
                style={{ animationDuration: "3s" }}
              />

              <div
                className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"
                style={{ animationDuration: "4s" }}
              />

              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
                  backgroundSize: "50px 50px",
                }}
              />
            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4 text-white">
              <div className="mb-6 flex items-center gap-3 rounded-full border border-white/30 bg-black/30 px-4 py-2 backdrop-blur-md shadow-lg">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-300 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-200" />
                </span>
                <span className="text-xs font-black tracking-[0.28em] uppercase">
                  We&apos;re Live Now
                </span>
              </div>

              <h3 className="text-3xl md:text-4xl font-black text-center mb-4 drop-shadow-lg px-4">
                {session.data.title}
              </h3>

              {/* <div className="bg-black/30 backdrop-blur-sm px-6 py-2 rounded-full mb-8 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="font-semibold">47 watching now</span>
              </div> */}

              <a
                href={session.data.joinLink}
                target="_blank"
                className="group relative mt-2 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-black text-red-600 shadow-2xl transition-all hover:scale-[1.02] hover:bg-red-50 focus:outline-none focus:ring-4 focus:ring-white/40"
              >
                <div className="absolute -inset-2 rounded-full bg-white/50 blur-xl opacity-70 transition-opacity group-hover:opacity-100" />
                <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-red-600 text-white shadow-lg">
                  <svg className="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </span>
                <span className="relative flex flex-col items-start leading-none">
                  <span className="text-[0.65rem] font-bold uppercase tracking-[0.24em] text-red-500/80">
                    Join Live
                  </span>
                  <span className="text-lg font-black text-red-600">
                    Stream Now
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>

        <a href={session.slugPath}  className="block p-6 bg-white dark:bg-zinc-900">
          <div className="flex items-center gap-3 mb-3">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase text-white bg-red-600 animate-pulse">
              LIVE NOW
            </span>
            <span className="text-gray-600 dark:text-gray-400 text-sm">
              Started few minutes ago
            </span>
          </div>

          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {session.data.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {session.data.topics.map((topic) => (
              <span key={topic} className="bg-gray-200 dark:bg-zinc-800 px-3 py-1 rounded-full text-xs text-gray-700 dark:text-gray-300">
                {topic}
              </span>
            ))}
          </div>
        </a>
      </div>
    </section>
  );
}
