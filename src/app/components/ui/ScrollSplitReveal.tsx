import { type CSSProperties, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { gsap, ScrollTrigger } from '../../gsapSetup';

type ScrollSplitRevealProps = {
  /** Mismo texto que antes: una entrada por cada línea (como los `<br />`). */
  lines: readonly string[];
  className?: string;
  style?: CSSProperties;
};

function splitWordsPreserveSpaces(line: string): { type: 'space' | 'word'; value: string }[] {
  const out: { type: 'space' | 'word'; value: string }[] = [];
  const parts = line.split(/(\s+)/);
  for (const p of parts) {
    if (!p) continue;
    if (/^\s+$/.test(p)) out.push({ type: 'space', value: p });
    else out.push({ type: 'word', value: p });
  }
  return out;
}

/**
 * Reveal al scroll inspirado en el demo SplitText de GSAP (líneas + palabras en stagger),
 * sin plugin SplitText: el copy es idéntico al que se pasa en `lines`.
 * @see https://codepen.io/GreenSock/pen/xxmaNYj
 */
export function ScrollSplitReveal({ lines, className = '', style }: ScrollSplitRevealProps) {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const [reducedMotion, setReducedMotion] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const linesKey = lines.join('\n');

  useLayoutEffect(() => {
    if (reducedMotion) return;
    const root = ref.current;
    if (!root) return;

    root.replaceChildren();

    const wordEls: HTMLElement[] = [];

    for (const line of lines) {
      const lineMask = document.createElement('div');
      lineMask.style.overflow = 'hidden';
      lineMask.style.paddingBottom = '0.06em';
      lineMask.style.marginBottom = '-0.06em';

      const inner = document.createElement('div');
      inner.style.transformOrigin = '50% 50% -40px';
      inner.style.willChange = 'transform, opacity';

      for (const part of splitWordsPreserveSpaces(line)) {
        if (part.type === 'space') {
          inner.appendChild(document.createTextNode(part.value));
        } else {
          const span = document.createElement('span');
          span.textContent = part.value;
          span.style.display = 'inline-block';
          span.style.willChange = 'transform, opacity';
          wordEls.push(span);
          inner.appendChild(span);
        }
      }

      lineMask.appendChild(inner);
      root.appendChild(lineMask);
    }

    gsap.set(wordEls, { opacity: 0, y: 28, rotationX: -42 });

    const st = ScrollTrigger.create({
      trigger: root,
      start: 'top 88%',
      once: true,
      onEnter: () => {
        gsap.to(wordEls, {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 0.68,
          ease: 'power3.out',
          stagger: 0.045,
          onComplete: () => {
            gsap.set(wordEls, { clearProps: 'opacity,transform' });
          },
        });
      },
    });

    return () => {
      st.kill();
      gsap.killTweensOf(wordEls);
    };
  }, [linesKey, reducedMotion]);

  const motionStyle: CSSProperties = {
    ...style,
    perspective: '520px',
    transformStyle: 'preserve-3d',
  };

  if (reducedMotion) {
    return (
      <p ref={ref} className={className} style={style}>
        {lines.map((line, i) => (
          <span key={i}>
            {i > 0 ? <br /> : null}
            {line}
          </span>
        ))}
      </p>
    );
  }

  return <p ref={ref} className={className} style={motionStyle} />;
}
