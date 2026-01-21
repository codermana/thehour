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

            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-white">
              <div className="mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-white rounded-full blur-xl animate-ping" />
                  <div className="relative bg-white text-red-600 px-8 py-3 rounded-full text-2xl font-black flex items-center gap-3">
                    <span className="relative flex h-4 w-4">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75" />
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-red-600" />
                    </span>
                    WE&apos;RE LIVE NOW!
                  </div>
                </div>
              </div>

              <h3 className="text-3xl md:text-4xl font-black text-center mb-4 drop-shadow-lg px-4">
                {session.data.title}
              </h3>

              {/* <div className="bg-black/30 backdrop-blur-sm px-6 py-2 rounded-full mb-8 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="font-semibold">47 watching now</span>
              </div> */}

              <a href={session.data.joinLink} target="_blank" className="group relative">
                <div className="absolute -inset-2 bg-white rounded-full blur opacity-75 group-hover:opacity-100 transition" />
                <button className="relative bg-white text-red-600 px-12 py-5 rounded-full text-xl font-black hover:scale-105 transition-transform flex items-center gap-3 cursor-pointer">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                  </svg>
                  JOIN STREAM
                </button>
              </a>
            </div>
          </div>
        </div>

        <a href={"/sessions/"+session.id}  className="block p-6 bg-white dark:bg-zinc-900">
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
