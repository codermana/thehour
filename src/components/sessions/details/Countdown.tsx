import { useEffect, useState } from 'react';
import AnimatedNumber from '../../generic/AnimatedNumber';
import getTimeParts from '../../helpers/getTimeParts';

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

export default function Countdown({ startTime, joinLink }: { startTime: Date, joinLink: string | undefined }) {
  const target = +startTime;

  const [remaining, setRemaining] = useState(() =>
    target - Date.now()
  );

  useEffect(() => {
    const id = setInterval(() => {
      setRemaining(target - Date.now());
    }, 1000);

    return () => clearInterval(id);
  }, [target]);


  if (remaining <= 0) {
    return null;
  }

  const { days, hours, minutes, seconds } =
    getTimeParts(remaining);

  return (
    <div className="mb-6">
      <div className="flex justify-center gap-4 text-center">
        <TimeBox label="Days" value={days} />
        <TimeBox label="Hours" value={hours} />
        <TimeBox label="Minutes" value={minutes} />
        <TimeBox label="Seconds" value={seconds} />
      </div>
      {remaining <= FIVE_MINUTES_MS &&
        <a href={joinLink} target="_blank" className="block text-2xl font-bold text-codermana-orange mt-8"> Join Here</a>
      }
    </div>
  );
}
