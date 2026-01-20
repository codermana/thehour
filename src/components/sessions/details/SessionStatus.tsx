import type { Session } from "../../../data/Session";

export default function SessionStatus({ session }: { session: Session }) {
  const duration = session.data.duration;

  return (
    <div className="flex items-center gap-3 mb-4">
      <span className={"inline-block px-3 py-1 rounded-full text-xs font-bold uppercase text-white " + session.statusColor}>
        {session.status}
      </span>
      { duration &&
        <span className="text-gray-600 dark:text-gray-400 text-sm">
          {duration} minutes
        </span>
      }
    </div>
  );
}
