

export function Block05() {

  return (
    <div className="os-surface border-x-4 border-b-4 border-black">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        
        {/* Columna izquierda - Número */}
        <div className="lg:col-span-3 border-b-2 lg:border-b-0 lg:border-r-2 border-black p-8 lg:p-12 flex items-center justify-center">
          <div className="text-[8rem] lg:text-[12rem] font-black leading-none text-black">
            05
          </div>
        </div>

        {/* Columna derecha - Contenido */}
        <div className="lg:col-span-9 p-8 lg:p-12 xl:p-16 space-y-8">
          
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black leading-tight text-black">
            NO EXTRAÑÁS EL DESTINO,<br />
            EXTRAÑÁS TU LATIDO.
          </h2>

          <div className="space-y-6 text-base lg:text-lg xl:text-xl leading-relaxed text-black">
            <p>
              Lo que extrañás del viaje de egresados no es solo el destino.
            </p>
            
            <p className="font-black text-2xl lg:text-3xl">
              Extrañás cómo latía tu vida cuando eras libre.
            </p>

            <p>
              Volver a vos es recuperar esa versión tuya:<br />
              liviana, valiente, presente, viva.<br />
              La que se emocionaba sin vergüenza.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
