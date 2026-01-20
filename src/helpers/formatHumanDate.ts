export default function formatHumanDate(isoDate: string, locale = "en-US") {
  const date = new Date(`${isoDate}T00:00:00`);
  return new Intl.DateTimeFormat(locale, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}
