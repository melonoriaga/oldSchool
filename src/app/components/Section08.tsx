import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { placeholderByIndex } from '@/data/placeholders';
import { OsFigure } from './OsFigure';

gsap.registerPlugin(ScrollTrigger);

export function Section08() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const numberRef = useRef(null);
  const textRefs = useRef<(HTMLParagraphElement | null)[]>([]);

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
          delay: 0.04,
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
          stagger: 0.05,
          ease: 'power3.out',
          delay: 0.08,
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      id="producto"
      data-os-read-marker
      className="os-surface relative overflow-hidden border-x-4 border-b-4 border-black"
    >
      <div className="os-section-glow-layer" aria-hidden>
        <div className="os-section-glow-blob os-section-glow-blob--orange-tr" />
        <div className="os-section-glow-blob os-section-glow-blob--cyan-bl" />
      </div>
      <div className="os-section-head-row relative z-[1]">
        <div className="max-w-3xl">
          <p className="os-section-kicker">IMPACTO + POSTVIAJE</p>
          <h2 ref={titleRef} className="os-section-h2">
            UN VIAJE QUE
            <br />
            NO TERMINA
          </h2>
        </div>
        <div ref={numberRef} className="os-brutal-num self-end sm:self-start">
          08
        </div>
      </div>

      <div className="relative z-[1] grid grid-cols-1 items-stretch lg:grid-cols-12">
        <div className="relative flex flex-col justify-center border-b-4 border-black p-6 sm:p-8 lg:col-span-7 lg:border-b-0 lg:border-r-4 lg:p-12 xl:p-14">
          <div className="os-asterisk-deco absolute right-6 top-6 text-5xl lg:right-8 lg:top-8 lg:text-7xl">
            *
          </div>
          <div className="max-w-3xl space-y-5 pr-8">
            <p ref={(el) => (textRefs.current[0] = el)} className="os-slice">
              Lo importante no es solo lo que vivís allá.
            </p>
            <p
              ref={(el) => (textRefs.current[1] = el)}
              className="os-pull border-l-4 border-[var(--os-orange)] pl-4 sm:pl-5"
            >
              Es lo que cambia cuando volvés.
            </p>
            <p ref={(el) => (textRefs.current[2] = el)} className="os-slice pt-2 text-black/88">
              Porque hay viajes que terminan al bajar del avión.
            </p>
            <p ref={(el) => (textRefs.current[3] = el)} className="os-slice text-black/88">
              Y otros que se quedan adentro.
            </p>
            <p
              ref={(el) => (textRefs.current[4] = el)}
              className="os-section-title border-l-4 border-black pl-4 pt-2 text-sm sm:text-base lg:text-lg"
            >
              Este es de los segundos.
            </p>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="os-band-cyan border-b-4 border-black p-6 sm:p-8 lg:p-10">
            <p className="os-section-title text-sm text-black sm:text-base">
              LA EXPERIENCIA SIGUE OPERANDO CUANDO VOLVÉS
            </p>
          </div>
          <div className="os-grid-cover-cell border-b-4 border-black lg:border-b-0">
            <OsFigure src={placeholderByIndex(6)} alt="" className="h-full !min-h-0 border-0" />
          </div>
        </div>
      </div>
    </div>
  );
}
