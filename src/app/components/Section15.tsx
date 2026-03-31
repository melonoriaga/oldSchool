import { sectionNavLabel } from '../siteNav';
import { SectionEyebrow } from './SectionEyebrow';
import sec15d from '@/assets/imageBySections/Section15/OldSchool-IMG-Sec15-Desktop1.jpg';
import sec15m from '@/assets/imageBySections/Section15/OldSchool-IMG-Sec15-Mobile1.jpg';

export function Section15() {

  return (
    <div id="sec-15" data-os-read-marker className="os-surface border-x-4 border-b-4 border-black">
      <div className="os-section-head-row os-section-head--cyan">
        <div className="max-w-3xl min-w-0 flex-1">
          <SectionEyebrow index={13} label={sectionNavLabel(15)} tone="light" />
          <h2 className="os-section-h2">
            DONDE SE<br />CONSTRUYE TODO
          </h2>
        </div>
      </div>

      {/* Grid section */}
      <div className="grid grid-cols-1 items-stretch lg:grid-cols-2">
        {/* Image */}
        <div

          className="os-grid-cover-cell border-b-2 border-black lg:border-b-0 lg:border-r-2"
        >
          <picture>
            <source media="(min-width: 1024px)" srcSet={sec15d} />
            <img src={sec15m} alt="Grupo Old School comida" className="os-grid-cover-img" />
          </picture>
        </div>

        {/* Text content */}
        <div className="relative flex flex-col justify-center space-y-6 p-6 sm:p-8 lg:p-10 xl:p-12">
          <div className="absolute right-6 top-6 text-5xl font-black os-asterisk-deco lg:right-8 lg:top-8 lg:text-7xl">
            *
          </div>

          <p className="os-pull max-w-2xl pr-12">
            La comida no es comida.<br />
            Es mezcla.<br />
            Es grupo.<br />
            Es banda.
          </p>

          <p className="os-slice max-w-2xl text-black/80">
            Nuestro programa incluye pensión completa, con bebidas libres de primeras marcas en las comidas.
          </p>

          <p className="os-pull max-w-2xl pt-2 text-base sm:text-lg lg:text-xl">
            Pero más allá del servicio, importa lo que pasa ahí:
          </p>

          <p className="os-slice max-w-2xl">
            mesas largas, risas, abrazos, brindis que se estiran, charlas que no se quieren cortar.
          </p>

          <p className="os-slice max-w-2xl text-sm sm:text-base">
            Contemplamos dietas especiales, menús vegetarianos, celíacos y otras especificaciones.
          </p>

          <p className="os-pull max-w-2xl border-l-2 border-[var(--os-cyan)] pl-5 pt-4 sm:pl-6">
            Porque lo importante es esto:<br />
            nadie está solo.
          </p>
        </div>
      </div>
    </div>
  );
}
