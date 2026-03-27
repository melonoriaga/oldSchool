import { ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Section25Props {
  onPostular: () => void;
}

export function Section25({ onPostular }: Section25Props) {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const numberRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const asteriskRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (numberRef.current) {
        gsap.from(numberRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 92%',
          },
          scale: 0.3,
          duration: 1.2,
          ease: 'back.out(1.7)'
        });
      }

      if (titleRef.current) {
        gsap.from(titleRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 90%',
          },
          y: 50,
          duration: 0.8,
          ease: 'power3.out',
          delay: 0.2
        });
      }

      if (textRef.current) {
        gsap.from(textRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 88%',
          },
          y: 30,
          duration: 0.7,
          ease: 'power3.out',
          delay: 0.4
        });
      }

      if (buttonRef.current) {
        gsap.from(buttonRef.current, {
          scrollTrigger: {
            trigger: buttonRef.current,
            start: 'top 90%',
          },
          y: 30,
          duration: 0.8,
          ease: 'power3.out'
        });
      }

      if (asteriskRef.current) {
        gsap.from(asteriskRef.current, {
          scrollTrigger: {
            trigger: asteriskRef.current,
            start: 'top 93%',
          },
          rotation: -180,
          scale: 0,
          duration: 1.3,
          ease: 'back.out(2)'
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} data-os-read-marker className="border-x-4 border-b-4 border-black bg-[var(--os-navy)] text-white">
      {/* Header */}
      <div className="relative flex items-center justify-between border-b-4 border-white p-4 sm:p-8 lg:p-16">
        <div
          ref={asteriskRef}
          className="os-asterisk-deco pointer-events-none absolute right-3 top-3 text-4xl font-black text-white/30 sm:right-8 sm:top-8 sm:text-6xl lg:text-8xl"
        >
          *
        </div>
        <h2 ref={titleRef} className="max-w-[85%] text-3xl font-black leading-[1.05] sm:text-5xl sm:max-w-none lg:text-7xl xl:text-8xl">
          PRIMERA<br />EDICIÓN
        </h2>
        <div ref={numberRef} className="os-brutal-num os-brutal-num--on-dark">
          25
        </div>
      </div>

      {/* Content */}
      <div className="p-6 text-center sm:p-8 lg:p-20 xl:p-24">
        <p
          ref={textRef}
          className="mb-10 font-black leading-tight sm:mb-12 lg:mb-16 text-2xl sm:text-3xl lg:text-5xl xl:text-6xl"
        >
          CUPOS LIMITADOS
        </p>

        <div ref={buttonRef}>
          <button
            type="button"
            onClick={onPostular}
            className="os-btn-primary os-btn-lg os-btn-on-dark inline-flex w-full max-w-md justify-center px-8 sm:w-auto"
          >
            ASEGURAR MI LUGAR <ArrowRight className="h-5 w-5 shrink-0" strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </div>
  );
}
