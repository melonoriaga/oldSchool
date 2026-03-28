import sec14d from '@/assets/imageBySections/Section14/OldSchool-IMG-Sec14-Desktop.jpg';
import sec14m from '@/assets/imageBySections/Section14/OldSchool-IMG-Sec14-Mobile1.jpg';

export function Section14() {

  return (
    <div data-os-read-marker className="os-surface border-x-4 border-b-4 border-black">
      <div className="os-section-head-row">
        <div className="max-w-3xl">
          <p className="os-section-kicker">BASE + CORAZÓN</p>
          <h2 className="os-section-h2">
            DONDE EMPIEZA<br />TODO
          </h2>
        </div>
        <div className="os-brutal-num self-end sm:self-start">
          14
        </div>
      </div>

      {/* Grid section */}
      <div className="grid grid-cols-1 items-stretch lg:grid-cols-[1fr_2fr]">
        {/* Image */}
        <div

          className="os-grid-cover-cell border-b-4 border-black lg:border-b-0 lg:border-r-4"
        >
          <picture>
            <source media="(min-width: 1024px)" srcSet={sec14d} />
            <img src={sec14m} alt="Hotel Bariloche Old School" className="os-grid-cover-img" />
          </picture>
        </div>

        {/* Text content */}
        <div className="space-y-6 p-6 sm:p-8 lg:p-10 xl:p-12">
          <p className="os-pull max-w-2xl">
            El hotel no es alojamiento.<br />
            Es <span className="text-[var(--os-cyan)]">escenario</span>.
          </p>

          <p className="os-slice max-w-2xl pt-1">
            Tu base está en el corazón de Bariloche:<br />
            a metros del Centro Cívico, el lago y las discotecas.
          </p>

          <p className="os-slice max-w-2xl text-black/80">
            Nuestra cadena de hoteles es premium, exclusiva y pensada para que todo esté cerca.
          </p>

          <p className="os-slice max-w-2xl">
            Habitaciones dobles, triples y cuádruples con máximo confort.
          </p>

          <p className="os-slice max-w-2xl pt-2">
            Porque el hotel no es solo un lugar para dormir.
          </p>

          <p className="os-pull max-w-2xl border-l-4 border-black pl-5 sm:pl-6">
            También es encuentro, charla y buenos momentos.
          </p>

          <p className="os-pull max-w-2xl pt-4 text-[var(--os-navy)]">
            El hotel también es parte de la historia.
          </p>
        </div>
      </div>
    </div>
  );
}
