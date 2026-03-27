import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { placeholderByIndex } from '@/data/placeholders';
import { OsFigure } from './OsFigure';
import { RegresadosWord } from './RegresadosWord';

gsap.registerPlugin(ScrollTrigger);

export function Section07Generaciones() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const numberRef = useRef(null);
  const textRefs = useRef<(HTMLElement | null)[]>([]);
  const asteriskRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (numberRef.current) {
        gsap.from(numberRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 92%',
          },
          scale: 0.4,
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

      if (subtitleRef.current) {
        gsap.from(subtitleRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 90%',
          },
          y: 30,
          duration: 0.8,
          ease: 'power3.out',
          delay: 0.08,
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
          duration: 0.6,
          stagger: 0.04,
          ease: 'power3.out',
          delay: 0.12,
        });
      }

      asteriskRefs.current.filter(Boolean).forEach((ref) => {
        if (ref) {
          gsap.from(ref, {
            scrollTrigger: {
              trigger: ref,
              start: 'top 93%',
            },
            rotation: 180,
            scale: 0,
            duration: 1,
            ease: 'back.out(2)',
          });
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} id="generaciones" data-os-read-marker className="os-surface border-x-4 border-b-4 border-black">
      <div className="relative flex flex-col items-start justify-between gap-5 border-b-4 border-black p-5 sm:gap-6 sm:p-8 lg:flex-row lg:items-start lg:p-16">
        <div className="max-w-3xl space-y-4">
          <h2 ref={titleRef} className="os-section-h2">
            <RegresadosWord className="h-[0.8em] align-[-0.04em]" />
          </h2>
          <p
            ref={subtitleRef}
            className="font-black text-lg leading-tight sm:text-xl lg:text-3xl xl:text-4xl"
          >
            CADA GENERACIÓN LO VIVIÓ DISTINTO,
            <br />
            PERO TODAS SINTIERON LO MISMO.
          </p>
        </div>
        <div ref={numberRef} className="os-brutal-num self-end lg:self-start">
          07
        </div>
      </div>

      <div className="border-b-4 border-black">
        <div className="mx-auto grid w-full max-w-[72rem] grid-cols-1 items-stretch lg:grid-cols-[minmax(0,36rem)_minmax(240px,280px)]">
          <div className="space-y-5 border-b-4 border-black p-6 sm:p-8 lg:border-b-0 lg:border-r-4 lg:p-12 xl:p-14">
            <div className="max-w-prose space-y-4 text-base font-medium leading-relaxed text-black sm:text-lg lg:text-xl lg:leading-relaxed">
              <p ref={(el) => (textRefs.current[0] = el)} className="font-black leading-snug sm:text-xl lg:text-2xl">
                No hacemos un viaje estándar.
              </p>
              <p ref={(el) => (textRefs.current[1] = el)} className="font-black leading-snug sm:text-lg lg:text-xl">
                Diseñamos la experiencia según tu generación.
              </p>
              <p ref={(el) => (textRefs.current[2] = el)}>
                Porque no es lo mismo haber egresado en los 80 que en los 2000.
              </p>
              <p ref={(el) => (textRefs.current[3] = el)}>
                Cambió la música, cambió la forma de vincularse, cambió el código.
              </p>
              <p
                ref={(el) => (textRefs.current[4] = el)}
            className="os-section-title border-l-4 border-[var(--os-orange)] pl-4 pt-2 text-xs sm:text-base lg:text-lg"
              >
                Pero hay algo que no cambió: lo que Bariloche dejó adentro.
              </p>
            </div>
          </div>
          <div className="grid min-h-[20rem] grid-rows-2 lg:h-full lg:min-h-0">
            <div className="relative min-h-[10rem] overflow-hidden border-b-4 border-black lg:min-h-0">
              <OsFigure
                src={placeholderByIndex(7)}
                alt=""
                className="absolute inset-0 h-full !min-h-0 border-0"
              />
            </div>
            <div className="relative min-h-[10rem] overflow-hidden lg:min-h-0">
              <OsFigure
                src={placeholderByIndex(8)}
                alt=""
                className="absolute inset-0 h-full !min-h-0 border-0"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="os-band-orange relative border-b-4 border-black p-8 lg:border-r-4 lg:p-12 xl:p-16">
          <div
            ref={(el) => (asteriskRefs.current[0] = el)}
            className="os-asterisk-deco absolute right-8 top-8 text-4xl"
          >
            *
          </div>
          <div className="os-brutal-num-sub mb-4">80</div>
          <h3 ref={(el) => (textRefs.current[5] = el)} className="os-section-title mb-3 text-sm lg:text-base">
            La que vivió sin filtro.
          </h3>
          <p ref={(el) => (textRefs.current[6] = el)} className="os-body leading-relaxed text-[0.8rem] sm:text-[0.86rem]">
            Casseteras, Walkman, cartas, lentos y promesas.
            <br />
            Una generación con mística, códigos y amistades que todavía laten.
            <br />
            Para ellos diseñamos experiencias con espíritu auténtico, emoción real y memoria viva.
          </p>
        </div>

        <div className="os-band-cyan relative border-b-4 border-black p-8 lg:p-12 xl:p-16">
          <div
            ref={(el) => (asteriskRefs.current[1] = el)}
            className="os-asterisk-deco absolute right-8 top-8 text-4xl"
          >
            *
          </div>
          <div className="os-brutal-num-sub mb-4">90</div>
          <h3 ref={(el) => (textRefs.current[7] = el)} className="os-section-title mb-3 text-sm lg:text-base">
            La que mezcló inocencia con revolución.
          </h3>
          <p ref={(el) => (textRefs.current[8] = el)} className="os-body leading-relaxed text-[0.8rem] sm:text-[0.86rem]">
            CD, MSN, primeras cámaras digitales, coreografías, noches eternas y amistad intensa.
            <br />
            Una generación que empezó a mostrarse al mundo, pero todavía sabía mirar a los ojos.
            <br />
            Para ellos creamos viajes con fiestas icónicas y reencuentros potentes.
          </p>
        </div>

        <div className="os-band-navy relative border-b-4 border-black p-8 lg:border-r-4 lg:border-b-0 lg:p-12 xl:p-16">
          <div
            ref={(el) => (asteriskRefs.current[2] = el)}
            className="os-asterisk-deco absolute right-8 top-8 text-4xl"
          >
            *
          </div>
          <div className="os-brutal-num-sub mb-4 text-white">00</div>
          <h3 ref={(el) => (textRefs.current[9] = el)} className="os-section-title mb-3 text-sm lg:text-base">
            La que creció conectada.
          </h3>
          <p ref={(el) => (textRefs.current[10] = el)} className="os-body leading-relaxed text-[0.8rem] sm:text-[0.86rem]">
            Fotolog, Messenger, redes, primeras selfies.
            <br />
            Una generación expresiva, intensa y protagonista.
            <br />
            Para ellos armamos viajes visuales, vibrantes y con energía de estreno.
          </p>
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col justify-center border-b-4 border-black p-8 lg:border-b-0 lg:border-r-4 lg:p-12 xl:p-16">
            <div
              ref={(el) => (asteriskRefs.current[3] = el)}
              className="os-asterisk-deco absolute right-8 top-8 text-4xl lg:right-auto lg:left-8"
            >
              *
            </div>
            <div className="os-brutal-num-sub mb-4">10</div>
            <h3 ref={(el) => (textRefs.current[11] = el)} className="os-section-title mb-3 text-sm lg:text-base">
              La que empezó a vivir… y a mostrarse.
            </h3>
          <p ref={(el) => (textRefs.current[12] = el)} className="os-body leading-relaxed text-[0.8rem] sm:text-[0.86rem]">
              Instagram, WhatsApp, Snapchat.
              <br />
            Viajes en tiempo real, entre lo digital y lo real.
              <br />
              Para ellos diseñamos experiencias que vuelven a activar esa intensidad.
            </p>
          </div>
          <OsFigure src={placeholderByIndex(9)} alt="" className="min-h-[200px] lg:min-h-full" />
        </div>
      </div>
    </div>
  );
}
