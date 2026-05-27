import { useEffect, useRef, ReactNode } from "react";

type AnimationType = "fade" | "scale" | "left" | "right" | "default";

export function Reveal({
  children,
  delay = 0,
  className = "",
  type = "default"
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  type?: AnimationType;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("in"), delay);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  const animationClass = type === "default" ? "reveal" : `reveal-${type}`;

  return (
    <div ref={ref} className={`${animationClass} ${className}`}>
      {children}
    </div>
  );
}
