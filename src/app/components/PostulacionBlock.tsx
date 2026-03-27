import { ArrowRight } from 'lucide-react';

import { placeholderByIndex } from '@/data/placeholders';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface PostulacionBlockProps {
  onPostular: () => void;
}

export function PostulacionBlock({ onPostular }: PostulacionBlockProps) {

  return (
    <div
      id="postulacion"

      data-os-read-marker
      className="os-surface border-x-4 border-b-4 border-black"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center space-y-10 border-b-4 border-black p-8 lg:border-b-0 lg:border-r-4 lg:p-16 xl:p-20">
          <div className="os-brutal-num">
            26
          </div>

          <div className="space-y-6">
            <h2 className="font-black leading-tight text-3xl lg:text-5xl">
              ESTO NO ES INSCRIPCIÓN.
              <br />
              ES POSTULACIÓN.
            </h2>

            <p className="os-body max-w-xl">
              Es para quienes sienten que todavía tienen algo pendiente con esa versión suya que
              despertó en el viaje.
            </p>

            <div className="os-body-strong space-y-2 pt-2">
              <p>Cupos limitados</p>
              <p>Postulación sujeta a disponibilidad</p>
            </div>
          </div>

          <div className="os-cta-row">
            <button type="button" onClick={onPostular} className="os-btn-primary">
              POSTULARME AHORA <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </button>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="os-btn-secondary"
            >
              INFO POR WHATSAPP
            </a>
          </div>
        </div>

        <div className="relative min-h-[45vh] lg:min-h-[80vh]">
          <ImageWithFallback

            src={placeholderByIndex(10)}
            alt=""
            className="h-full w-full object-cover grayscale"
          />
        </div>
      </div>
    </div>
  );
}
