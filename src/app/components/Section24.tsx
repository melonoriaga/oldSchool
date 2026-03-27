import { ArrowRight } from 'lucide-react';

interface Section24Props {
  onPostular: () => void;
}

export function Section24({ onPostular }: Section24Props) {

  return (
    <div

      data-os-read-marker
      className="border-x-4 border-b-4 border-black bg-[var(--os-navy)] text-white"
    >
      {/* Header */}
      <div className="relative flex items-center justify-between border-b-4 border-white p-4 sm:p-8 lg:p-16">
        <div

          className="os-asterisk-deco pointer-events-none absolute right-3 top-3 text-4xl font-black text-white/30 sm:right-8 sm:top-8 sm:text-6xl lg:text-8xl"
        >
          *
        </div>
        <h2

          className="max-w-[85%] text-3xl font-black leading-[1.05] sm:text-5xl sm:max-w-none lg:text-7xl xl:text-8xl"
        >
          PRIMERA
          <br />
          EDICIÓN
        </h2>
        <div className="os-brutal-num os-brutal-num--on-dark">
          24
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
