import { sectionNavLabel } from '../siteNav';
import { SectionEyebrow } from './SectionEyebrow';

export function Section16() {
  return (
    <div id="sec-18" data-os-read-marker className="os-surface border-x-4 border-b-4 border-black">
      <div className="os-section-head-row">
        <div className=" min-w-0 flex-1">
          <SectionEyebrow index={16} label={sectionNavLabel(16)} />
          <h2 className="os-section-h2">RECUERDOS DISEÑADOS PARA QUEDARSE</h2>
        </div>
      </div>

      <div className="border-b-2 border-black p-6 sm:p-8 lg:p-10 xl:p-12">
        <p className="os-pull max-w-4xl">Los Momentos WOW no son actividades sueltas.</p>
        <p className="os-slice mt-4 max-w-4xl border-l-2 border-[var(--os-orange)] pl-5 font-black text-black sm:pl-6 sm:text-lg lg:text-xl">
          Son escenas creadas para provocar impacto emocional, pertenencia y conexión real.
        </p>
      </div>

      {/* Lista de Momentos WOW */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Columna 1 */}
        <div className="space-y-8 border-b-2 border-black p-6 sm:p-8 lg:border-b-0 lg:border-r-2 lg:p-10 xl:p-12">
          <div className="relative border-l-2 border-[var(--os-cyan)] pl-5 sm:pl-6">
            <div className="absolute -left-1 top-0 -translate-x-full pr-2 text-2xl font-black os-asterisk-deco sm:text-3xl lg:text-4xl">
              *
            </div>
            <h3 className="font-black uppercase tracking-tight text-[var(--os-navy)] text-lg sm:text-xl lg:text-2xl xl:text-3xl">
              EL PACTO
            </h3>
          </div>

          <div className="relative border-l-2 border-[var(--os-cyan)] pl-5 sm:pl-6">
            <div className="absolute -left-1 top-0 -translate-x-full pr-2 text-2xl font-black os-asterisk-deco sm:text-3xl lg:text-4xl">
              *
            </div>
            <h3 className="font-black uppercase tracking-tight text-[var(--os-navy)] text-lg sm:text-xl lg:text-2xl xl:text-3xl">
              VHS PARTY
            </h3>
          </div>

          <div className="relative border-l-2 border-[var(--os-cyan)] pl-5 sm:pl-6">
            <div className="absolute -left-1 top-0 -translate-x-full pr-2 text-2xl font-black os-asterisk-deco sm:text-3xl lg:text-4xl">
              *
            </div>
            <h3 className="font-black uppercase tracking-tight text-[var(--os-navy)] text-lg sm:text-xl lg:text-2xl xl:text-3xl">
              MTV UNPLUGGED
            </h3>
          </div>

          <div className="relative border-l-2 border-[var(--os-cyan)] pl-5 sm:pl-6">
            <div className="absolute -left-1 top-0 -translate-x-full pr-2 text-2xl font-black os-asterisk-deco sm:text-3xl lg:text-4xl">
              *
            </div>
            <h3 className="font-black uppercase tracking-tight text-[var(--os-navy)] text-lg sm:text-xl lg:text-2xl xl:text-3xl">
              MSN EN LÍNEA
            </h3>
          </div>
        </div>

        <div className="space-y-8 p-6 sm:p-8 lg:p-10 xl:p-12">
          <div className="relative border-l-2 border-[var(--os-orange)] pl-5 sm:pl-6">
            <div className="absolute -left-1 top-0 -translate-x-full pr-2 text-2xl font-black os-asterisk-deco sm:text-3xl lg:text-4xl">
              *
            </div>
            <h3 className="font-black uppercase tracking-tight text-[var(--os-navy)] text-lg sm:text-xl lg:text-2xl xl:text-3xl">
              LA TARDE DE LOS SÍ
            </h3>
          </div>

          <div className="relative border-l-2 border-[var(--os-orange)] pl-5 sm:pl-6">
            <div className="absolute -left-1 top-0 -translate-x-full pr-2 text-2xl font-black os-asterisk-deco sm:text-3xl lg:text-4xl">
              *
            </div>
            <h3 className="font-black uppercase tracking-tight text-[var(--os-navy)] text-lg sm:text-xl lg:text-2xl xl:text-3xl">
              FOGÓN DEL SUR
            </h3>
          </div>

          <div className="relative border-l-2 border-[var(--os-orange)] pl-5 sm:pl-6">
            <div className="absolute -left-1 top-0 -translate-x-full pr-2 text-2xl font-black os-asterisk-deco sm:text-3xl lg:text-4xl">
              *
            </div>
            <h3 className="font-black uppercase tracking-tight text-[var(--os-navy)] text-lg sm:text-xl lg:text-2xl xl:text-3xl">
              GRADUADOS
            </h3>
          </div>

          <div className="relative border-l-2 border-[var(--os-orange)] pl-5 sm:pl-6">
            <div className="absolute -left-1 top-0 -translate-x-full pr-2 text-2xl font-black os-asterisk-deco sm:text-3xl lg:text-4xl">
              *
            </div>
            <h3 className="font-black uppercase tracking-tight text-[var(--os-navy)] text-lg sm:text-xl lg:text-2xl xl:text-3xl">
              CENA DE VELAS
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
