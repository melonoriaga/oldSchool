import { useEffect, useRef, useState } from 'react';
import { sectionNavLabel } from '../siteNav';
import { SectionEyebrow } from './SectionEyebrow';
import sec6img1d from '@/assets/imageBySections/Section06/OldSchool-IMG-Sec6-01-Desktop1.jpg';
import sec6img1m from '@/assets/imageBySections/Section06/OldSchool-IMG-Sec6-01-Mobile1.jpg';
import sec6img2d from '@/assets/imageBySections/Section06/OldSchool-IMG-Sec6-02-Desktop1.jpg';
import sec6img2m from '@/assets/imageBySections/Section06/OldSchool-IMG-Sec6-02-Mobile1.jpg';

export function Section05() {
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
      id="bariloche"
      data-os-read-marker
      className="os-surface border-x-4 border-b-4 border-black"
    >
      <div
        ref={headRef}
        className={`os-section-head-row os-section-head--navy os-oldschool-head ${runBrandSweep ? 'os-oldschool-head--run' : ''}`}
      >
        <div className="os-oldschool-brand-sweep" aria-hidden>
          <div className="os-oldschool-brand-icon">
            <span className="os-oldschool-brand-ring" />
            <span className="os-oldschool-brand-triangle os-oldschool-brand-triangle--cyan" />
            <span className="os-oldschool-brand-triangle os-oldschool-brand-triangle--orange" />
          </div>
        </div>

        <div className="relative z-[1] min-w-0 flex-1">
          <SectionEyebrow index={5} label={sectionNavLabel(5)} tone="light" />
          <h2 className="os-section-h2">
            BARILOCHE NO ES UN LUGAR.
            <br />
            ES UN SÍMBOLO.
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 items-stretch lg:grid-cols-3">
        <div className="os-grid-cover-cell border-b-2 border-black lg:border-b-0 lg:border-r-2">
          <picture>
            <source media="(min-width: 1024px)" srcSet={sec6img1d} />
            <img src={sec6img1m} alt="Lago Bariloche" className="os-grid-cover-img" />
          </picture>
        </div>

        <div className="relative flex flex-col justify-center space-y-5 border-b-2 border-black p-6 sm:p-8 lg:border-b-0 lg:border-r-2 lg:p-10 xl:p-12">
          <div className="os-asterisk-deco absolute right-6 top-6 text-5xl font-black lg:right-8 lg:top-8 lg:text-7xl">
            *
          </div>

          <p className="os-pull max-w-xl pr-10">
            Bariloche es el escenario.
            <br />
            Pero el verdadero regreso es a esa versión tuya que despertó ahí.
          </p>

          <p className="os-slice max-w-xl border-l-2 border-[var(--os-orange)] pl-4 text-black/88 sm:pl-5">
            No volvés al mapa.
            <br />
            Volvés a lo que te pasó ahí.
          </p>

          <p className="os-slice max-w-xl">
            Frío, montaña, lago.
            <br />
            Un símbolo compartido.
          </p>

          <p className="os-pull max-w-xl border-l-2 border-black pl-4 pt-1 text-base sm:text-lg lg:text-2xl sm:pl-5">
            Volver a Bariloche no es volver al lugar.
            <br />
            Es volver a lo que sentiste ahí.
          </p>
        </div>

        <div className="os-grid-cover-cell">
          <picture>
            <source media="(min-width: 1024px)" srcSet={sec6img2d} />
            <img src={sec6img2m} alt="Montaña nevada" className="os-grid-cover-img" />
          </picture>
        </div>
      </div>
    </div>
  );
}
