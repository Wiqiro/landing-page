"use client";

import React, { ReactNode, useEffect, useRef, useState } from "react";

type Props = {
  end: number;
  duration?: number;
  label?: ReactNode;
};

const AnimatedNumber = ({ end, duration = 1500, label }: Props) => {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  // Démarre une seule fois quand visible
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(([entry], obs) => {
      if (entry.isIntersecting) {
        setStarted(true);
        obs.unobserve(el); // évite tout redémarrage
      }
    }, { threshold: 0.2 });

    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      setValue(end);
      return;
    }

    let raf = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      setValue(Math.round(eased * end));
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, end, duration]);

  return (
    <div ref={ref} className="flex flex-col items-center w-50 space-y-2">
      <p className="text-orange-400 font-bold text-5xl">{value}</p>
      {label && <p>{label}</p>}
    </div>
  );
};

export default AnimatedNumber;
