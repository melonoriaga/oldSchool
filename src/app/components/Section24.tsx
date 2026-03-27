import { ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { RegresadosWord } from './RegresadosWord';

gsap.registerPlugin(ScrollTrigger);

interface Section24Props {
  onPostular: () => void;
}

export function Section24({ onPostular }: Section24Props) {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const numberRef = useRef(null);
  const textRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const buttonRef = useRef(null);

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
          stagger: 0.05,
          ease: 'power3.out',
          delay: 0.4,
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
          ease: 'power3.out',
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      id="precio"
      data-os-read-marker
      className="os-surface border-x-4 border-b-4 border-black"
    >
      <div className="os-section-head-row">
        <div className="max-w-3xl">
          <p className="os-section-kicker">PRECIO + SENTIDO</p>
          <h2 ref={titleRef} className="os-section-h2">
            NO TIENE PRECIO,
            <br />
            TIENE VALOR
          </h2>
        </div>
        <div ref={numberRef} className="os-brutal-num self-end sm:self-start">
          23
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="os-band-cyan border-b-4 border-black p-6 sm:p-8 lg:col-span-5 lg:border-b-0 lg:border-r-4 lg:p-12">
          <p
            ref={(el) => (textRefs.current[0] = el)}
            className="os-section-title text-lg sm:text-xl lg:text-2xl"
          >
            ESTO NO ES BARATO.
          </p>
          <p
            ref={(el) => (textRefs.current[1] = el)}
            className="os-pull mt-4 border-l-4 border-black pl-4 text-black sm:pl-5"
          >
            Porque no es lo mismo.
          </p>
        </div>

        <div className="space-y-5 p-6 sm:p-8 lg:col-span-7 lg:p-12">
          <p ref={(el) => (textRefs.current[2] = el)} className="os-slice">
            No es un paquete.
          </p>
          <p
            ref={(el) => (textRefs.current[3] = el)}
            className="os-slice border-l-4 border-[var(--os-orange)] pl-4 sm:pl-5"
          >
            No es una promoción.
          </p>
          <p
            ref={(el) => (textRefs.current[4] = el)}
            className="os-pull pt-2 text-base sm:text-lg lg:text-2xl"
          >
            Es una experiencia diseñada a medida de un concepto:
          </p>
          <p
            ref={(el) => (textRefs.current[5] = el)}
            className="os-section-title border-l-4 border-black pl-4 text-2xl sm:pl-5 sm:text-3xl lg:text-4xl"
          >
            <RegresadosWord variant="split" />.
          </p>
        </div>

        <div
          ref={buttonRef}
          className="border-t-4 border-black bg-black/[0.03] p-6 sm:p-8 lg:col-span-12 lg:p-10"
        >
          <button
            type="button"
            onClick={onPostular}
            className="os-btn-primary os-btn-lg inline-flex w-full justify-center sm:w-auto"
          >
            CONSULTAR PRECIO <ArrowRight className="h-5 w-5 shrink-0" strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </div>
  );
}
