import { useEffect, useRef, useState } from 'react';

export const useCounter = (target: number, duration = 1800) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();

          const tick = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
            else setCount(target);
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref: nodeRef };
};
