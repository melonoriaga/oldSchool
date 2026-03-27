import { useState } from 'react';

export function Section22() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: '¿Cómo me postulo para Old School®?',
      answer:
        'Completá el formulario de postulación en el sitio. Revisamos cada solicitud y nos ponemos en contacto con vos para confirmar disponibilidad y detalles.',
    },
    {
      question: '¿Hay límite de edad?',
      answer:
        'Old School® está diseñado para personas que ya vivieron su viaje de egresados. No hay límite de edad, pero sí una condición: ganas de volver a conectar con esa versión tuya.',
    },
    {
      question: '¿Puedo ir solo o tengo que ir en grupo?',
      answer:
        'Podés postularte solo o con amigos. El viaje está diseñado para que, vengas como vengas, termines siendo parte de un grupo.',
    },
    {
      question: '¿Qué incluye el viaje?',
      answer:
        'Vuelo, alojamiento, pensión completa con bebidas, excursiones, fiestas temáticas, transporte interno, Momentos WOW y toda la producción premium de Old School®.',
    },
    {
      question: '¿En qué época del año se hace?',
      answer:
        'Organizamos ediciones especiales durante el año. Las fechas se confirman según la generación y disponibilidad de cupos.',
    },
    {
      question: '¿Cuántos días dura?',
      answer:
        'La experiencia completa tiene una duración aproximada de 7 días, incluyendo traslados, excursiones y todas las actividades.',
    },
  ];

  return (
    <div
      id="faq"
      data-os-read-marker
      className="os-surface border-x-4 border-b-4 border-black"
    >
      <div className="flex flex-col justify-between gap-6 border-b-4 border-black p-5 sm:flex-row sm:items-end sm:gap-8 sm:p-8 lg:p-16">
        <div className="max-w-3xl">
          <p className="os-section-title mb-2 text-[0.65rem] text-[var(--os-orange)] sm:text-xs">
            PREGUNTAS FRECUENTES
          </p>
          <h2 className="font-black uppercase leading-[1.05] tracking-tight text-2xl sm:text-4xl lg:text-6xl">
            Antes de postularte,
            <br className="hidden sm:block" /> esto aclara el mapa.
          </h2>
        </div>
        <div className="os-brutal-num self-end sm:self-auto">
          22
        </div>
      </div>

      <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,2.2fr)]">
        <div className="hidden border-b-4 border-black bg-[var(--os-navy)] px-8 py-10 text-white lg:block lg:border-b-0 lg:border-r-4 lg:py-16">
          <p className="font-black uppercase leading-tight tracking-tight text-lg">
            Dudas habituales.
          </p>
          <p className="mt-4 text-sm font-medium leading-relaxed text-white/75">
            Abrí cada ítem. Si algo no está acá, escribinos por el formulario o por WhatsApp.
          </p>
          <div className="mt-10 font-black tabular-nums text-5xl leading-none text-[var(--os-cyan)] opacity-90">
            {String(faqs.length).padStart(2, '0')}
          </div>
          <p className="mt-2 text-xs font-bold uppercase tracking-widest text-white/50">
            preguntas
          </p>
        </div>

        <div className="border-black lg:border-0">
          <ul className="divide-y-4 divide-black">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const num = String(index + 1).padStart(2, '0');
              return (
                <li key={index} className="os-surface">
                  <button
                    type="button"
                    id={`faq-q-${index}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-a-${index}`}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="group flex w-full gap-3 px-4 py-5 text-left transition-colors hover:bg-black/[0.03] sm:gap-5 sm:px-8 sm:py-7 lg:px-10 lg:py-8"
                  >
                    <span
                      className="mt-0.5 w-9 shrink-0 pt-0.5 text-right font-black tabular-nums text-sm text-[var(--os-orange)] sm:w-11 sm:text-base"
                      aria-hidden
                    >
                      {num}
                    </span>
                    <span className="min-w-0 flex-1 font-black leading-snug sm:text-lg lg:text-xl">
                      {faq.question}
                    </span>
                    <span
                      className={`mt-1 flex h-9 w-9 shrink-0 items-center justify-center border-2 border-black text-lg font-black leading-none transition-transform sm:h-10 sm:w-10 ${
                        isOpen
                          ? 'bg-[var(--os-navy)] text-white shadow-[2px_2px_0_0_#000]'
                          : 'bg-os-paper text-black shadow-[2px_2px_0_0_#000] group-hover:-translate-x-px group-hover:-translate-y-px'
                      }`}
                      aria-hidden
                    >
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  <div
                    id={`faq-a-${index}`}
                    role="region"
                    aria-labelledby={`faq-q-${index}`}
                    aria-hidden={!isOpen}
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <div className="border-t-4 border-black bg-[var(--os-cyan)]/12 px-4 py-5 sm:px-8 sm:py-7 sm:pl-[4.25rem] lg:px-10 lg:py-8 lg:pl-[6.5rem]">
                        <p className="text-sm leading-relaxed sm:text-base lg:text-lg">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
