import { useEffect, useRef } from 'react';
import gsap from 'gsap';

type SplitType = 'chars' | 'words' | 'lines' | 'words, chars';

type AnimVars = gsap.TweenVars;

interface SplitTextProps {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  splitType?: SplitType;
  from?: AnimVars;
  to?: AnimVars;
  threshold?: number;
  rootMargin?: string;
  textAlign?: 'left' | 'center' | 'right' | 'start' | 'end';
  onLetterAnimationComplete?: () => void;
}

function makeTokenSpan(content: string) {
  const span = document.createElement('span');
  span.textContent = content;
  span.style.display = 'inline-block';
  span.style.willChange = 'transform, opacity';
  span.setAttribute('data-split-item', 'true');
  return span;
}

function appendByMode(lineNode: HTMLElement, lineText: string, splitType: SplitType) {
  if (splitType === 'words') {
    lineText.split(' ').forEach((word, index, arr) => {
      lineNode.appendChild(makeTokenSpan(word));
      if (index < arr.length - 1) lineNode.appendChild(document.createTextNode(' '));
    });
    return;
  }

  if (splitType === 'chars') {
    for (const char of lineText) {
      lineNode.appendChild(makeTokenSpan(char === ' ' ? '\u00A0' : char));
    }
    return;
  }

  // words, chars
  lineText.split(' ').forEach((word, wIndex, words) => {
    const wordWrap = document.createElement('span');
    wordWrap.style.display = 'inline-block';
    for (const char of word) {
      wordWrap.appendChild(makeTokenSpan(char));
    }
    lineNode.appendChild(wordWrap);
    if (wIndex < words.length - 1) lineNode.appendChild(document.createTextNode(' '));
  });
}

export function SplitText({
  tag = 'p',
  text,
  className = '',
  delay = 50,
  duration = 1.25,
  ease = 'power3.out',
  splitType = 'chars',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'center',
  onLetterAnimationComplete,
}: SplitTextProps) {
  const containerRef = useRef<HTMLElement | null>(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    node.innerHTML = '';
    node.style.textAlign = textAlign;

    const lineSegments = splitType === 'lines' ? text.split('\n') : text.split('\n');

    lineSegments.forEach((lineText, lineIndex) => {
      const lineNode = document.createElement('span');
      lineNode.style.display = 'block';
      lineNode.style.overflow = 'hidden';

      if (splitType === 'lines') {
        lineNode.appendChild(makeTokenSpan(lineText));
      } else {
        appendByMode(lineNode, lineText, splitType);
      }

      node.appendChild(lineNode);
      if (lineIndex < lineSegments.length - 1) node.appendChild(document.createTextNode(''));
    });

    const targets = Array.from(node.querySelectorAll<HTMLElement>('[data-split-item="true"]'));
    if (!targets.length) return;

    if (hasAnimatedRef.current) {
      gsap.set(targets, to);
      return;
    }

    gsap.set(targets, from);

    const animate = () => {
      if (hasAnimatedRef.current) return;
      hasAnimatedRef.current = true;

      gsap.to(targets, {
        ...to,
        duration,
        ease,
        stagger: delay / 1000,
        onComplete: onLetterAnimationComplete,
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            animate();
            observer.disconnect();
            break;
          }
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [
    text,
    delay,
    duration,
    ease,
    splitType,
    threshold,
    rootMargin,
    textAlign,
    from,
    to,
    onLetterAnimationComplete,
  ]);

  const Tag = tag;
  return <Tag ref={containerRef} className={className} aria-label={text} />;
}
