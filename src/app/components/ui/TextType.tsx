import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { gsap } from 'gsap';

export type TextTypeProps = {
  text: string | string[];
  className?: string;
  showCursor?: boolean;
  hideCursorWhileTyping?: boolean;
  cursorCharacter?: string;
  cursorBlinkDuration?: number;
  cursorClassName?: string;
  typingSpeed?: number;
  initialDelay?: number;
  pauseDuration?: number;
  deletingSpeed?: number;
  /** En React Bits el default es true; para titulares de una sola pasada conviene false. */
  loop?: boolean;
  variableSpeed?: { min: number; max: number };
  startOnVisible?: boolean;
  /** Oculta el cursor al terminar de escribir (comportamiento habitual en headings). */
  hideCursorWhenComplete?: boolean;
};

/**
 * Máquina de escribir alineada a React Bits Text Type.
 * @see https://reactbits.dev/text-animations/text-type
 */
export function TextType({
  text,
  className = '',
  showCursor = true,
  hideCursorWhileTyping = false,
  cursorCharacter = '|',
  cursorClassName = '',
  cursorBlinkDuration = 0.5,
  typingSpeed = 50,
  initialDelay = 0,
  pauseDuration = 2000,
  deletingSpeed = 30,
  loop = false,
  variableSpeed,
  startOnVisible = false,
  hideCursorWhenComplete = true,
}: TextTypeProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(!startOnVisible);
  const [reducedMotion, setReducedMotion] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );

  const cursorRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLSpanElement>(null);

  const textArray = useMemo(() => (Array.isArray(text) ? text : [text]), [text]);

  const getRandomSpeed = useCallback(() => {
    if (!variableSpeed) return typingSpeed;
    const { min, max } = variableSpeed;
    return Math.random() * (max - min) + min;
  }, [variableSpeed, typingSpeed]);

  const currentFullText = textArray[currentTextIndex] ?? '';
  const processedLength = currentFullText.length;

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    if (!startOnVisible || !containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -8% 0px' },
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [startOnVisible]);

  useEffect(() => {
    if (reducedMotion) {
      setDisplayedText(textArray.join(' '));
      setCurrentCharIndex(processedLength);
      setIsDeleting(false);
    }
  }, [reducedMotion, textArray, processedLength]);

  const typingComplete =
    !isDeleting &&
    !loop &&
    currentTextIndex === textArray.length - 1 &&
    currentCharIndex >= processedLength;

  const shouldHideCursor =
    hideCursorWhileTyping && (currentCharIndex < processedLength || isDeleting);

  const mountCursor = showCursor && !(hideCursorWhenComplete && typingComplete);

  useEffect(() => {
    if (!mountCursor || !cursorRef.current || reducedMotion || shouldHideCursor) return;

    const el = cursorRef.current;
    gsap.set(el, { opacity: 1 });
    const tween = gsap.to(el, {
      opacity: 0,
      duration: cursorBlinkDuration,
      repeat: -1,
      yoyo: true,
      ease: 'power2.inOut',
    });
    return () => {
      tween.kill();
      gsap.set(el, { clearProps: 'opacity' });
    };
  }, [mountCursor, shouldHideCursor, cursorBlinkDuration, reducedMotion]);

  useEffect(() => {
    if (!isVisible || reducedMotion) return;

    let timeout: ReturnType<typeof setTimeout>;

    const currentText = textArray[currentTextIndex];
    const processedText = currentText;

    const executeTypingAnimation = () => {
      if (isDeleting) {
        if (displayedText === '') {
          setIsDeleting(false);

          if (currentTextIndex === textArray.length - 1 && !loop) {
            return;
          }

          setCurrentTextIndex((prev) => (prev + 1) % textArray.length);
          setCurrentCharIndex(0);
          timeout = setTimeout(() => {}, pauseDuration);
        } else {
          timeout = setTimeout(() => {
            setDisplayedText((prev) => prev.slice(0, -1));
          }, deletingSpeed);
        }
      } else if (currentCharIndex < processedText.length) {
        timeout = setTimeout(
          () => {
            setDisplayedText((prev) => prev + processedText[currentCharIndex]!);
            setCurrentCharIndex((prev) => prev + 1);
          },
          variableSpeed ? getRandomSpeed() : typingSpeed,
        );
      } else if (textArray.length >= 1) {
        if (!loop && currentTextIndex === textArray.length - 1) {
          return;
        }
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    };

    if (currentCharIndex === 0 && !isDeleting && displayedText === '') {
      timeout = setTimeout(executeTypingAnimation, initialDelay);
    } else {
      executeTypingAnimation();
    }

    return () => clearTimeout(timeout);
  }, [
    currentCharIndex,
    displayedText,
    isDeleting,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    textArray,
    currentTextIndex,
    loop,
    initialDelay,
    isVisible,
    variableSpeed,
    getRandomSpeed,
    reducedMotion,
  ]);

  if (reducedMotion) {
    return (
      <span ref={containerRef} className={`inline-block whitespace-pre-wrap tracking-tight ${className}`}>
        {textArray.join(' ')}
      </span>
    );
  }

  return (
    <span ref={containerRef} className={`inline-block whitespace-pre-wrap tracking-tight ${className}`}>
      <span className="inline text-current">{displayedText}</span>
      {mountCursor ? (
        <span
          ref={cursorRef}
          className={`ml-px inline-block w-[0.3ch] translate-y-px font-light text-current ${shouldHideCursor ? 'invisible' : ''} ${cursorClassName}`.trim()}
          aria-hidden
        >
          {cursorCharacter}
        </span>
      ) : null}
    </span>
  );
}
