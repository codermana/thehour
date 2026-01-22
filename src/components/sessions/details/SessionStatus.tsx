import { computeSessionStatus } from "../../../data/computeSessionStatus";
import { SESSION_STATUS, type Session } from "../../../data/Session";
import useClock from "../../helpers/useClock";

const STATUS_BADGE_COLORS = {
  [SESSION_STATUS.UPCOMING]: {
    bg: 'bg-green-50 dark:bg-green-900/20',
    border: 'border-green-200 dark:border-green-800',
    dot: 'bg-green-500',
    ping: 'bg-green-400',
    text: 'text-green-700 dark:text-green-300',
  },
  [SESSION_STATUS.RECORDED]: {
    bg: 'bg-blue-50 dark:bg-blue-900/20',
    border: 'border-blue-200 dark:border-blue-800',
    dot: 'bg-blue-500',
    ping: 'bg-blue-400',
    text: 'text-blue-700 dark:text-blue-300',
  },
  [SESSION_STATUS.LIVE]: {
    bg: 'bg-red-50 dark:bg-red-900/20',
    border: 'border-red-200 dark:border-red-800',
    dot: 'bg-red-500',
    ping: 'bg-red-400 animate-ping',
    text: 'text-red-700 dark:text-red-300',
  }
}

export default function SessionStatus({ session }: { session: Session }) {
  let status = computeSessionStatus(session.startDateTime);
  let colors = STATUS_BADGE_COLORS[status];

  if(status != SESSION_STATUS.RECORDED) {
    useClock(1000);
  }

  return (
    <div
      className={`inline-flex items-center gap-3 px-6 py-3 rounded-full mb-4
        border ${colors.bg} ${colors.border}`}
    >
      <span className="relative flex h-3 w-3">
        <span
          className={`absolute inline-flex h-full w-full rounded-full opacity-75 ${colors.ping}`}
        />
        <span className={`relative inline-flex rounded-full h-3 w-3 ${colors.dot}`} />
      </span>

      <span className={`font-bold uppercase text-sm ${colors.text}`}>
        {status} session
      </span>
    </div>
  );
}
