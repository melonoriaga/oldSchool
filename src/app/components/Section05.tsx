import { sectionNavLabel } from '../siteNav';
import { SectionEyebrow } from './SectionEyebrow';

export function Section05() {

  return (
    <div
      id="sec-05"
      data-os-read-marker
      className="os-band-cyan border-x-4 border-b-4 border-black"
    >
      <div className="grid grid-cols-1">
        <div className="p-8 lg:p-20 xl:p-24 relative">
          <div className="os-asterisk-deco absolute top-8 right-8 text-5xl lg:text-7xl">
            *
          </div>

          <div className="os-asterisk-deco absolute bottom-8 left-8 text-6xl lg:text-8xl">
            *
          </div>

          <SectionEyebrow index={5} label={sectionNavLabel(5)} />

          <h2 className="os-section-title mb-10 text-2xl leading-tight lg:text-4xl xl:text-5xl">
            NO EXTRAÑÁS EL DESTINO,<br />
            EXTRAÑÁS TU LATIDO.
          </h2>

          <div className="max-w-4xl space-y-5">
            <p className="os-body">
              Lo que extrañás del viaje de egresados no es solo el destino.
            </p>

            <p className="os-section-title text-base lg:text-xl">
              Extrañás cómo latía tu vida cuando eras libre.
            </p>

            <p className="os-body pt-6">
              Volver a vos es recuperar esa versión tuya:<br />
              liviana, valiente, presente, viva.<br />
              La que se emocionaba sin vergüenza.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}