import { sectionNavLabel } from '../siteNav';
import { ReAccentWord } from './ReAccentWord';
import { SectionEyebrow } from './SectionEyebrow';

export function Section03() {
  return (
    <div id="sec-03" data-os-read-marker className="os-surface border-x-4 border-b-4 border-black">
      <div className="os-section-head-row os-section-head--cyan">
        <div className="max-w-3xl min-w-0 flex-1">
          <SectionEyebrow index={3} label={sectionNavLabel(3)} tone="light" />
          <h2 className="os-section-h2">
            NO ES NOSTALGIA,
            <br />
            ES <ReAccentWord word="RECONEXIÓN" />.
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 items-stretch lg:grid-cols-12">
        <div className="border-b-2 border-black p-6 sm:p-8 lg:col-span-8 lg:border-b-0 lg:border-r-2 lg:p-10 xl:p-12">
          <div className="max-w-3xl space-y-5">
            <p className="os-slice">Old School no está hecho para mirar el pasado desde afuera.</p>
            <p className="os-pull border-l-2 border-[var(--os-orange)] pl-4 sm:pl-5">
              Está hecho para volver a entrar.
            </p>
            <p className="os-slice text-black/88">
              No es <ReAccentWord word="recordar" />. Es <ReAccentWord word="reactivar" />. No es mirar lo que fue.
            </p>
            <p className="os-section-title border-l-2 border-black pl-4 pt-2 text-sm sm:text-base lg:text-lg">
              Es volver a sentirlo en tiempo <ReAccentWord word="real" />.
            </p>
          </div>
        </div>

        <div className="relative flex items-center justify-center bg-[color-mix(in_srgb,var(--os-cyan)_10%,var(--os-paper))] p-8 lg:col-span-4 lg:p-10">
          <div className="pointer-events-none absolute right-6 top-6 os-asterisk-deco text-5xl">*</div>
          <div className="max-w-md border-l-2 border-black pl-4 sm:pl-5">
            <p className="os-section-title text-base leading-tight sm:text-xl lg:text-2xl">
              NO ES NOSTALGIA
            </p>
            <p className="mt-3 text-sm font-medium leading-snug text-black/90 sm:mt-4 sm:text-base lg:text-lg">
              Es una <ReAccentWord word="reconexión" /> <ReAccentWord word="real" /> con una versión de vos que sigue
              viva.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
