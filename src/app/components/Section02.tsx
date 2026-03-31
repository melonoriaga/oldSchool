import { sectionNavLabel } from '../siteNav';
import { SectionEyebrow } from './SectionEyebrow';
import sec2img1d from '@/assets/imageBySections/Section02/OldSchool-IMG-Sec2-01-Desktop.jpg';
import sec2img1m from '@/assets/imageBySections/Section02/OldSchool-IMG-Sec2-01-Mobile.jpg';
import sec2img2d from '@/assets/imageBySections/Section02/OldSchool-IMG--Sec2-02-Desktop2.jpg';
import sec2img2m from '@/assets/imageBySections/Section02/OldSchool-IMG-Sec2-02-Mobile2.jpg';

export function Section02() {
  return (
    <div
      id="concepto"
      data-os-read-marker
      className="os-surface border-x-4 border-b-4 border-black"
    >
      <div className="os-section-head-row os-section-head--navy">
        <div className="max-w-3xl min-w-0 flex-1">
          <SectionEyebrow index={2} label={sectionNavLabel(2)} tone="light" />
          <h2 className="os-section-h2">OLD SCHOOL</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 items-stretch lg:grid-cols-[minmax(0,1fr)_minmax(240px,320px)]">
        <div className="relative border-b-2 border-black p-6 sm:p-8 lg:border-b-0 lg:border-r-2 lg:p-10 xl:p-12">
          <div className="os-asterisk-deco absolute right-6 top-6 text-5xl font-black lg:right-8 lg:top-8 lg:text-7xl">
            *
          </div>

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
          <div className="os-grid-cover-cell min-h-[14rem] border-b-2 border-black lg:min-h-[50%]">
            <picture>
              <source media="(min-width: 1024px)" srcSet={sec2img1d} />
              <img src={sec2img1m} alt="Old School Regresados" className="os-grid-cover-img" />
            </picture>
          </div>
          <div className="os-grid-cover-cell min-h-[14rem] lg:min-h-[50%]">
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
