
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Section15() {

  return (
    <div data-os-read-marker className="os-surface border-x-4 border-b-4 border-black">
      <div className="os-section-head-row">
        <div className="max-w-3xl">
          <p className="os-section-kicker">MESA + GRUPO</p>
          <h2 className="os-section-h2">
            DONDE SE<br />CONSTRUYE TODO
          </h2>
        </div>
        <div className="os-brutal-num self-end sm:self-start">
          15
        </div>
      </div>

      {/* Grid section */}
      <div className="grid grid-cols-1 items-stretch lg:grid-cols-2">
        {/* Image */}
        <div

          className="os-grid-cover-cell border-b-4 border-black lg:border-b-0 lg:border-r-4"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1771837602933-c1cc6293702b?w=1200&q=80"
            alt="Comida grupo"
            className="os-grid-cover-img grayscale"
          />
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
            Es <span className="text-[var(--os-orange)]">banda</span>.
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

          <p className="os-pull max-w-2xl border-l-4 border-[var(--os-cyan)] pl-5 pt-4 sm:pl-6">
            Porque lo importante es esto:<br />
            nadie está solo.
          </p>
        </div>
      </div>
    </div>
  );
}
