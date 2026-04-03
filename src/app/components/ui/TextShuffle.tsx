import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const CHARSET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

type TextShuffleProps = {
  text: string;
  /** Clases del heading (ej. os-section-h2) */
  className?: string;
  shuffleDirection?: 'left' | 'right';
  duration?: number;
  stagger?: number;
  shuffleTimes?: number;
  /** Índices impares primero, pares con retardo (comportamiento tipo React Bits evenodd) */
  animationMode?: 'evenodd' | 'random';
};

function measureChar(char: string, font: string): number {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (!ctx) return 8;
  ctx.font = font;
  const s = char === ' ' ? '\u00a0' : char;
  return Math.max(1, ctx.measureText(s).width);
}

function decoyFor(char: string): string {
  if (char === ' ' || char === '\n') return char;
  if (!/[A-ZÑÁÉÍÓÚÜa-zñáéíóúü0-9]/i.test(char)) return char;
  return CHARSET[Math.floor(Math.random() * CHARSET.length)] ?? 'X';
}

/**
 * Efecto shuffle por carácter (patrón alineado a React Bits Shuffle, sin plugin SplitText).
 * @see https://reactbits.dev/text-animations/shuffle
 */
export function TextShuffle({
  text,
  className = '',
  shuffleDirection = 'right',
  duration = 0.38,
  stagger = 0.028,
  shuffleTimes = 1,
  animationMode = 'evenodd',
}: TextShuffleProps) {
  const h2Ref = useRef<HTMLHeadingElement>(null);
  const layerRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const h2 = h2Ref.current;
    const layer = layerRef.current;
    if (!h2 || !layer) return;

    layer.textContent = text;

    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const cs = getComputedStyle(h2);
    const font = `${cs.fontStyle} ${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`;
    const fontFamily = cs.fontFamily;

    let st: ScrollTrigger | null = null;
    let tl: gsap.core.Timeline | null = null;
    const inners: HTMLSpanElement[] = [];

    const teardown = () => {
      tl?.kill();
      tl = null;
      layer.replaceChildren();
      inners.length = 0;
    };

    const build = () => {
      teardown();
      const chars = Array.from(text);
      const rolls = Math.max(1, Math.floor(shuffleTimes));
      const steps = rolls + 1;

      chars.forEach((ch) => {
        const w = measureChar(ch, font);
        const wrap = document.createElement('span');
        wrap.className = 'inline-block overflow-hidden align-bottom text-left';
        wrap.style.width = `${w}px`;

        const inner = document.createElement('span');
        inner.className =
          'inline-block whitespace-nowrap will-change-transform [transform:translateZ(0)] text-left';

        const firstOrig = document.createElement('span');
        firstOrig.textContent = ch;
        Object.assign(firstOrig.style, {
          display: 'inline-block',
          width: `${w}px`,
          fontFamily,
        });

        const real = document.createElement('span');
        real.textContent = ch;
        real.setAttribute('data-orig', '1');
        Object.assign(real.style, {
          display: 'inline-block',
          width: `${w}px`,
          fontFamily,
        });

        inner.appendChild(firstOrig);
        for (let k = 0; k < rolls; k++) {
          const c = document.createElement('span');
          c.textContent = decoyFor(ch);
          Object.assign(c.style, {
            display: 'inline-block',
            width: `${w}px`,
            fontFamily,
          });
          inner.appendChild(c);
        }
        inner.appendChild(real);

        {
          const firstCopy = inner.firstElementChild as HTMLElement | null;
          const lastReal = inner.lastElementChild as HTMLElement | null;
          if (lastReal) inner.insertBefore(lastReal, inner.firstChild);
          if (firstCopy) inner.appendChild(firstCopy);
        }

        let startX = 0;
        let finalX = 0;
        if (shuffleDirection === 'right') {
          startX = -steps * w;
          finalX = 0;
        } else {
          startX = 0;
          finalX = -steps * w;
        }

        gsap.set(inner, { x: startX, force3D: true });
        inner.dataset.startX = String(startX);
        inner.dataset.finalX = String(finalX);

        wrap.appendChild(inner);
        layer.appendChild(wrap);
        inners.push(inner);
      });
    };

    const play = () => {
      build();
      const strips = inners;
      if (!strips.length) return;

      const ease = 'power3.out';

      tl = gsap.timeline({
        onComplete: () => {
          layer.textContent = text;
          gsap.set(layer, { clearProps: 'all' });
        },
      });

      if (animationMode === 'evenodd') {
        const odd = strips.filter((_, i) => i % 2 === 1);
        const even = strips.filter((_, i) => i % 2 === 0);
        const oddTotal = duration + Math.max(0, odd.length - 1) * stagger;
        const evenStart = odd.length ? oddTotal * 0.68 : 0;
        if (odd.length) {
          tl.to(
            odd,
            {
              x: (_, t) => parseFloat((t as HTMLElement).dataset.finalX || '0'),
              duration,
              ease,
              stagger,
            },
            0,
          );
        }
        if (even.length) {
          tl.to(
            even,
            {
              x: (_, t) => parseFloat((t as HTMLElement).dataset.finalX || '0'),
              duration,
              ease,
              stagger,
            },
            evenStart,
          );
        }
      } else {
        tl.to(strips, {
          x: (_, t) => parseFloat((t as HTMLElement).dataset.finalX || '0'),
          duration,
          ease,
          stagger: { each: stagger, from: 'random' },
        });
      }
    };

    st = ScrollTrigger.create({
      trigger: h2,
      start: 'top 88%',
      once: true,
      onEnter: () => {
        play();
      },
    });

    return () => {
      st?.kill();
      tl?.kill();
      teardown();
    };
  }, [text, className, shuffleDirection, duration, stagger, shuffleTimes, animationMode]);

  return (
    <h2 ref={h2Ref} className={`relative max-w-full ${className}`.trim()} aria-label={text}>
      <span className="invisible block select-none" aria-hidden="true">
        {text}
      </span>
      <span
        ref={layerRef}
        className="absolute left-0 top-0 block max-w-full whitespace-normal break-words text-left"
        aria-hidden="true"
      />
    </h2>
  );
}
