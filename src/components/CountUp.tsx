import { useEffect, useMemo, useRef, useState } from 'react';

interface CountUpProps {
  from?: number;
  to: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  separator?: string;
  className?: string;
  formatter?: (value: number) => string;
}

function defaultFormat(value: number, decimals: number, separator: string) {
  const fixed = value.toFixed(decimals);
  const [intPart, fracPart] = fixed.split('.');
  const grouped = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
  if (!fracPart) return grouped;
  return `${grouped}.${fracPart}`;
}

export default function CountUp({
  from = 0,
  to,
  duration = 1.8,
  decimals = 0,
  prefix = '',
  suffix = '',
  separator = ',',
  className,
  formatter,
}: CountUpProps) {
  const rootRef = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(from);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setHasStarted(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(root);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;
    let raf = 0;
    const start = performance.now();
    const delta = to - from;

    const tick = (t: number) => {
      const progress = Math.min((t - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(from + delta * eased);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [hasStarted, from, to, duration]);

  const output = useMemo(() => {
    if (formatter) return formatter(value);
    return `${prefix}${defaultFormat(value, decimals, separator)}${suffix}`;
  }, [formatter, value, prefix, suffix, decimals, separator]);

  return (
    <span ref={rootRef} className={className}>
      {output}
    </span>
  );
}

