import { sectionNavLabel } from '../siteNav';
import { OldSchoolWord } from './OldSchoolWord';
import { SectionEyebrow } from './SectionEyebrow';
import { RegresadosWord } from './RegresadosWord';
import sec12d from '@/assets/imageBySections/Section12/OldSchool-IMG-Sec12-Desktop1.jpg';
import sec12m from '@/assets/imageBySections/Section12/OldSchool-IMG-Sec12-Mobile1.jpg';

export function Section10() {
  return (
    <div id="sec-12" data-os-read-marker className="os-surface border-x-4 border-b-4 border-black">
      <div className="os-section-head-row os-section-head--navy">
        <div className=" min-w-0 flex-1">
          <SectionEyebrow index={10} label={sectionNavLabel(10)} tone="light" />
          <h2 className="os-section-h2">
            LA CÁPSULA DEL TIEMPO
            <br />
            ARRANCA EN EL AVIÓN
          </h2>
        </div>
      </div>

      {/* Grid section */}
      <div className="grid grid-cols-1 items-stretch lg:grid-cols-2">
        {/* Image */}
        <div className="os-grid-cover-cell border-b-2 border-black lg:border-b-0 lg:border-r-2">
          <picture>
            <source media="(min-width: 1024px)" srcSet={sec12d} />
            <img src={sec12m} alt="Avión viaje Old School" className="os-grid-cover-img" />
          </picture>
        </div>

        {/* Text content */}
        <div className="relative flex flex-col justify-center space-y-6 p-6 sm:p-8 lg:p-10 xl:p-12">
          <div className="absolute right-6 top-6 text-5xl font-black os-asterisk-deco lg:right-8 lg:top-8 lg:text-7xl">
            *
          </div>

          <p className="os-pull max-w-2xl pr-12">
            El viaje empieza cuando subís al avión.
            <br />
            No cuando llegás.
          </p>

          <p className="os-slice max-w-2xl">Todavía no se conocen todos.</p>

          <p className="os-slice max-w-2xl">
            Pero algo ya se siente: miradas, primeras charlas, música compartida.
          </p>

          <p className="os-pull max-w-2xl">
            Porque el avión no es transporte.
            <br />
            Es transición.
          </p>

          <p className="os-slice max-w-2xl pt-2 text-black/80">
            Operamos con compañías aéreas de línea regular a Bariloche y, en la experiencia premium,
            también con vuelos charter exclusivos para <RegresadosWord variant="split" />{' '}
            <OldSchoolWord />.
          </p>

          <p className="os-pull max-w-2xl border-l-2 border-[var(--os-cyan)] pl-5 pt-2 sm:pl-6">
            En dos horas entrás en una cápsula del tiempo.
          </p>
        </div>
      </div>
    </div>
  );
}
