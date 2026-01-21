import type { Session } from "./Session";

export default function getResourceCount(session: Session): number {
  let resources = session.data.resources;

  if (!resources) return 0;

  return Object.values(resources).filter(value => {
    if (Array.isArray(value)) return value.length > 0;
    return Boolean(value);
  }).length;
}
