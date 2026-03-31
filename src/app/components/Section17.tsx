import { sectionNavLabel } from '../siteNav';
import { SectionEyebrow } from './SectionEyebrow';
import sec17d from '@/assets/imageBySections/Section17/OldSchool-IMG-Sec17-Desktop1.jpg';
import sec17m from '@/assets/imageBySections/Section17/OldSchool-IMG-Sec17-Mobile1.jpg';

/** Misma escala de padding que bloques editoriales en papel (cf. Section07 celda 10). */
const paperPad = 'relative border-b-2 border-black p-8 sm:p-10 lg:p-12 xl:p-16';

export function Section17() {
  return (
    <div
      id="sec-17"
      data-os-read-marker
      className="os-surface border-x-4 border-b-4 border-black"
    >
      <div className="os-section-head-row os-section-head--navy">
        <div className="max-w-3xl min-w-0 flex-1">
          <SectionEyebrow index={17} label={sectionNavLabel(17)} tone="light" />
          <h2 className="os-section-h2">
            VOLVEMOS A DONDE
            <br />
            LA MÚSICA LO
            <br />
            ACOMODABA TODO
            <br />
            DONDE TODO EXPLOTA
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 items-stretch border-b-2 border-black lg:grid-cols-[2fr_1fr]">
        <div className={`${paperPad} border-b-2 border-black lg:border-b-0 lg:border-r-2`}>
          <p className="os-body max-w-2xl lg:max-w-none">
            Visitamos las discotecas icónicas de Bariloche y revivimos la energía del viaje de
            egresados en versión <span className="font-black">Retro Premium</span>: hits 80/90/2000,
            puesta cinematográfica y noches pensadas para que el grupo se suelte, se ría y se lleve
            recuerdos reales.
          </p>
        </div>
        <div className="os-grid-cover-cell">
          <picture>
            <source media="(min-width: 1024px)" srcSet={sec17d} />
            <img src={sec17m} alt="Noche Old School Bariloche" className="os-grid-cover-img" />
          </picture>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className={`${paperPad} border-b-2 lg:border-r-2`}>
          <div className="os-asterisk-deco absolute right-8 top-8 text-4xl font-black">*</div>
          <div className="os-brutal-num-sub mb-4">17.01</div>
          <h3 className="os-section-title mb-3 text-sm lg:text-base">Fiesta de Disfraces</h3>
          <div className="max-w-2xl space-y-3 border-l-2 border-[var(--os-cyan)] pl-5 lg:max-w-none lg:pl-6">
            <div className="space-y-3 os-body">
              <p>Disfraces, personajes, música, pasarela, desafíos y premios.</p>
              <p>Una noche para soltarse y reírse sin filtro.</p>
              <p className="os-body-strong font-black">Código de Vestimenta: Disfraces.</p>
            </div>
          </div>
        </div>

        <div className={`${paperPad}`}>
          <div className="os-asterisk-deco absolute right-8 top-8 text-4xl font-black">*</div>
          <div className="os-brutal-num-sub mb-4">17.02</div>
          <h3 className="os-section-title mb-3 text-sm lg:text-base">Fiesta Colegial</h3>
          <div className="space-y-3 border-l-2 border-black pl-5 lg:pl-6">
            <div className="space-y-3 os-body">
              <p>
                La fiesta del estudiante convertida en una de las noches más esperadas del viaje.
              </p>
              <p>DJ en vivo, luces, hits y energía de egresados desde que entrás.</p>
              <p className="os-body-strong font-black">Código de Vestimenta: Estudiantil Retro.</p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="os-band-orange relative border-b-2 border-black p-8 sm:p-10 lg:p-12 xl:p-16"
      >
        <div className="os-asterisk-deco absolute right-8 top-8 text-4xl">*</div>
        <div className="os-brutal-num-sub mb-4">17.03</div>
        <h3 className="os-section-title mb-3 text-sm lg:text-base">
          Fiesta del Semáforo & Color Crush
        </h3>
        <div className="max-w-4xl space-y-3">
          <p className="os-body-strong font-black">Dos conceptos en una noche.</p>
          <p className="os-body">Primero el código. Después la vibra.</p>
          <p className="os-body">Una propuesta pensada para conectar de verdad.</p>
          <p className="os-body pt-3">
            <span className="font-black">Semáforo:</span> cada color representa un mood, un deseo,
            una intención.
            <br />
            Código de vestimenta: tu estado civil.
          </p>
          <p className="os-body">
            <span className="font-black">Color Crush:</span> entrás con un color, jugás con una
            vibra y dejás que la noche haga el resto.
            <br />
            Código de vestimenta: tu vibra romántica.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div
          className="os-band-cyan relative border-b-2 border-black p-8 sm:p-10 lg:border-r-2 lg:border-b-0 lg:p-12 xl:p-16"
        >
          <div className="os-asterisk-deco absolute right-8 top-8 text-4xl font-black">*</div>
          <div className="os-brutal-num-sub mb-4">17.04</div>
          <h3 className="os-section-title mb-3 text-sm lg:text-base">Super Retro Show</h3>
          <div className="space-y-3 os-body">
            <p className="os-body-strong font-black">Fiesta temática inmersiva.</p>
            <p>
              Neón, pantallas VHS, guiños a los 80/90/2000, show en vivo, Momento Generación y
              Clímax Colectivo.
            </p>
            <p className="os-body-strong font-black text-sm sm:text-base">
              No es nostalgia pasiva.
              <br />
              Es volver a entrar en una versión tuya que seguía intacta.
            </p>
            <p className="os-body-strong font-black">Código de Vestimenta: Retro.</p>
          </div>
        </div>

        <div className={`${paperPad} border-b-0`}>
          <div className="os-asterisk-deco absolute right-8 top-8 text-4xl font-black">*</div>
          <div className="os-brutal-num-sub mb-4">17.05</div>
          <h3 className="os-section-title mb-3 text-sm lg:text-base">EVENTOS ESPECIALES</h3>
          <div className="space-y-3 border-l-2 border-[var(--os-orange)] pl-5 lg:pl-6">
            <div className="space-y-3 os-body">
              <p>
                Conducción en vivo, tribunas, desafíos, karaoke y juegos que te hacen gritar de
                risa.
              </p>
              <p className="os-body-strong font-black">
                Si te animás, te convertís en protagonista.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
