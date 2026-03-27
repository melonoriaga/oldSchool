import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const bullets = [
  { refIndex: 2, text: 'Cupos reducidos' },
  { refIndex: 3, text: 'Producción premium' },
  { refIndex: 4, text: 'Universo musical y estética con identidad propia' },
  { refIndex: 5, text: 'Momentos diseñados escena por escena' },
] as const;

export function Section10() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const numberRef = useRef(null);
  const textRefs = useRef<(HTMLParagraphElement | null)[]>([]);
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
          ease: 'back.out(1.7)',
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
          delay: 0.2,
        });
      }

      const validTextRefs = textRefs.current.filter(Boolean);
      if (validTextRefs.length > 0) {
        gsap.from(validTextRefs, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 88%',
          },
          y: 30,
          duration: 0.7,
          stagger: 0.04,
          ease: 'power3.out',
          delay: 0.4,
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
          ease: 'back.out(2)',
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} id="formato" data-os-read-marker className="os-surface border-x-4 border-b-4 border-black">
      <div className="flex flex-col justify-between gap-6 border-b-4 border-black p-6 sm:flex-row sm:items-start sm:gap-8 sm:p-10 lg:p-14">
        <div className="max-w-3xl">
          <p className="os-section-title mb-2 text-[0.65rem] text-[var(--os-orange)] sm:text-xs">FORMATO</p>
          <h2 ref={titleRef} className="font-black uppercase leading-[1.05] tracking-tight text-3xl sm:text-5xl lg:text-6xl xl:text-7xl">
            FORMATO
            <br />
            EXCLUSIVO
          </h2>
        </div>
        <div ref={numberRef} className="os-brutal-num self-end sm:self-start">
          10
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="border-b-4 border-black p-6 sm:p-8 lg:col-span-5 lg:border-b-0 lg:border-r-4 lg:p-10 xl:p-12">
          <p
            ref={(el) => {
              textRefs.current[0] = el;
            }}
            className="font-black leading-snug sm:text-xl lg:text-2xl"
          >
            Old School® no es un viaje abierto.
          </p>
          <p
            ref={(el) => {
              textRefs.current[1] = el;
            }}
            className="mt-4 text-base font-medium leading-relaxed sm:text-lg lg:max-w-md"
          >
            Cada edición se organiza para grupos limitados de regresados.
          </p>

          <div className="mt-8 border-2 border-black">
            {bullets.map(({ refIndex, text }) => (
              <p
                key={refIndex}
                ref={(el) => {
                  textRefs.current[refIndex] = el;
                }}
                className="border-b-2 border-black px-4 py-3 text-[0.7rem] leading-tight font-black uppercase tracking-[0.04em] last:border-b-0 sm:px-5 sm:py-4 sm:text-base sm:tracking-wide"
              >
                {text}
              </p>
            ))}
          </div>
        </div>

        <div className="relative p-6 sm:p-8 lg:col-span-7 lg:p-10 xl:p-14">
          <div
            ref={asteriskRef}
            className="os-asterisk-deco pointer-events-none absolute right-4 top-4 text-5xl font-black sm:right-8 sm:top-8 sm:text-7xl lg:text-8xl"
          >
            *
          </div>

          <div className="max-w-2xl space-y-5 text-base font-medium leading-relaxed sm:text-lg lg:space-y-6 lg:text-xl lg:leading-relaxed">
            <p
              ref={(el) => {
                textRefs.current[6] = el;
              }}
              className="font-black sm:text-xl lg:text-2xl"
            >
              No todos los viajes merecen volver a vivirse.
              <br />
              Este sí.
            </p>

            <p
              ref={(el) => {
                textRefs.current[7] = el;
              }}
            >
              Esto no es un paquete.
            </p>
            <p
              ref={(el) => {
                textRefs.current[8] = el;
              }}
              className="border-l-4 border-[var(--os-orange)] pl-4 font-black leading-snug sm:text-lg lg:text-2xl"
            >
              Es un formato experiencial, diseñado y cuidado para que cada momento tenga sentido.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
