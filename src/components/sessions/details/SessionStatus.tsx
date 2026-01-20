import type { CollectionEntry } from "astro:content";

export default function SessionStatus({ session }: { session: CollectionEntry<'sessions'> }) {
  if(session.data.upcoming) {
    return (
      <div className="flex items-center gap-3 mb-4">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase text-white bg-green-500">
          UPCOMING
        </span>
      </div>
    );
  }

  const duration = session.data.duration;

  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase text-white bg-blue-600">
        RECORDED
      </span>
      { duration &&
        <span className="text-gray-600 dark:text-gray-400 text-sm">
          {duration} minutes
        </span>
      }
    </div>
  );
}
