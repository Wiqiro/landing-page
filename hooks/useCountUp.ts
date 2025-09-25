import { useEffect, useRef, useState } from "react";

const easeInOutCubic = (t: number) => {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
};

export const useCountUp = (target: number, duration = 1500, start = true) => {
  const [value, setValue] = useState(0);
  const rafId = useRef<number | null>(null);
  const startTime = useRef<number | null>(null);

  useEffect(() => {
    if (!start) return;
    let cancelled = false;

    const step = (timestamp: number) => {
      if (startTime.current === null) startTime.current = timestamp;
      const rawProgress = Math.min(
        (timestamp - startTime.current) / duration,
        1
      );
      const eased = easeInOutCubic(rawProgress);
      const v = Math.round(eased * target);
      if (!cancelled) setValue(v);

      if (rawProgress < 1) {
        rafId.current = requestAnimationFrame(step);
      } else {
        if (!cancelled) setValue(target);
      }
    };

    rafId.current = requestAnimationFrame(step);

    return () => {
      cancelled = true;
      if (rafId.current) cancelAnimationFrame(rafId.current);
      startTime.current = null;
    };
  }, [target, duration, start]);

  return value;
};

export default useCountUp;
