import { useEffect, useState } from 'react';
import AnimatedNumber from '../../generic/AnimatedNumber';
import getTimeParts from '../../helpers/getTimeParts';
import { SESSION_STATUS, type Session } from '../../../data/Session';
import { computeSessionStatus } from '../../../data/computeSessionStatus';

const FIVE_MINUTES_MS = 5 * 60 * 1000;

function TimeBox({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div className="bg-gray-50 dark:bg-zinc-900 rounded-lg p-4 min-w-20 border border-gray-200 dark:border-zinc-800">
      <AnimatedNumber value={value} />
      <div className="text-xs text-gray-600 dark:text-gray-400 uppercase mt-1">
        {label}
      </div>
    </div>
  );
}

export default function Countdown({ session }: { session: Session }) {
  let status = computeSessionStatus(session.startDateTime);

  if(status == SESSION_STATUS.RECORDED) {
    return null;
  }

  const target = +session.startDateTime;

  const [remaining, setRemaining] = useState(() =>
    target - Date.now()
  );

  useEffect(() => {
    const id = setInterval(() => {
      setRemaining(target - Date.now());
    }, 1000);

    return () => clearInterval(id);
  }, [target]);


  const { days, hours, minutes, seconds } =
    getTimeParts(remaining);

  return (
    <div className="mb-6">
      { status == SESSION_STATUS.UPCOMING &&
        <div className="flex justify-center gap-4 text-center">
          <TimeBox label="Days" value={days} />
          <TimeBox label="Hours" value={hours} />
          <TimeBox label="Minutes" value={minutes} />
          <TimeBox label="Seconds" value={seconds} />
        </div>
      }
      {(remaining <= FIVE_MINUTES_MS || status == SESSION_STATUS.LIVE) &&
        <div className="flex justify-center text-center mt-4">
          <a href={session.data.joinLink} target="_blank" className="group relative">
            <button className="relative bg-gray-300 text-red-600 px-12 py-5 rounded-full text-xl font-black hover:scale-105 transition-transform flex items-center gap-3 cursor-pointer">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
              </svg>
              JOIN
            </button>
          </a>
        </div>
      }
    </div>
  );
}
