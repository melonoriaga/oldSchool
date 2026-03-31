import { sectionNavLabel } from '../siteNav';
import { SectionEyebrow } from './SectionEyebrow';

export function Section19() {

  return (
    <div id="sec-19" data-os-read-marker className="os-surface border-x-4 border-b-4 border-black">
      <div className="os-section-head-row os-section-head--orange">
        <div className="max-w-3xl min-w-0 flex-1">
          <SectionEyebrow index={19} label={sectionNavLabel(19)} tone="light" />
          <h2 className="os-section-h2">
            VISUALIZACIÓN<br />TOTAL
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="border-b-2 border-black p-6 sm:p-8 lg:col-span-7 lg:border-b-0 lg:border-r-2 lg:p-12 xl:p-14">
          <div className="max-w-3xl space-y-5 sm:space-y-6">
            <p className="os-pull">
              Llegás.
            </p>
            <p className="os-slice text-lg sm:text-xl">
              No conocés a nadie.
            </p>
            <p className="os-pull text-xl sm:text-2xl lg:text-3xl">
              A las horas, ya estás hablando.
            </p>
            <p className="os-slice text-lg sm:text-xl">
              Al segundo día, ya estás riendo.
            </p>
            <p className="os-pull border-l-2 border-[var(--os-cyan)] pl-5 text-xl sm:pl-6 sm:text-2xl lg:text-3xl">
              A la noche, ya estás adentro.
            </p>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="os-band-cyan border-b-2 border-black p-6 sm:p-8 lg:p-10">
            <p className="os-section-title text-sm sm:text-base">
              DURANTE EL VIAJE TE SOLTÁS
            </p>
          </div>
          <div className="bg-[color-mix(in_srgb,var(--os-paper)_85%,white)] p-6 sm:p-8 lg:p-10">
            <p className="os-pull text-2xl sm:text-3xl lg:text-4xl">
              Y en algún momento, dejás de pensar y{' '}
              <span className="text-[var(--os-orange)]">empezás a vivir</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
