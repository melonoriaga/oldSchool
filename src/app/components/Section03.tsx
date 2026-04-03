import fotoGrupalCrudo from '@/assets/imageBySections/Section03/FotoGrupalCrudo.jpeg';
import { sectionNavLabel } from '../siteNav';
import { SectionEyebrow } from './SectionEyebrow';
import { DecryptedText } from './ui/DecryptedText';
import { DotGrid } from './ui/DotGrid';

export function Section03() {
  return (
    <div id="sec-03" data-os-read-marker className="os-surface border-x-4 border-b-4 border-black">
      <div className="os-section-head-row os-section-head--cyan">
        <div className=" min-w-0 flex-1">
          <SectionEyebrow index={3} label={sectionNavLabel(3)} tone="light" />
          <h2 className="os-section-h2" aria-label="NO ES NOSTALGIA, ES RECONEXIÓN.">
            NO ES NOSTALGIA,{' '}
            <DecryptedText
              text="ES RECONEXIÓN."
              replayOnHover
              useOriginalCharsOnly
              className="inline-block align-top"
              speed={48}
            />
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 items-stretch lg:grid-cols-12">
        <div
          className="os-grid-cover-cell border-b-2 border-black lg:col-span-4 lg:border-b-0 lg:border-r-2"
          style={{ height: '52vh' }}
        >
          <img
            src={fotoGrupalCrudo}
            alt="Foto grupal en la nieve con montañas y grupo con camperas blancas"
            className="os-grid-cover-img"
          />
        </div>

        <div
          className="relative flex items-center justify-center overflow-hidden 
        bg-[color-mix(in_srgb,var(--os-paper)_92%,var(--os-orange)_8%)] 
        p-8 lg:col-span-8 lg:p-10"
        >
          <DotGrid
            className="z-0"
            dotSize={3}
            gap={10}
            baseColor="#f5a46e"
            activeColor="#ff6a00"
            proximity={130}
            speedTrigger={70}
            shockRadius={180}
            shockStrength={3.2}
            resistance={820}
            returnDuration={1.3}
          />
          <div className="pointer-events-none absolute right-6 top-6 os-asterisk-deco text-5xl">
            *
          </div>
          <div className="relative z-[1] border-l-2 border-black pl-4 sm:pl-5">
            <p className="os-section-title text-xl leading-tight sm:text-2xl lg:text-4xl">
              Old School® No es recordar. Es reactivar.
            </p>
            <p className="mt-3 text-base font-black leading-snug text-black sm:mt-4 sm:text-lg lg:text-xl">
              No es mirar lo que fue. Es volver a sentirlo en tiempo real.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
