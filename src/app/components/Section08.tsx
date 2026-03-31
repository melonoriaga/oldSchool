import { sectionNavLabel } from '../siteNav';
import { RegresadosWord } from './RegresadosWord';
import { SectionEyebrow } from './SectionEyebrow';

const bullets = [
  { refIndex: 2, text: 'Cupos reducidos' },
  { refIndex: 3, text: 'Producción premium' },
  { refIndex: 4, text: 'Universo musical y estética con identidad propia' },
  { refIndex: 5, text: 'Momentos diseñados escena por escena' },
] as const;

export function Section08() {
  return (
    <div id="formato" data-os-read-marker className="os-surface border-x-4 border-b-4 border-black">
      <div className="os-section-head--orange flex flex-col justify-between gap-6 border-b-2 border-black p-6 sm:flex-row sm:items-start sm:gap-8 sm:p-10 lg:p-14">
        <div className="max-w-3xl min-w-0 flex-1">
          <SectionEyebrow index={8} label={sectionNavLabel(8)} tone="light" />
          <h2 className="font-black uppercase leading-[1.05] tracking-tight text-3xl sm:text-5xl lg:text-6xl xl:text-7xl">
            FORMATO
            <br />
            EXCLUSIVO
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="border-b-2 border-black p-6 sm:p-8 lg:col-span-5 lg:border-b-0 lg:border-r-2 lg:p-10 xl:p-12">
          <p className="font-black leading-snug sm:text-xl lg:text-2xl">
            Old School® no es un viaje abierto.
          </p>
          <p className="mt-4 text-base font-medium leading-relaxed sm:text-lg lg:max-w-md">
            Cada edición se organiza para grupos limitados de <RegresadosWord variant="split" />.
          </p>

          <div className="mt-8 border-2 border-black">
            {bullets.map(({ refIndex, text }) => (
              <p
                key={refIndex}
                className="border-b-2 border-black px-4 py-3 text-[0.7rem] leading-tight font-black uppercase tracking-[0.04em] last:border-b-0 sm:px-5 sm:py-4 sm:text-base sm:tracking-wide"
              >
                {text}
              </p>
            ))}
          </div>
        </div>

        <div className="relative p-6 sm:p-8 lg:col-span-7 lg:p-10 xl:p-14">
          <div className="os-asterisk-deco pointer-events-none absolute right-4 top-4 text-5xl font-black sm:right-8 sm:top-8 sm:text-7xl lg:text-8xl">
            *
          </div>

          <div className="max-w-2xl space-y-5 text-base font-medium leading-relaxed sm:text-lg lg:space-y-6 lg:text-xl lg:leading-relaxed">
            <p className="font-black sm:text-xl lg:text-2xl">
              No todos los viajes merecen volver a vivirse.
              <br />
              Este sí.
            </p>

            <p>
              Esto no es un paquete.
            </p>
            <p className="border-l-2 border-[var(--os-orange)] pl-4 font-black leading-snug sm:text-lg lg:text-2xl">
              Es un formato experiencial, diseñado y cuidado para que cada momento tenga sentido.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
