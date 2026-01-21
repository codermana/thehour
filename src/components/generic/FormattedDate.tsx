import { useEffect, useState } from "react";

export default function FormattedDate({ timestamp }: { timestamp: Date }) {
  let localeOptions: Intl.DateTimeFormatOptions = {      weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  let initialDate = timestamp.toLocaleDateString(undefined, localeOptions);

  const [formattedDate, setFormattedDate] = useState(initialDate);

  useEffect(() => {
    setFormattedDate(timestamp.toLocaleDateString(undefined, localeOptions));
  }, [timestamp]);

  return (
    <>
      {formattedDate}
    </>
  );
}
