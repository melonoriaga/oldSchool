import { sectionNavLabel } from '../siteNav';
import { SectionEyebrow } from './SectionEyebrow';
import sec8d from '@/assets/imageBySections/Section08/OldSchool-IMG-Sec8-01-Desktop1.jpg';
import sec8m from '@/assets/imageBySections/Section08/OldSchool-IMG-Sec8-01-Mobile2.jpg';

export function Section08() {

  return (
    <div

      id="producto"
      data-os-read-marker
      className="os-surface relative overflow-hidden border-x-4 border-b-4 border-black"
    >
      <div className="os-section-glow-layer" aria-hidden>
        <div className="os-section-glow-blob os-section-glow-blob--orange-tr" />
        <div className="os-section-glow-blob os-section-glow-blob--cyan-bl" />
      </div>
      <div className="os-section-head-row relative z-[1]">
        <div className="max-w-3xl min-w-0 flex-1">
          <SectionEyebrow index={8} label={sectionNavLabel(8)} />
          <h2 className="os-section-h2">
            UN VIAJE QUE
            <br />
            NO TERMINA
          </h2>
        </div>
      </div>

      <div className="relative z-[1] grid grid-cols-1 items-stretch lg:grid-cols-12">
        <div className="relative flex flex-col justify-center border-b-2 border-black p-6 sm:p-8 lg:col-span-7 lg:border-b-0 lg:border-r-2 lg:p-12 xl:p-14">
          <div className="os-asterisk-deco absolute right-6 top-6 text-5xl lg:right-8 lg:top-8 lg:text-7xl">
            *
          </div>
          <div className="max-w-3xl space-y-5 pr-8">
            <p className="os-slice">
              Lo importante no es solo lo que vivís allá.
            </p>
            <p

              className="os-pull border-l-2 border-[var(--os-orange)] pl-4 sm:pl-5"
            >
              Es lo que cambia cuando volvés.
            </p>
            <p className="os-slice pt-2 text-black/88">
              Porque hay viajes que terminan al bajar del avión.
            </p>
            <p className="os-slice text-black/88">
              Y otros que se quedan adentro.
            </p>
            <p

              className="os-section-title border-l-2 border-black pl-4 pt-2 text-sm sm:text-base lg:text-lg"
            >
              Este es de los segundos.
            </p>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="os-band-cyan border-b-2 border-black p-6 sm:p-8 lg:p-10">
            <p className="os-section-title text-sm text-black sm:text-base">
              LA EXPERIENCIA SIGUE OPERANDO CUANDO VOLVÉS
            </p>
          </div>
          <div className="os-grid-cover-cell border-b-2 border-black lg:border-b-0">
            <picture>
              <source media="(min-width: 1024px)" srcSet={sec8d} />
              <img src={sec8m} alt="Old School post-viaje" className="os-grid-cover-img" />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
}
