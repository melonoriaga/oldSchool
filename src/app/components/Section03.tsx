import { ReAccentWord } from './ReAccentWord';

export function Section03() {
  return (
    <div data-os-read-marker className="os-surface border-x-4 border-b-4 border-black">
      <div className="os-section-head-row">
        <div className="max-w-3xl">
          <p className="os-section-kicker">
            <ReAccentWord word="RETRO" tone="cyan" /> + PRESENCIA
          </p>
          <h2 className="os-section-h2">
            NO ES NOSTALGIA,
            <br />
            ES <ReAccentWord word="RECONEXIÓN" tone="orange" />.
          </h2>
        </div>
        <div className="os-brutal-num self-end sm:self-start">
          03
        </div>
      </div>

      <div className="grid grid-cols-1 items-stretch lg:grid-cols-12">
        <div className="border-b-4 border-black p-6 sm:p-8 lg:col-span-8 lg:border-b-0 lg:border-r-4 lg:p-10 xl:p-12">
          <div className="max-w-3xl space-y-5">
            <p className="os-slice">Old School no está hecho para mirar el pasado desde afuera.</p>
            <p className="os-pull border-l-4 border-[var(--os-orange)] pl-4 sm:pl-5">
              Está hecho para volver a entrar.
            </p>
            <p className="os-slice text-black/88">
              No es <ReAccentWord word="recordar" tone="orange" />. Es{' '}
              <ReAccentWord word="reactivar" tone="cyan" />. No es mirar lo que fue.
            </p>
            <p className="os-section-title border-l-4 border-black pl-4 pt-2 text-sm sm:text-base lg:text-lg">
              Es volver a sentirlo en tiempo <ReAccentWord word="real" tone="cyan" />.
            </p>
          </div>
        </div>

        <div className="relative flex items-center justify-center bg-[color-mix(in_srgb,var(--os-cyan)_10%,var(--os-paper))] p-8 lg:col-span-4 lg:p-10">
          <div className="pointer-events-none absolute right-6 top-6 os-asterisk-deco text-5xl">*</div>
          <div className="max-w-xs border-l-4 border-black pl-4">
            <p className="os-section-title text-xs sm:text-sm">NO ES NOSTALGIA</p>
            <p className="os-body mt-2 text-black/88">
              Es una <ReAccentWord word="reconexión" tone="orange" />{' '}
              <ReAccentWord word="real" tone="cyan" /> con una versión de vos que sigue viva.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
