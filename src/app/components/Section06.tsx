
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Section06() {

  return (
    <div id="bariloche" data-os-read-marker className="os-surface border-x-4 border-b-4 border-black">
      <div className="os-section-head-row">
        <div className="max-w-3xl">
          <p className="os-section-kicker">LUGAR + SÍMBOLO</p>
          <h2 className="os-section-h2">
            BARILOCHE NO ES UN LUGAR.
            <br />
            ES UN SÍMBOLO.
          </h2>
        </div>
        <div className="os-brutal-num self-end sm:self-start">
          06
        </div>
      </div>

      <div className="grid grid-cols-1 items-stretch lg:grid-cols-3">
        <div

          className="os-grid-cover-cell border-b-4 border-black lg:border-b-0 lg:border-r-4"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1653327611476-c55e75e6fbd4?w=800&q=80"
            alt="Lago Bariloche"
            className="os-grid-cover-img grayscale"
          />
        </div>

        <div className="relative flex flex-col justify-center space-y-5 border-b-4 border-black p-6 sm:p-8 lg:border-b-0 lg:border-r-4 lg:p-10 xl:p-12">
          <div className="os-asterisk-deco absolute right-6 top-6 text-5xl font-black lg:right-8 lg:top-8 lg:text-7xl">
            *
          </div>

          <p className="os-pull max-w-xl pr-10">
            Bariloche es el escenario.
            <br />
            Pero el verdadero regreso es a esa versión tuya que despertó ahí.
          </p>

          <p className="os-slice max-w-xl border-l-4 border-[var(--os-orange)] pl-4 text-black/88 sm:pl-5">
            No volvés al mapa.
            <br />
            Volvés a lo que te pasó ahí.
          </p>

          <p className="os-slice max-w-xl">
            Frío, montaña, lago.
            <br />
            Un símbolo compartido.
          </p>

          <p className="os-pull max-w-xl border-l-4 border-black pl-4 pt-1 text-base sm:text-lg lg:text-2xl sm:pl-5">
            Volver a Bariloche no es volver al lugar.
            <br />
            Es volver a lo que sentiste ahí.
          </p>
        </div>

        <div className="os-grid-cover-cell">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1505832018823-50331d70d237?w=800&q=80"
            alt="Montaña nevada"
            className="os-grid-cover-img grayscale"
          />
        </div>
      </div>
    </div>
  );
}
