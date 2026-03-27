import { ArrowRight } from 'lucide-react';

import { RegresadosWord } from './RegresadosWord';

interface Section23Props {
  onPostular: () => void;
}

export function Section23({ onPostular }: Section23Props) {

  return (
    <div

      id="precio"
      data-os-read-marker
      className="os-surface border-x-4 border-b-4 border-black"
    >
      <div className="os-section-head-row">
        <div className="max-w-3xl">
          <p className="os-section-kicker">PRECIO + SENTIDO</p>
          <h2 className="os-section-h2">
            NO TIENE PRECIO,
            <br />
            TIENE VALOR
          </h2>
        </div>
        <div className="os-brutal-num self-end sm:self-start">
          23
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="os-band-cyan border-b-4 border-black p-6 sm:p-8 lg:col-span-5 lg:border-b-0 lg:border-r-4 lg:p-12">
          <p

            className="os-section-title text-lg sm:text-xl lg:text-2xl"
          >
            ESTO NO ES BARATO.
          </p>
          <p

            className="os-pull mt-4 border-l-4 border-black pl-4 text-black sm:pl-5"
          >
            Porque no es lo mismo.
          </p>
        </div>

        <div className="space-y-5 p-6 sm:p-8 lg:col-span-7 lg:p-12">
          <p className="os-slice">
            No es un paquete.
          </p>
          <p

            className="os-slice border-l-4 border-[var(--os-orange)] pl-4 sm:pl-5"
          >
            No es una promoción.
          </p>
          <p

            className="os-pull pt-2 text-base sm:text-lg lg:text-2xl"
          >
            Es una experiencia diseñada a medida de un concepto:
          </p>
          <p

            className="os-section-title border-l-4 border-black pl-4 text-2xl sm:pl-5 sm:text-3xl lg:text-4xl"
          >
            <RegresadosWord variant="split" />.
          </p>
        </div>

        <div

          className="border-t-4 border-black bg-black/[0.03] p-6 sm:p-8 lg:col-span-12 lg:p-10"
        >
          <button
            type="button"
            onClick={onPostular}
            className="os-btn-primary os-btn-lg inline-flex w-full justify-center sm:w-auto"
          >
            CONSULTAR PRECIO <ArrowRight className="h-5 w-5 shrink-0" strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </div>
  );
}
