import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Section18() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const numberRef = useRef(null);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const asteriskRefs = useRef<(HTMLDivElement | null)[]>([]);

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
          x: -50,
          duration: 0.8,
          ease: 'power3.out',
          delay: 0.2
        });
      }

      textRefs.current.filter(Boolean).forEach((text, i) => {
        gsap.from(text, {
          scrollTrigger: {
            trigger: text,
            start: 'top 93%',
          },
          y: 30,
          duration: 0.7,
          ease: 'power3.out',
          delay: i * 0.08
        });
      });

      asteriskRefs.current.filter(Boolean).forEach((ast, i) => {
        gsap.from(ast, {
          scrollTrigger: {
            trigger: ast,
            start: 'top 93%',
          },
          rotation: -180,
          scale: 0,
          duration: 1.2,
          ease: 'back.out(2)',
          delay: i * 0.1
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} data-os-read-marker className="os-surface border-x-4 border-b-4 border-black">
      <div className="os-section-head-row">
        <div className="max-w-3xl">
          <p className="os-section-kicker">IMPACTO + MEMORIA</p>
          <h2 ref={titleRef} className="os-section-h2">
            RECUERDOS<br />DISEÑADOS PARA<br />QUEDARSE
          </h2>
        </div>
        <div ref={numberRef} className="os-brutal-num self-end sm:self-start">
          18
        </div>
      </div>

      <div className="border-b-4 border-black p-6 sm:p-8 lg:p-10 xl:p-12">
        <p className="os-pull max-w-4xl">
          Los Momentos WOW no son actividades sueltas.
        </p>
        <p className="os-slice mt-4 max-w-4xl border-l-4 border-[var(--os-orange)] pl-5 font-black text-black sm:pl-6 sm:text-lg lg:text-xl">
          Son escenas creadas para provocar impacto emocional, pertenencia y conexión real.
        </p>
      </div>

      {/* Lista de Momentos WOW */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Columna 1 */}
        <div className="space-y-8 border-b-4 border-black p-6 sm:p-8 lg:border-b-0 lg:border-r-4 lg:p-10 xl:p-12">
          <div ref={el => textRefs.current[0] = el} className="relative border-l-4 border-[var(--os-cyan)] pl-5 sm:pl-6">
            <div ref={el => asteriskRefs.current[0] = el} className="absolute -left-1 top-0 -translate-x-full pr-2 text-2xl font-black os-asterisk-deco sm:text-3xl lg:text-4xl">
              *
            </div>
            <h3 className="font-black uppercase tracking-tight text-[var(--os-navy)] text-lg sm:text-xl lg:text-2xl xl:text-3xl">
              EL PACTO
            </h3>
          </div>

          <div ref={el => textRefs.current[1] = el} className="relative border-l-4 border-[var(--os-cyan)] pl-5 sm:pl-6">
            <div ref={el => asteriskRefs.current[1] = el} className="absolute -left-1 top-0 -translate-x-full pr-2 text-2xl font-black os-asterisk-deco sm:text-3xl lg:text-4xl">
              *
            </div>
            <h3 className="font-black uppercase tracking-tight text-[var(--os-navy)] text-lg sm:text-xl lg:text-2xl xl:text-3xl">
              VHS PARTY
            </h3>
          </div>

          <div ref={el => textRefs.current[2] = el} className="relative border-l-4 border-[var(--os-cyan)] pl-5 sm:pl-6">
            <div ref={el => asteriskRefs.current[2] = el} className="absolute -left-1 top-0 -translate-x-full pr-2 text-2xl font-black os-asterisk-deco sm:text-3xl lg:text-4xl">
              *
            </div>
            <h3 className="font-black uppercase tracking-tight text-[var(--os-navy)] text-lg sm:text-xl lg:text-2xl xl:text-3xl">
              MTV UNPLUGGED
            </h3>
          </div>

          <div ref={el => textRefs.current[3] = el} className="relative border-l-4 border-[var(--os-cyan)] pl-5 sm:pl-6">
            <div ref={el => asteriskRefs.current[3] = el} className="absolute -left-1 top-0 -translate-x-full pr-2 text-2xl font-black os-asterisk-deco sm:text-3xl lg:text-4xl">
              *
            </div>
            <h3 className="font-black uppercase tracking-tight text-[var(--os-navy)] text-lg sm:text-xl lg:text-2xl xl:text-3xl">
              MSN EN LÍNEA
            </h3>
          </div>
        </div>

        <div className="space-y-8 p-6 sm:p-8 lg:p-10 xl:p-12">
          <div ref={el => textRefs.current[4] = el} className="relative border-l-4 border-[var(--os-orange)] pl-5 sm:pl-6">
            <div ref={el => asteriskRefs.current[4] = el} className="absolute -left-1 top-0 -translate-x-full pr-2 text-2xl font-black os-asterisk-deco sm:text-3xl lg:text-4xl">
              *
            </div>
            <h3 className="font-black uppercase tracking-tight text-[var(--os-navy)] text-lg sm:text-xl lg:text-2xl xl:text-3xl">
              LA TARDE DE LOS SÍ
            </h3>
          </div>

          <div ref={el => textRefs.current[5] = el} className="relative border-l-4 border-[var(--os-orange)] pl-5 sm:pl-6">
            <div ref={el => asteriskRefs.current[5] = el} className="absolute -left-1 top-0 -translate-x-full pr-2 text-2xl font-black os-asterisk-deco sm:text-3xl lg:text-4xl">
              *
            </div>
            <h3 className="font-black uppercase tracking-tight text-[var(--os-navy)] text-lg sm:text-xl lg:text-2xl xl:text-3xl">
              FOGÓN DEL SUR
            </h3>
          </div>

          <div ref={el => textRefs.current[6] = el} className="relative border-l-4 border-[var(--os-orange)] pl-5 sm:pl-6">
            <div ref={el => asteriskRefs.current[6] = el} className="absolute -left-1 top-0 -translate-x-full pr-2 text-2xl font-black os-asterisk-deco sm:text-3xl lg:text-4xl">
              *
            </div>
            <h3 className="font-black uppercase tracking-tight text-[var(--os-navy)] text-lg sm:text-xl lg:text-2xl xl:text-3xl">
              GRADUADOS
            </h3>
          </div>

          <div ref={el => textRefs.current[7] = el} className="relative border-l-4 border-[var(--os-orange)] pl-5 sm:pl-6">
            <div ref={el => asteriskRefs.current[7] = el} className="absolute -left-1 top-0 -translate-x-full pr-2 text-2xl font-black os-asterisk-deco sm:text-3xl lg:text-4xl">
              *
            </div>
            <h3 className="font-black uppercase tracking-tight text-[var(--os-navy)] text-lg sm:text-xl lg:text-2xl xl:text-3xl">
              CENA DE VELAS
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
