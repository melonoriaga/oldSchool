import { useState } from 'react';
import { SectionEyebrow } from './SectionEyebrow';
import { sectionNavLabel } from '../siteNav';

export function Section19() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: '¿Cómo me postulo para Old School®?',
      answer:
        'Completá el formulario de postulación en el sitio. Revisamos cada solicitud y te contactamos para confirmar disponibilidad y próximos pasos.',
    },
    {
      question: '¿Hay límite de edad?',
      answer:
        'Old School® está diseñado para adultos +30 que ya vivieron su viaje de egresados. La clave es tener ganas reales de volver a compartir.',
    },
    {
      question: '¿Puedo ir solo o tengo que ir en grupo?',
      answer:
        'Podés postularte solo o con amigos. La experiencia está pensada para generar dinámica grupal y conexión real.',
    },
    {
      question: '¿Qué incluye el viaje?',
      answer:
        'Incluye traslados, hotelería premium, gastronomía, excursiones, eventos especiales y discotecas con fiestas exclusivas.',
    },
    {
      question: '¿En qué época del año se hace?',
      answer:
        'Organizamos ediciones especiales durante el año. Las fechas se anuncian según disponibilidad de cupos.',
    },
    {
      question: '¿Cuántas noches dura la experiencia?',
      answer:
        'La experiencia completa tiene una duración de 4 noches, incluyendo traslados, hotelería premium, gastronomía, excursiones, eventos especiales y discotecas con fiestas exclusivas.',
    },
  ];

  return (
    <div id="faq" data-os-read-marker className="os-surface border-x-4 border-b-4 border-black">
      <div className="flex flex-col justify-between gap-6 border-b-2 border-black p-5 sm:flex-row sm:items-end sm:gap-8 sm:p-8 lg:p-16">
        <div className="max-w-3xl min-w-0 flex-1">
          <SectionEyebrow index={19} label={sectionNavLabel(19)} />
          <h2 className="font-black uppercase leading-[1.05] tracking-tight text-2xl sm:text-4xl lg:text-6xl">
            Antes de postularte,
            <br className="hidden sm:block" /> esto aclara el mapa.
          </h2>
        </div>
      </div>

      <div className="divide-y-2 divide-black">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={faq.question} className="p-5 sm:p-7 lg:p-8">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-black uppercase text-sm sm:text-base lg:text-lg">{faq.question}</span>
                <span className="text-2xl font-black leading-none">{isOpen ? '−' : '+'}</span>
              </button>
              {isOpen && <p className="mt-4 max-w-4xl text-sm leading-relaxed sm:text-base">{faq.answer}</p>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
