import { sectionNavLabel } from '../siteNav';
import { SectionEyebrow } from './SectionEyebrow';
import sec2img1d from '@/assets/imageBySections/Section02/OldSchool-IMG-Sec2-01-Desktop.jpg';
import sec2img1m from '@/assets/imageBySections/Section02/OldSchool-IMG-Sec2-01-Mobile.jpg';
import sec2img2d from '@/assets/imageBySections/Section02/OldSchool-IMG--Sec2-02-Desktop2.jpg';
import sec2img2m from '@/assets/imageBySections/Section02/OldSchool-IMG-Sec2-02-Mobile2.jpg';

export function Section02() {

  return (
    <div id="concepto" data-os-read-marker className="os-surface border-x-4 border-b-4 border-black">
      <div className="os-section-head-row os-section-head--navy">
        <div className="max-w-3xl min-w-0 flex-1">
          <SectionEyebrow index={2} label={sectionNavLabel(2)} tone="light" />
          <h2 className="os-section-h2">
            HUBO UN<br />MOMENTO
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 items-stretch lg:grid-cols-[minmax(0,1fr)_minmax(240px,320px)]">
        <div className="relative border-b-2 border-black p-6 sm:p-8 lg:border-b-0 lg:border-r-2 lg:p-10 xl:p-12">
          <div className="os-asterisk-deco absolute right-6 top-6 text-5xl font-black lg:right-8 lg:top-8 lg:text-7xl">
            *
          </div>

          <div className="max-w-prose space-y-5 pr-2 sm:pr-12 lg:max-w-2xl">
            <p className="os-slice">
              Hubo un momento en tu vida en el que no estabas pensando tanto:
              <br />
              estabas <span className="font-black text-[var(--os-orange)]">viviendo</span>.
            </p>

            <p

              className="os-pull border-l-2 border-[var(--os-cyan)] pl-4 sm:pl-5"
            >
              No calculabas cada paso.
              <br />
              No medías todo.
              <br />
              No te frenabas tanto.
            </p>

            <p className="os-slice text-black/88">
              Te reías más. Te soltabas más. Conectabas más.
            </p>

            <p className="os-slice border-l-2 border-black pl-4 text-black/88 sm:pl-5">
              Ese momento no desapareció:
              <br />
              quedó guardado en el cuerpo.
            </p>

            <p className="os-pull pt-1 text-base sm:text-lg lg:text-xl">
              Y cada tanto vuelve,
              <br />
              en una canción, en una foto, en una charla.
            </p>

            <p className="os-slice pt-1 text-black/88">
              Y cuando vuelve, incomoda.
              <br />
              Porque te muestra algo que no perdiste,
            </p>
            <p

              className="os-section-title border-l-2 border-black pl-4 pt-2 text-sm sm:text-base lg:text-lg"
            >
              pero dejaste de usar.
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
