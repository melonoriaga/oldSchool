import { ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { sectionNavLabel } from '../siteNav';
import { SectionEyebrow } from './SectionEyebrow';
import { DotGrid } from './ui/DotGrid';
import { TextType } from './ui/TextType';

interface Section17Props {
  onPostular: () => void;
}

export function Section17({ onPostular }: Section17Props) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLDivElement | null>(null);
  const [runBrandSweep, setRunBrandSweep] = useState(false);

  useEffect(() => {
    const node = headRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setRunBrandSweep(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25, rootMargin: '-30px' },
    );

    observer.observe(node);
    return () => observer.disconnect();
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
      <div
        ref={headRef}
        className={`relative z-[1] os-section-head-row os-section-head--navy os-oldschool-head ${runBrandSweep ? 'os-oldschool-head--run' : ''}`}
      >
        <div className="os-oldschool-brand-sweep" aria-hidden>
          <div className="os-oldschool-brand-icon">
            <span className="os-oldschool-brand-ring" />
            <span className="os-oldschool-brand-triangle os-oldschool-brand-triangle--cyan" />
            <span className="os-oldschool-brand-triangle os-oldschool-brand-triangle--orange" />
          </div>
        </div>

        <div className="relative z-[1] max-w-4xl min-w-0 flex-1">
          <SectionEyebrow index={17} label={sectionNavLabel(17)} tone="light" />
          <h2 className="text-4xl font-black leading-[1.05] tracking-tight lg:text-6xl xl:text-7xl">
            SI LLEGASTE HASTA ACÁ,
            <br />
            NO ES CASUALIDAD.
          </h2>
        </div>
      </div>

      <div className="relative z-[1] grid grid-cols-1 divide-y-2 divide-black border-b-2 border-black lg:grid-cols-2 lg:divide-x-2 lg:divide-y-0">
        <div className="p-6 sm:p-8 lg:p-10 xl:p-12">
          <div className="os-editorial-col-body max-w-xl space-y-4 text-black lg:space-y-5">
            <p className="os-reveal">Vos no estabas buscando un viaje.</p>
            <p className="os-reveal font-black text-base leading-snug sm:text-lg lg:text-xl">
              Estabas buscando una prueba de que todavía estás ahí.
            </p>
            <p className="os-reveal">Old School® no te promete nostalgia.</p>
            <p className="os-reveal font-black leading-snug sm:text-lg lg:text-xl">
              Te promete algo más incómodo y más verdadero:
            </p>
            <p className="os-reveal font-medium leading-relaxed sm:text-lg">
              Volver a sentir, reírte con el cuerpo, cantar sin vergüenza.
            </p>
            <p className="os-reveal">Mirar a tus amigos y reconocer esa chispa que es tuya.</p>
          </div>
        </div>

        <div className="relative p-6 sm:p-8 lg:p-10 xl:p-12">
          <p className="os-asterisk-deco pointer-events-none absolute right-6 top-6 hidden text-4xl leading-none sm:block lg:right-8 lg:top-8 lg:text-5xl">
            *
          </p>
          <div className="os-editorial-col-body max-w-xl space-y-4 text-black lg:space-y-5">
            <p className="os-reveal font-black leading-snug sm:text-lg lg:text-xl">
              Ahora, la parte incómoda: nadie te va a venir a buscar.
            </p>
            <p className="os-reveal leading-relaxed sm:text-lg">
              La vida no frena. Los años no esperan.{' '}
              <span className="font-black">Y esa versión tuya no vuelve sola.</span>
            </p>
            <p className="os-reveal pt-1">
              Por eso este cierre no es un &quot;gracias por leer&quot;.
            </p>
            <p className="os-reveal font-black text-lg leading-snug sm:text-xl lg:text-2xl">
              Es una invitación a decidir.
            </p>
            <ul className="os-reveal mt-2 list-none space-y-2 border-l-2 border-[var(--os-orange)] pl-4 font-black text-base sm:text-lg lg:text-xl">
              <li>Reservá tu fecha.</li>
              <li>Reservá tu lugar.</li>
              <li>Sumá a tu gente.</li>
              <li>Hacé que suceda.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="relative z-[1] border-t-2 border-black bg-[color-mix(in_srgb,var(--os-paper)_92%,var(--os-cyan)_8%)] p-6 sm:p-8 lg:p-12 xl:p-16">
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
          <DotGrid
            className="z-0"
            dotSize={3}
            gap={10}
            baseColor="#7cdff3"
            activeColor="#22b8df"
            proximity={130}
            speedTrigger={70}
            shockRadius={180}
            shockStrength={3.2}
            resistance={820}
            returnDuration={1.3}
          />
        </div>
        <div className="relative z-[1] flex flex-col gap-6 sm:gap-8">
          <div className="min-w-0 text-black">
            <p className="text-base font-black leading-snug sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl xl:whitespace-nowrap xl:overflow-x-auto xl:pb-1 xl:[-webkit-overflow-scrolling:touch] xl:[scrollbar-width:thin]">
              <TextType
                text="El viaje de egresados se hace una sola vez en la vida."
                typingSpeed={38}
                initialDelay={400}
                startOnVisible
              />
            </p>
            <p className="mt-4 text-2xl font-black leading-none sm:text-3xl lg:text-4xl xl:text-5xl">
              Hasta ahora.
            </p>
          </div>
          <button
            type="button"
            onClick={onPostular}
            className="os-btn-primary os-btn-lg inline-flex w-auto shrink-0 justify-center"
          >
            POSTULARME AHORA <ArrowRight className="h-5 w-5 shrink-0" strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </div>
  );
}
