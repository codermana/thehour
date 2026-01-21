import { useEffect, useState } from "react";

export default function FormattedTime({ timestamp }: { timestamp: Date }) {
  let localeOptions: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    timeZoneName: 'short',
  };

  let initialTime = timestamp.toLocaleTimeString(undefined, localeOptions);

  const [formattedTime, setFormattedTime] = useState(initialTime);

  useEffect(() => {
    setFormattedTime(timestamp.toLocaleTimeString(undefined, localeOptions));
  }, [timestamp]);

  return (
    <>
      {formattedTime}
    </>
  );
}
