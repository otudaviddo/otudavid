"use client";
import { useEffect, useRef, useState } from "react";

/* Trace les dessins au trait (classe .draw) quand le bloc arrive à l'écran. */
export default function DrawOnView({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); io.disconnect(); } }, { threshold: 0.35 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`draw-on ${visible ? "is-visible" : ""} ${className}`}>{children}</div>;
}
