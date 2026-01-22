import getResourceCount from "../../../data/resources";
import type { Session } from "../../../data/Session";
import { getThumbnail } from "../../../data/video";
import DateTime from "../../generic/DateTime";

export default function LatestSessionHero({ session }: { session: Session }) {
  let thumbnail = getThumbnail(session);
  return (
    <section id="sessions" className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Latest Session</h2>

      <a href={"/sessions/"+session.id} className="block bg-gray-50 dark:bg-zinc-900 rounded-xl overflow-hidden border border-gray-200 dark:border-zinc-800 hover:border-codermana-orange dark:hover:border-codermana-orange transition-all hover:shadow-lg group">
          <div className="relative bg-black">
              <div className="aspect-video">
                {thumbnail &&
                  <img
                      src={getThumbnail(session)}
                      alt={session.data.title}
                      className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                  />
                }
                  <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-codermana-orange group-hover:bg-codermana-dark-orange w-20 h-20 rounded-full flex items-center justify-center transition-all group-hover:scale-110 shadow-2xl">
                          <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                          </svg>
                      </div>
                  </div>
              </div>
              <div className={"absolute top-4 left-4 text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-2 shadow-lg uppercase " + session.statusColor}>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"/>
                  </svg>
                  {session.status}
              </div>
          </div>

          <div className="p-6">
              <p className="text-codermana-orange font-semibold text-sm mb-2">
                <DateTime timestamp={session.startDateTime}/>
              </p>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-codermana-orange transition-colors">
                  {session.data.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {session.data.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {session.data.topics.map((topic) => (
                  <span key={topic} className="bg-gray-200 dark:bg-zinc-800 px-3 py-1 rounded-full text-xs text-gray-700 dark:text-gray-300">{topic}</span>
                ))}
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 pt-4 border-t border-gray-200 dark:border-zinc-800">
                  <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                      </svg>
                      {getResourceCount(session)} resources
                  </span>
              </div>
          </div>
      </a>
    </section>
  );
}
