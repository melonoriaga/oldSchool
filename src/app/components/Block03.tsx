
import { ReAccentWord } from './ReAccentWord';

export function Block03() {

  return (
    <div className="os-surface border-x-4 border-b-4 border-black">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        
        {/* Columna izquierda - Número */}
        <div className="lg:col-span-3 border-b-4 lg:border-b-0 lg:border-r-4 border-black p-8 lg:p-12 flex items-center justify-center">
          <div className="text-[8rem] lg:text-[12rem] font-black leading-none text-black">
            03
          </div>
        </div>

        {/* Columna derecha - Contenido */}
        <div className="lg:col-span-9 p-8 lg:p-12 xl:p-16 space-y-8">
          
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black leading-tight text-black">
            NO ES NOSTALGIA,<br />
            ES <ReAccentWord word="RECONEXIÓN" />.
          </h2>

          <div className="space-y-4 text-base lg:text-lg xl:text-xl leading-relaxed text-black">
            <p>Old School no está hecho para mirar el pasado desde afuera.</p>
            <p>Está hecho para volver a entrar.</p>
            <p>
              No es <ReAccentWord word="recordar" />.
            </p>
            <p>
              Es <ReAccentWord word="reactivar" />.
            </p>
            <p>No es mirar lo que fue.</p>
            <p className="font-black">
              Es volver a sentirlo en tiempo <ReAccentWord word="real" />.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
