import { ArrowRight } from 'lucide-react';
import { useEffect, useRef, type ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Section21Props {
  onPostular: () => void;
}

function OrganicMark({
  children,
  tone,
  radius,
}: {
  children: ReactNode;
  tone: 'orange' | 'cyan' | 'navy';
  radius: string;
}) {
  return (
    <span className={`os-organic-mark os-organic-mark--${tone}`} data-organic-mark>
      <span
        className="os-organic-mark__bg"
        data-organic-bg
        style={{ borderRadius: radius }}
        aria-hidden
      />
      <span className="relative font-black">{children}</span>
    </span>
  );
}

export function Section21({ onPostular }: Section21Props) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const numberRef = useRef<HTMLDivElement>(null);
  const colRefs = useRef<(HTMLDivElement | null)[]>([]);
  const finaleRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const setColRef = (i: number) => (el: HTMLDivElement | null) => {
    colRefs.current[i] = el;
  };

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      if (numberRef.current) {
        gsap.from(numberRef.current, {
          scrollTrigger: {
            trigger: root,
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
            trigger: root,
            start: 'top 90%',
          },
          y: 50,
          duration: 0.8,
          ease: 'power3.out',
          delay: 0.2,
        });
      }

      colRefs.current.forEach((col) => {
        if (!col) return;
        gsap.from(col.querySelectorAll(':scope > .os-reveal'), {
          scrollTrigger: {
            trigger: col,
            start: 'top 88%',
          },
          y: 22,
          duration: 0.55,
          stagger: 0.06,
          ease: 'power2.out',
        });
      });

      root.querySelectorAll('[data-organic-bg]').forEach((bg) => {
        const mark = (bg as HTMLElement).closest('[data-organic-mark]');
        gsap.fromTo(
          bg,
          { scaleX: 0, transformOrigin: 'left center' },
          {
            scaleX: 1,
            duration: 0.78,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: mark ?? bg,
              start: 'top 89%',
            },
          },
        );
      });

      if (finaleRef.current) {
        gsap.from(finaleRef.current.querySelectorAll('.os-reveal'), {
          scrollTrigger: {
            trigger: finaleRef.current,
            start: 'top 90%',
          },
          y: 20,
          duration: 0.6,
          stagger: 0.07,
          ease: 'power2.out',
        });
      }

      if (buttonRef.current) {
        gsap.from(buttonRef.current, {
          scrollTrigger: {
            trigger: buttonRef.current,
            start: 'top 92%',
          },
          y: 24,
          duration: 0.65,
          ease: 'power3.out',
        });
      }
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      id="comunidad"
      data-os-read-marker
      className="os-surface relative overflow-hidden border-x-4 border-b-4 border-black"
    >
      <div className="os-section-glow-layer" aria-hidden>
        <div className="os-section-glow-blob os-section-glow-blob--orange-tr" />
        <div className="os-section-glow-blob os-section-glow-blob--cyan-bl" />
      </div>
      <div className="relative z-[1] flex flex-col border-b-4 border-black p-8 lg:flex-row lg:items-center lg:justify-between lg:p-16">
        <h2
          ref={titleRef}
          className="max-w-4xl text-4xl font-black leading-tight lg:text-6xl xl:text-7xl"
        >
          <span className="text-[var(--os-navy)]">SI</span> LLEGASTE
          <br />
          HASTA <span className="text-[var(--os-orange)]">ACÁ</span>,
          <br />
          NO ES <span className="text-[var(--os-cyan)]">CASUALIDAD</span>
        </h2>
        <div ref={numberRef} className="os-brutal-num mt-6 shrink-0 lg:mt-0">
          21
        </div>
      </div>

      <div className="relative z-[1] grid grid-cols-1 divide-y-4 divide-black border-b-4 border-black lg:grid-cols-2 lg:divide-x-4 lg:divide-y-4 xl:grid-cols-4">
        <div ref={setColRef(0)} className="p-6 sm:p-8">
          <p className="os-editorial-col-head os-reveal">Apertura</p>
          <div className="os-editorial-col-body">
            <p className="os-reveal">Vos no estabas buscando un viaje.</p>
            <p className="os-reveal font-black text-base sm:text-lg lg:text-xl">
              Estabas buscando una{' '}
              <OrganicMark tone="orange" radius="48% 52% 55% 45% / 42% 58% 51% 49%">
                prueba
              </OrganicMark>{' '}
              de que todavía estás ahí.
            </p>
            <p className="os-reveal pt-2">Old School® no te promete nostalgia.</p>
            <p className="os-reveal font-black">
              Te promete algo más incómodo y más verdadero:{' '}
              <OrganicMark tone="cyan" radius="52% 48% 44% 56% / 55% 45% 48% 52%">
                volver a sentir
              </OrganicMark>
              .
            </p>
          </div>
        </div>

        <div ref={setColRef(1)} className="p-6 sm:p-8">
          <p className="os-editorial-col-head os-editorial-col-head--cyan os-reveal">Cuerpo</p>
          <div className="os-editorial-col-body">
            <p className="os-reveal">Reírte con el cuerpo.</p>
            <p className="os-reveal">Cantar sin vergüenza.</p>
            <p className="os-reveal">
              Mirar a tus amigos y reconocer{' '}
              <OrganicMark tone="navy" radius="45% 55% 52% 48% / 49% 51% 46% 54%">
                esa chispa
              </OrganicMark>{' '}
              que es tuya.
            </p>
          </div>
          <p className="os-asterisk-deco mt-8 hidden text-5xl leading-none xl:block">*</p>
        </div>

        <div ref={setColRef(2)} className="os-s21-col-navy-wash p-6 sm:p-8">
          <p className="os-editorial-col-head os-reveal">La parte incómoda</p>
          <div className="os-editorial-col-body">
            <p className="os-reveal font-black text-base sm:text-lg">Ahora, la parte incómoda:</p>
            <p className="os-reveal">nadie te va a venir a buscar.</p>
            <p className="os-reveal">La vida no frena.</p>
            <p className="os-reveal">Los años no esperan.</p>
            <p className="os-reveal font-black text-lg sm:text-xl lg:text-2xl">
              Y esa versión tuya{' '}
              <OrganicMark tone="orange" radius="55% 45% 48% 52% / 44% 56% 52% 48%">
                no vuelve sola
              </OrganicMark>
              .
            </p>
          </div>
        </div>

        <div ref={setColRef(3)} className="p-6 sm:p-8">
          <p className="os-editorial-col-head os-reveal">Invitación</p>
          <div className="os-editorial-col-body">
            <p className="os-reveal">
              Por eso este cierre no es un &quot;gracias por leer&quot;.
            </p>
            <p className="os-reveal font-black text-lg sm:text-xl lg:text-2xl">
              Es una{' '}
              <OrganicMark tone="cyan" radius="50% 50% 42% 58% / 53% 47% 51% 49%">
                invitación a decidir
              </OrganicMark>
              .
            </p>
            <ul className="os-reveal mt-4 list-none space-y-2 border-l-4 border-[var(--os-orange)] pl-4 font-black text-base sm:text-lg lg:text-xl">
              <li>Reservá tu fecha.</li>
              <li>Reservá tu lugar.</li>
              <li>Sumá a tu gente.</li>
              <li>
                <OrganicMark tone="orange" radius="46% 54% 51% 49% / 48% 52% 55% 45%">
                  Hacé que suceda.
                </OrganicMark>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div ref={finaleRef} className="relative z-[1] border-b-4 border-black p-8 lg:p-20 xl:p-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="os-reveal text-xl font-black sm:text-2xl lg:text-3xl xl:text-4xl">
            El viaje de egresados se hace una sola vez en la vida.
          </p>
          <p className="os-reveal mt-6 text-2xl font-black sm:text-3xl lg:text-4xl xl:text-5xl">
            <span className="text-[var(--os-navy)]">Hasta</span>{' '}
            <span className="text-[var(--os-orange)]">ahora</span>.
          </p>
        </div>
      </div>

      <div ref={buttonRef} className="relative z-[1] p-6 sm:p-8 lg:p-12 xl:p-16">
        <button
          type="button"
          onClick={onPostular}
          className="os-btn-primary os-btn-lg inline-flex w-full justify-center sm:w-auto"
        >
          POSTULARME AHORA <ArrowRight className="h-5 w-5 shrink-0" strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
}
