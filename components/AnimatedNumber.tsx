"use client";

import React, { useEffect, useRef, useState } from "react";

type Props = {
  end: number;
  duration?: number;
  label?: React.ReactNode;
};

const AnimatedNumber: React.FC<Props> = ({ end, duration = 3000, label }) => {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const raf = useRef<number | null>(null);

  const easeInOutCubic = (t: number) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const startAnim = () => {
      const start = performance.now();

      const loop = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        setValue(Math.round(easeInOutCubic(progress) * end));
        if (progress < 1) raf.current = requestAnimationFrame(loop);
      };

      setValue(0);
      raf.current = requestAnimationFrame(loop);
    };

    const isVisible = () => {
      const r = el.getBoundingClientRect();
      return r.top < window.innerHeight && r.bottom >= 0;
    };

    const onScroll = () => {
      if (isVisible()) {
        startAnim();
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [end, duration]);

  return (
    <div ref={ref} className="flex flex-col items-center w-50 space-y-2">
      <p className="text-orange-400 font-bold text-5xl">{value}</p>
      {label && <p>{label}</p>}
    </div>
  );
};

export default AnimatedNumber;
