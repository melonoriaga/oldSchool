import { ArrowRight } from 'lucide-react';
import { useEffect, useRef, type ReactNode } from 'react';

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

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    // Reveal organic marks (scaleX) via IntersectionObserver — no GSAP ScrollTrigger.
    const marks = Array.from(root.querySelectorAll<HTMLElement>('[data-organic-mark]'));
    if (!marks.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add('os-organic-revealed');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    marks.forEach((el) => io.observe(el));
    return () => io.disconnect();
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
        <h2 className="max-w-4xl text-4xl font-black leading-tight lg:text-6xl xl:text-7xl">
          <span className="text-[var(--os-navy)]">SI</span> LLEGASTE
          <br />
          HASTA <span className="text-[var(--os-orange)]">ACÁ</span>,
          <br />
          NO ES <span className="text-[var(--os-cyan)]">CASUALIDAD</span>
        </h2>
        <div className="os-brutal-num mt-6 shrink-0 lg:mt-0">
          21
        </div>
      </div>

      <div className="relative z-[1] grid grid-cols-1 divide-y-4 divide-black border-b-4 border-black lg:grid-cols-2 lg:divide-x-4 lg:divide-y-4 xl:grid-cols-4">
        <div className="p-6 sm:p-8">
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

        <div className="p-6 sm:p-8">
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

        <div className="os-s21-col-navy-wash p-6 sm:p-8">
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

        <div className="p-6 sm:p-8">
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

      <div className="relative z-[1] border-b-4 border-black p-8 lg:p-20 xl:p-24">
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

      <div className="relative z-[1] p-6 sm:p-8 lg:p-12 xl:p-16">
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
