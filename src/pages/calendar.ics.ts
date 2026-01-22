import type { APIContext } from "astro";
import { getCollection } from "astro:content";

import { wrapSession } from "../data/Session";
import { isRecorded } from "../data/status";

/**
 * Convert ISO string with offset to UTC ICS format: YYYYMMDDTHHmmssZ
 */
function toICSDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
}

/**
 * Generate a stable UID per session
 * Never change this format once live
 */
function sessionUID(sessionId: string) {
  return `thehour-${sessionId}@codermana.com`;
}

export async function GET(context: APIContext) {
  const sessions = (await getCollection("sessions")).map(wrapSession);

  const events = sessions.filter((session) => !isRecorded(session)).map((entry) => {
    const {
      title,
      description,
      startTime,
      duration,
    } = entry.data;

    const start = new Date(startTime);

    // Default duration = 60 mins
    let end = new Date(start.getTime() + 60 * 60 * 1000);

    if (duration) {
      const [min, sec = "0"] = duration.split(":");
      end = new Date(
        start.getTime() +
          (parseInt(min) * 60 + parseInt(sec)) * 1000
      );
    }
    let location = new URL(`/sessions/${entry.id}`, context.site).toString();

    return [
      "BEGIN:VEVENT",
      `UID:${sessionUID(entry.id)}`,
      `DTSTAMP:${toICSDate(new Date().toISOString())}`,
      `DTSTART:${toICSDate(startTime)}`,
      `DTEND:${toICSDate(end.toISOString())}`,
      `SUMMARY:${title}`,
      `DESCRIPTION:${description.replace(/\n/g, "\\n")}`,
      `LOCATION:${location}`,
      "END:VEVENT",
    ].join("\r\n");
  });

  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Codermana//The Hour//EN",
    "CALSCALE:GREGORIAN",
    ...events,
    "END:VCALENDAR",
  ].join("\r\n");

  return new Response(ics, {
    status: 200,
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Cache-Control": "no-cache, must-revalidate",
    },
  });
};
