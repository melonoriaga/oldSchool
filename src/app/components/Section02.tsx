import { useEffect, useRef, useState } from 'react';
import { sectionNavLabel } from '../siteNav';
import { SectionEyebrow } from './SectionEyebrow';
import sec2img1d from '@/assets/imageBySections/Section02/OldSchool-IMG-Sec2-01-Desktop.jpg';
import sec2img1m from '@/assets/imageBySections/Section02/OldSchool-IMG-Sec2-01-Mobile.jpg';
import sec2img2d from '@/assets/imageBySections/Section02/OldSchool-IMG--Sec2-02-Desktop2.jpg';
import sec2img2m from '@/assets/imageBySections/Section02/OldSchool-IMG-Sec2-02-Mobile2.jpg';

export function Section02() {
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
      id="concepto"
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

        <div className="relative z-[1] max-w-3xl min-w-0 flex-1">
          <SectionEyebrow index={2} label={sectionNavLabel(2)} tone="light" />
          <h2 className="os-section-h2">OLD SCHOOL</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 items-stretch lg:grid-cols-[minmax(0,1fr)_minmax(300px,500px)]">
        <div
          className="relative border-b-2 border-black p-6 sm:p-8
        lg:border-b-0 lg:border-r-2 lg:p-10 xl:p-12"
        >
          <div className="max-w-prose space-y-5 pr-2 sm:pr-12 lg:max-w-2xl">
            <p className="os-slice">
              Old School® es una propuesta diseñada para grupos que quieren volver a compartir una
              experiencia distinta.
            </p>

            <p className="os-slice text-black/88">
              Creamos el regreso a Bariloche para adultos +30, con una estructura pensada para
              generar dinámica, conexión y momentos reales.
            </p>

            <p className="os-pull border-l-2 border-[var(--os-cyan)] pl-4 sm:pl-5">
              Cada instancia tiene intención. Nada es improvisado.
            </p>

            <p className="os-slice text-black/88">
              No se trata solo del destino. Se trata de lo que pasa cuando se forma un grupo que
              vuelve a estar junto.
            </p>

            <p className="os-pull pt-1 text-base sm:text-lg lg:text-xl">
              El viaje de egresados se hace una sola vez en la vida. Hasta ahora.
            </p>

            <p className="os-slice border-l-2 border-black pl-4 text-black/88 sm:pl-5">
              Old School® nace para recuperar las amistades que no se rompieron, pero se dejaron de
              habitar.
            </p>

            <p className="os-slice text-black/88">
              Los grupos que siguen existiendo, pero ya no se encuentran. Las historias que no
              terminaron, pero quedaron en pausa.
            </p>
            <p className="os-section-title border-l-2 border-black pl-4 pt-2 text-sm sm:text-base lg:text-lg">
              Old School® crea el regreso.
            </p>
          </div>
        </div>

        <div className="grid grid-rows-2">
          <div className="os-grid-cover-cell min-h-[20rem] border-b-2 border-black lg:min-h-[50%]">
            <picture>
              <source media="(min-width: 1024px)" srcSet={sec2img1d} />
              <img src={sec2img1m} alt="Old School Regresados" className="os-grid-cover-img" />
            </picture>
          </div>

          <div className="os-grid-cover-cell min-h-[20rem] lg:min-h-[50%]">
            <picture>
              <source media="(min-width: 1024px)" srcSet={sec2img2d} />
              <img src={sec2img2m} alt="Old School Regresados" className="os-grid-cover-img" />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
}
