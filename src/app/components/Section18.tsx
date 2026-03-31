import { sectionNavLabel } from '../siteNav';
import { RegresadosWord } from './RegresadosWord';
import { SectionEyebrow } from './SectionEyebrow';

export function Section18() {

  const testimonios = [
    {
      texto: 'Fue el mejor viaje de mi vida y nunca volvimos a estar todos juntos así.',
      autor: 'Martín, 31 años',
    },
    {
      texto: 'Pasaron 15 años y todavía me acuerdo de cada momento. Tenemos que volver.',
      autor: 'Laura, 34 años',
    },
    {
      texto: 'Lo prometimos mil veces. Ahora es el momento de cumplirlo.',
      autor: 'Diego, 38 años',
    },
    {
      texto: 'Esa semana me cambió la vida. Ojalá pudiera vivirla de nuevo.',
      autor: 'Sofía, 40 años',
    },
    {
      texto: 'Los mejores recuerdos de mi vida están en ese viaje. Quiero más.',
      autor: 'Juan, 44 años',
    },
    {
      texto: 'Nunca más reímos tanto. Necesitamos un reencuentro ya.',
      autor: 'Carolina, 43 años',
    },
    {
      texto: 'Fue épico. Cada foto me hace sonreír. Volvamos.',
      autor: 'Matías, 45 años',
    },
    {
      texto: 'No pensé que esto me iba a pasar: en dos días me sentí otra vez en mi viaje.',
      autor: 'Rocío, 47 años',
    },
    {
      texto: 'No fue solo diversión. Me volvió una energía que creía apagada.',
      autor: 'Nicolás, 52 años',
    },
    {
      texto: 'Volvimos como grupo y nos fuimos más unidos que antes.',
      autor: 'Paula, 54 años',
    },
  ];

  return (
    <div id="testimonios" data-os-read-marker className="os-surface border-x-4 border-b-4 border-black">
      <div className="border-b-2 border-black p-8 lg:p-16 bg-[color-mix(in_srgb,var(--os-cyan)_8%,var(--os-paper))]">
        <div className="min-w-0">
          <SectionEyebrow index={18} label={sectionNavLabel(18)} />
          <h2 className="text-3xl font-black lg:text-5xl">
            LOS <RegresadosWord variant="split" className="align-[0.02em]" /> DICEN
          </h2>
          <p className="mt-2 text-xs font-black uppercase tracking-[0.14em] text-[var(--os-navy)] sm:text-sm">
            &quot;No pensé que esto me iba a pasar&quot;
          </p>
        </div>
      </div>

      <div className="overflow-hidden bg-[color-mix(in_srgb,var(--os-orange)_5%,var(--os-paper))]">
        <div className="os-testimonios-marquee-track flex w-max gap-0">
          {[0, 1].map((copyIdx) => (
            <div key={copyIdx} className="marquee-content flex shrink-0 gap-0">
            {testimonios.map((testimonio, index) => (
              <div
                key={`${copyIdx}-${index}-${testimonio.autor}`}
                className={`flex min-h-[300px] w-[400px] shrink-0 flex-col justify-between border-r-2 border-black p-8 lg:w-[500px] lg:p-12 ${
                  index % 3 === 0
                    ? 'bg-[color-mix(in_srgb,var(--os-orange)_9%,var(--os-paper))]'
                    : index % 3 === 1
                      ? 'bg-[color-mix(in_srgb,var(--os-cyan)_10%,var(--os-paper))]'
                      : 'bg-[color-mix(in_srgb,var(--os-navy)_6%,var(--os-paper))]'
                }`}
              >
                <div>
                  <div className="mb-6 text-4xl font-black text-[var(--os-orange)]">"</div>
                  <p className="mb-6 text-xl leading-relaxed lg:text-2xl text-black">{testimonio.texto}</p>
                </div>
                <p className="text-sm font-bold uppercase tracking-widest text-[var(--os-navy)]">— {testimonio.autor}</p>
              </div>
            ))}
            </div>
          ))}
          </div>
      </div>
    </div>
  );
}
