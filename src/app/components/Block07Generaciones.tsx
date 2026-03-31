
import { RegresadosWord } from './RegresadosWord';

export function Block07Generaciones() {

  return (
    <div className="os-surface border-x-4 border-b-4 border-black">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        
        {/* Columna izquierda - Número */}
        <div className="lg:col-span-3 lg:row-span-5 border-b-2 lg:border-b-0 lg:border-r-2 border-black p-8 lg:p-12 flex items-center justify-center">
          <div className="text-[8rem] lg:text-[12rem] font-black leading-none text-black">
            07
          </div>
        </div>

        {/* Título y subtítulo */}
        <div className="lg:col-span-9 border-b-2 border-black p-8 lg:p-12 xl:p-16 space-y-6">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black leading-tight text-black">
            <RegresadosWord className="h-[0.8em] align-[-0.04em]" />
          </h2>
          
          <p className="text-2xl lg:text-3xl font-black leading-tight text-black">
            CADA GENERACIÓN LO VIVIÓ DISTINTO,<br />
            PERO TODAS SINTIERON LO MISMO.
          </p>

          <div className="space-y-4 text-base lg:text-lg leading-relaxed text-black">
            <p>No hacemos un viaje estándar.</p>
            <p>Diseñamos la experiencia según tu generación.</p>
            <p>Porque no es lo mismo haber egresado en los 80 que en los 2000.</p>
            <p>Cambió la música, cambió la forma de vincularse, cambió el código.</p>
            <p className="font-black">Pero hay algo que no cambió: lo que Bariloche dejó adentro.</p>
          </div>
        </div>

        {/* Generación 80 */}
        <div className="lg:col-span-9 border-b-2 border-black p-8 lg:p-12 xl:p-16 space-y-4">
          <h3 className="text-2xl lg:text-3xl font-black text-black">
            Generación 80 - La que vivió sin filtro.
          </h3>
          <p className="text-base lg:text-lg leading-relaxed text-black">
            Casseteras, Walkman, cartas, lentos y promesas.<br />
            Una generación con mística, códigos y amistades que todavía laten.<br />
            Para ellos diseñamos experiencias con espíritu auténtico, emoción real y memoria viva.
          </p>
        </div>

        {/* Generación 90 */}
        <div className="lg:col-span-9 border-b-2 border-black p-8 lg:p-12 xl:p-16 space-y-4">
          <h3 className="text-2xl lg:text-3xl font-black text-black">
            Generación 90 - La que mezcló inocencia con revolución.
          </h3>
          <p className="text-base lg:text-lg leading-relaxed text-black">
            CD, MSN, primeras cámaras digitales, coreografías, noches eternas y amistad intensa.<br />
            Una generación que empezó a mostrarse al mundo, pero todavía sabía mirar a los ojos.<br />
            Para ellos creamos viajes con fiestas icónicas y reencuentros potentes.
          </p>
        </div>

        {/* Generación 2000 */}
        <div className="lg:col-span-9 border-b-2 border-black p-8 lg:p-12 xl:p-16 space-y-4">
          <h3 className="text-2xl lg:text-3xl font-black text-black">
            Generación 2000 - La que creció conectada.
          </h3>
          <p className="text-base lg:text-lg leading-relaxed text-black">
            Fotolog, Messenger, redes, primeras selfies.<br />
            Una generación expresiva, intensa y protagonista.<br />
            Para ellos armamos viajes visuales, vibrantes y con energía de estreno.
          </p>
        </div>

        {/* Generación 2010 */}
        <div className="lg:col-span-9 p-8 lg:p-12 xl:p-16 space-y-4">
          <h3 className="text-2xl lg:text-3xl font-black text-black">
            Generación 2010 - La que empezó a vivir… y a mostrarse.
          </h3>
          <p className="text-base lg:text-lg leading-relaxed text-black">
            Instagram, WhatsApp, Snapchat.<br />
            Viajes en tiempo real, entre lo digital y lo real.<br />
            Para ellos diseñamos experiencias que vuelven a activar esa intensidad.
          </p>
        </div>

      </div>
    </div>
  );
}
