import { useEffect, useState } from "react";

export default function useClock(tickMs = 60_000) {
  const [, set] = useState(0);
  useEffect(() => {
    const id = setInterval(() => set(v => v + 1), tickMs);
    return () => clearInterval(id);
  }, [tickMs]);
}
