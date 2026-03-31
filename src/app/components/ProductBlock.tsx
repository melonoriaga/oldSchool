import { Check } from 'lucide-react';

import { ImageWithFallback } from './figma/ImageWithFallback';

export function ProductBlock() {

  return (
    <div id="producto" className="os-surface border-x-4 border-b-4 border-black">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left - Image */}
        <div className="relative h-[50vh] lg:h-screen border-b-2 lg:border-b-0 lg:border-r-2 border-black">
          <ImageWithFallback

            src="https://images.unsplash.com/photo-1772127822607-2343696cf82e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHJlc29ydCUyMHRyYXZlbCUyMGV4cGVyaWVuY2V8ZW58MXx8fHwxNzczNzk4NzMwfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Experiencia"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-8 left-8 os-surface px-6 py-3 border-2 border-black">
            <p className="text-sm font-bold tracking-widest">LA EXPERIENCIA</p>
          </div>
          <div className="os-spin-slow absolute bottom-8 left-8 text-6xl font-black opacity-20">
            *
          </div>
        </div>

        {/* Right - Content */}
        <div className="p-8 lg:p-16 flex flex-col justify-center relative">
          <div className="absolute top-8 right-8 text-7xl font-black opacity-20">
            *
          </div>
          <div className="space-y-12">
            <div>
              <div className="text-[8rem] font-black leading-none mb-6">04</div>
              <h2 className="text-4xl lg:text-5xl font-black leading-tight mb-8">
                QUÉ INCLUYE
              </h2>
            </div>

            <div className="space-y-3">
              <p className="text-xl font-bold">Duración: 4 a 6 días</p>
              <p className="text-xl font-bold">Formato: experiencia grupal</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-4">Incluye:</h3>
              <ul className="space-y-3">
                {[
                  'Traslados (aéreos o terrestres según origen)',
                  'Alojamiento en hotel seleccionado',
                  'Actividades grupales',
                  'Experiencias nocturnas',
                  'Momentos recreados del viaje de egresados',
                  'Espacios de encuentro y reencuentro'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-lg">
                    <Check className="w-6 h-6 flex-shrink-0 mt-1" strokeWidth={3} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t-2 border-black">
              <p className="text-xl font-bold">
                Cupos limitados<br />
                Inscripción sujeta a disponibilidad
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}