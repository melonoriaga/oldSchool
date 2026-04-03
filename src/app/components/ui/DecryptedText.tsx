import { useEffect, useMemo, useRef, useState } from 'react';

type DecryptedTextProps = {
  text: string;
  className?: string;
  /** ms entre cada carácter revelado */
  speed?: number;
  /** Solo mezclar con letras que ya existen en `text` (efecto “descifrado”) */
  useOriginalCharsOnly?: boolean;
  charset?: string;
  /** Repite el descifrado al pasar el mouse (como React Bits inViewHover / hover). */
  replayOnHover?: boolean;
};

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]!;
}

/**
 * Texto que pasa de caracteres aleatorios a la frase final (patrón React Bits Decrypted Text).
 * @see https://reactbits.dev/text-animations/decrypted-text
 */
export function DecryptedText({
  text,
  className = '',
  speed = 52,
  useOriginalCharsOnly = true,
  charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
  replayOnHover = false,
}: DecryptedTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const glyphs = useMemo(() => Array.from(text), [text]);
  const pool = useMemo(() => {
    if (!useOriginalCharsOnly) return charset.split('');
    const uniq = [...new Set(glyphs.filter((c) => c !== ' ' && c !== '\n'))];
    return uniq.length ? uniq : charset.split('');
  }, [useOriginalCharsOnly, charset, glyphs]);

  const [started, setStarted] = useState(false);
  const [revealed, setRevealed] = useState(0);
  const [scrambleTick, setScrambleTick] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      setStarted(true);
      setRevealed(glyphs.length);
      return;
    }
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setStarted(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    );
    io.observe(node);
    return () => io.disconnect();
  }, [glyphs.length, reducedMotion]);

  useEffect(() => {
    if (!started || revealed >= glyphs.length) return;
    const id = window.setTimeout(() => setRevealed((n) => n + 1), speed);
    return () => window.clearTimeout(id);
  }, [started, revealed, glyphs.length, speed]);

  useEffect(() => {
    if (!started || revealed >= glyphs.length) return;
    const id = window.setInterval(() => setScrambleTick((t) => t + 1), 42);
    return () => clearInterval(id);
  }, [started, revealed, glyphs.length]);

  const display = useMemo(() => {
    return glyphs
      .map((c, i) => {
        if (i < revealed) return c;
        if (c === ' ' || c === '\n') return c;
        return String(pickRandom(pool));
      })
      .join('');
  }, [glyphs, revealed, pool, scrambleTick]);

  const restart = () => {
    if (reducedMotion) return;
    setStarted(true);
    setRevealed(0);
    setScrambleTick((t) => t + 1);
  };

  return (
    <span
      ref={ref}
      className={className}
      onMouseEnter={replayOnHover ? restart : undefined}
    >
      {display}
    </span>
  );
}
