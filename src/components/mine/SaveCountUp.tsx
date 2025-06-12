'use client';

import { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';

export default function SafeCountUp({ end }: { end: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {start ? <CountUp end={end} duration={2.5} /> : 0}
    </div>
  );
}
