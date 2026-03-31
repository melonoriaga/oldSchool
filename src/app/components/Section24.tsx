import { ArrowRight } from 'lucide-react';
import { sectionNavLabel } from '../siteNav';
import { SectionEyebrow } from './SectionEyebrow';

interface Section24Props {
  onPostular: () => void;
}

export function Section24({ onPostular }: Section24Props) {

  return (
    <div
      id="sec-25"
      data-os-read-marker
      className="border-x-4 border-b-4 border-black bg-[var(--os-navy)] text-white"
    >
      {/* Header */}
      <div className="relative flex flex-col gap-3 border-b-2 border-white p-4 sm:flex-row sm:items-end sm:justify-between sm:gap-6 sm:p-8 lg:p-16">
        <div

          className="os-asterisk-deco pointer-events-none absolute right-3 top-3 text-4xl font-black text-white/30 sm:right-8 sm:top-8 sm:text-6xl lg:text-8xl"
        >
          *
        </div>
        <div className="max-w-[85%] min-w-0 flex-1 sm:max-w-none">
          <SectionEyebrow index={25} label={sectionNavLabel(25)} tone="light" />
          <h2

            className="text-3xl font-black leading-[1.05] sm:text-5xl lg:text-7xl xl:text-8xl"
          >
            PRIMERA
            <br />
            EDICIÓN
          </h2>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 text-center sm:p-8 lg:p-20 xl:p-24">
        <p

          className="mb-10 font-black leading-tight sm:mb-12 lg:mb-16 text-2xl sm:text-3xl lg:text-5xl xl:text-6xl"
        >
          CUPOS LIMITADOS
        </p>

        <div>
          <button
            type="button"
            onClick={onPostular}
            className="os-btn-primary os-btn-lg os-btn-on-dark inline-flex w-full max-w-md justify-center px-8 sm:w-auto"
          >
            ASEGURAR MI LUGAR <ArrowRight className="h-5 w-5 shrink-0" strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </div>
  );
}
