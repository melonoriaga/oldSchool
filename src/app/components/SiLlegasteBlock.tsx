import { ArrowRight } from 'lucide-react';

interface SiLlegasteBlockProps {
  onPostular: () => void;
}

export function SiLlegasteBlock({ onPostular }: SiLlegasteBlockProps) {

  return (
    <div className="os-surface border-x-4 border-b-4 border-black">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        
        {/* Columna izquierda - Número */}
        <div className="lg:col-span-3 border-b-2 lg:border-b-0 lg:border-r-2 border-black p-8 lg:p-12 flex items-center justify-center">
          <div className="text-[8rem] lg:text-[12rem] font-black leading-none text-black">
            21
          </div>
        </div>

        {/* Columna derecha - Contenido */}
        <div className="lg:col-span-9 p-8 lg:p-12 xl:p-16 space-y-8">
          
          <h2 className="text-3xl lg:text-5xl xl:text-6xl font-black leading-tight text-black">
            SI LLEGASTE HASTA ACÁ,<br />
            NO ES CASUALIDAD.
          </h2>

          <div className="space-y-6 text-base lg:text-lg xl:text-xl leading-relaxed text-black">
            <p>
              Vos no estabas buscando un viaje.<br />
              Estabas buscando una prueba de que todavía estás ahí.
            </p>
            
            <p>
              Old School® no te promete nostalgia.<br />
              Te promete algo más incómodo y más verdadero: volver a sentir.<br />
              Reírte con el cuerpo.<br />
              Cantar sin vergüenza.<br />
              Mirar a tus amigos y reconocer esa chispa que es tuya.
            </p>

            <p>
              Ahora, la parte incómoda:<br />
              nadie te va a venir a buscar.<br />
              La vida no frena.<br />
              Los años no esperan.<br />
              Y esa versión tuya no vuelve sola.
            </p>

            <p>
              Por eso este cierre no es un "gracias por leer".<br />
              Es una invitación a decidir.
            </p>

            <div className="pt-4">
              <p className="text-2xl lg:text-3xl font-black text-black">
                Reservá tu fecha.<br />
                Reservá tu lugar.<br />
                Sumá a tu gente.<br />
                Hacé que suceda.
              </p>
            </div>

            <p className="text-2xl lg:text-3xl xl:text-4xl font-black leading-tight text-black pt-6">
              El viaje de egresados se hace una sola vez en la vida.<br />
              <span className="relative inline-block">
                Hasta ahora.
                <span className="absolute -top-2 -right-6 text-4xl text-[#FF5420] opacity-60">*</span>
              </span>
            </p>
          </div>

          <div className="pt-8">
            <button
              type="button"
              onClick={onPostular}
              className="os-btn-primary os-btn-lg inline-flex w-full justify-center sm:w-auto"
            >
              POSTULARME AHORA <ArrowRight className="h-5 w-5 shrink-0" strokeWidth={2.5} />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
