import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CountUp from '@/components/CountUp';
import { RegresadosWord } from './RegresadosWord';

gsap.registerPlugin(ScrollTrigger);

export function Section11() {
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
          x: -50,
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
    });

    return () => ctx.revert();
  }, []);

  const formatToMillions = (v: number) => {
    const compact = (v / 100).toFixed(2).replace(/\.00$/, '').replace(/(\.\d)0$/, '$1');
    return `+${compact}M`;
  };

  return (
    <div ref={sectionRef} data-os-read-marker className="os-surface border-x-4 border-b-4 border-black">
      <div className="flex flex-col justify-between gap-6 border-b-4 border-black p-6 sm:flex-row sm:items-start sm:gap-8 sm:p-10 lg:p-14">
        <div className="max-w-3xl">
          <p className="os-section-title mb-2 text-[0.65rem] text-[var(--os-orange)] sm:text-xs">
            MEMORIA + OFICIO
          </p>
          <h2
            ref={titleRef}
            className="font-black uppercase leading-[1.05] tracking-tight text-2xl sm:text-4xl lg:text-5xl xl:text-6xl"
          >
            LO DISEÑAMOS
            <br />
            DE MEMORIA.
            <br />
            COMO UNA PELÍCULA.
          </h2>
        </div>
        <div ref={numberRef} className="os-brutal-num self-end sm:self-start">
          11
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12">
        <aside className="flex flex-col justify-between border-b-4 border-black p-6 sm:p-8 lg:col-span-4 lg:border-b-0 lg:border-r-4 lg:p-10">
          <div>
            <p className="font-black uppercase tracking-widest text-[var(--os-navy)] text-xs opacity-80">
              Desde 1990
            </p>
            <CountUp
              from={0}
              to={100}
              duration={1.9}
              className="mt-4 block font-black tabular-nums text-4xl leading-none sm:text-5xl"
              formatter={formatToMillions}
            />
            <p className="mt-1 text-xs font-bold uppercase tracking-wider text-black/60">
              viajes de egresados coordinados
            </p>
          </div>
          <p className="mt-10 max-w-[14rem] text-sm font-bold uppercase leading-snug tracking-wide text-black/70 lg:mt-0">
            Cada escena con su tiempo. Cada cierre con peso.
          </p>
        </aside>

        <div className="space-y-5 p-6 sm:p-8 lg:col-span-8 lg:space-y-6 lg:p-10 xl:p-12">
          <p
            ref={(el) => {
              textRefs.current[0] = el;
            }}
            className="font-black leading-snug sm:text-xl lg:text-2xl xl:text-3xl"
          >
            Lo hicimos mil veces.
            <br />
            Y ahora lo hacemos para vos, en versión premium.
          </p>

          <p
            ref={(el) => {
              textRefs.current[1] = el;
            }}
            className="text-base font-medium leading-relaxed sm:text-lg lg:max-w-2xl"
          >
            Haber organizado más de un millón de viajes de egresados desde 1990 nos da algo que no se
            improvisa: oficio.
          </p>

          <p
            ref={(el) => {
              textRefs.current[2] = el;
            }}
            className="text-base font-medium leading-relaxed sm:text-lg lg:max-w-2xl"
          >
            Conocemos la estética, la música, las escenas, los tiempos y el cierre.
          </p>

          <div className="grid gap-4 border-y-2 border-black py-6 sm:grid-cols-2 sm:gap-6">
            <p
              ref={(el) => {
                textRefs.current[3] = el;
              }}
              className="text-sm font-bold uppercase tracking-wide text-black/80 sm:text-base"
            >
              Entendemos que <RegresadosWord variant="split" /> no es un público.
            </p>
            <p
              ref={(el) => {
                textRefs.current[4] = el;
              }}
              className="border-l-4 border-[var(--os-cyan)] pl-4 font-black sm:text-lg lg:text-xl"
            >
              Es una identidad.
            </p>
          </div>

          <p
            ref={(el) => {
              textRefs.current[5] = el;
            }}
            className="font-black leading-[1.1] sm:text-2xl lg:text-3xl xl:text-4xl"
          >
            Y nuestra bandera es simple:
            <br />
            <span className="text-[var(--os-orange)]">Volvé a vos.</span>
          </p>
        </div>
      </div>
    </div>
  );
}
