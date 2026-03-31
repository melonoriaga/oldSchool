import { sectionNavLabel } from '../siteNav';
import { OldSchoolWord } from './OldSchoolWord';
import { SectionEyebrow } from './SectionEyebrow';
import sec16img1d from '@/assets/imageBySections/Section16/OldSchool-IMG-Sec16-Desktop1.jpg';
import sec16img1m from '@/assets/imageBySections/Section16/OldSchool-IMG-Sec16-Mobile1.jpg';
import sec16img2d from '@/assets/imageBySections/Section16/OldSchool-IMG-Sec16-Desktop2.jpg';
import sec16img2m from '@/assets/imageBySections/Section16/OldSchool-IMG-Sec16-Mobile2.jpg';
import sec16img3d from '@/assets/imageBySections/Section16/OldSchool-IMG-Sec16-Desktop3.jpg';
import sec16img3m from '@/assets/imageBySections/Section16/OldSchool-IMG-Sec16-Mobile3.jpg';

export function Section16() {

  return (
    <div id="sec-16" data-os-read-marker className="os-surface border-x-4 border-b-4 border-black">
      <div className="os-section-head-row">
        <div className="max-w-3xl min-w-0 flex-1">
          <SectionEyebrow index={14} label={sectionNavLabel(16)} />
          <h2 className="os-section-h2">
            LAS EXCURSIONES<br />QUE HICIERON<br />HISTORIA
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 border-b-2 border-black lg:grid-cols-12">
        <aside className="flex flex-col justify-center border-b-2 border-black bg-black/[0.02] p-6 sm:p-8 lg:col-span-4 lg:border-b-0 lg:border-r-2 lg:p-10 xl:p-12">
          <p className="os-section-title mb-2 text-[0.65rem] text-[var(--os-navy)] sm:text-xs">MISMA ENERGÍA</p>
          <p className="text-sm font-black uppercase tracking-widest text-black/50">
            <OldSchoolWord registered={false} /> Edition
          </p>
        </aside>
        <div className="p-6 sm:p-8 lg:col-span-8 lg:p-10 xl:p-12">
          <p className="os-pull max-w-3xl">
            La misma alegría.<br />
            La misma sorpresa.<br />
            Pero en versión <OldSchoolWord registered={false} />.
          </p>
        </div>
      </div>

      {/* Excursion 1: City Hall, Chico & Punto */}
      <div className="border-b-2 border-black">
        <div className="grid grid-cols-1 items-stretch lg:grid-cols-[1fr_2fr]">
          <div

            className="os-grid-cover-cell border-b-2 border-black lg:border-b-0 lg:border-r-2"
          >
            <picture>
              <source media="(min-width: 1024px)" srcSet={sec16img1d} />
              <img src={sec16img1m} alt="Circuito Chico Bariloche" className="os-grid-cover-img" />
            </picture>
          </div>
          <div className="p-6 sm:p-8 lg:p-10 xl:p-12">
            <div className="border-l-2 border-[var(--os-orange)] pl-5 sm:pl-6">
            <h3 className="mb-2 font-black uppercase tracking-tight text-[var(--os-navy)] text-xl sm:text-2xl lg:text-3xl xl:text-4xl">
              City Hall, Chico & Punto
            </h3>
            <div className="space-y-4 text-base leading-relaxed lg:text-lg xl:text-xl">
              <p>La primera gran señal de que ya llegaste.</p>
              <p>Centro Cívico, activación de grupo, búsqueda del tesoro y después Circuito Chico entre lagos, bosques y curvas de postal.</p>
              <p className="font-black text-lg lg:text-xl xl:text-2xl">El cierre en Punto Panorámico pega en el pecho.</p>
              <p>Ahí sale una de las fotos más legendarias del viaje.</p>
            </div>
            </div>
          </div>
        </div>
      </div>

      {/* Excursion 2: Día de Campo */}
      <div className="border-b-2 border-black">
        <div className="grid grid-cols-1 items-stretch lg:grid-cols-[2fr_1fr]">
          <div className="border-b-2 border-black p-6 sm:p-8 lg:border-b-0 lg:border-r-2 lg:p-10 xl:p-12">
            <div className="border-l-2 border-[var(--os-orange)] pl-5 sm:pl-6">
            <h3 className="mb-2 font-black uppercase tracking-tight text-[var(--os-navy)] text-xl sm:text-2xl lg:text-3xl xl:text-4xl">
              Día de Campo
            </h3>
            <div className="space-y-4 text-base leading-relaxed lg:text-lg xl:text-xl">
              <p>Cabalgatas, juegos, competencias grupales y asado libre al pie de la montaña.</p>
              <p className="font-black text-lg lg:text-xl xl:text-2xl">Y cuando parece que el día terminó, lo cerramos con sunset cervecero y show en vivo.</p>
            </div>
            </div>
          </div>
          <div className="os-grid-cover-cell">
            <picture>
              <source media="(min-width: 1024px)" srcSet={sec16img2d} />
              <img src={sec16img2m} alt="Día de Campo Old School" className="os-grid-cover-img" />
            </picture>
          </div>
        </div>
      </div>

      {/* Excursion 3: Old School Festival */}
      <div className="border-b-2 border-black p-6 sm:p-8 lg:p-10 xl:p-12">
        <div className="max-w-4xl">
          <div className="border-l-2 border-[var(--os-cyan)] pl-5 sm:pl-6">
          <h3 className="mb-2 font-black uppercase tracking-tight text-[var(--os-navy)] text-xl sm:text-2xl lg:text-3xl xl:text-4xl">
            <OldSchoolWord uppercase /> Festival
          </h3>
          <div className="space-y-4 text-base leading-relaxed lg:text-lg xl:text-xl">
            <p className="font-black text-lg lg:text-xl xl:text-2xl">No es un show más.<br />Es un ritual colectivo en el bosque.</p>
            <p>Propuesta gastronómica de montaña, pileta climatizada convertida en discoteca, fiesta de la espuma, DJs en vivo, happy hours, <OldSchoolWord registered={false} /> Rock y cierre con Sunset We Color.</p>
          </div>
          </div>
        </div>
      </div>

      {/* Excursion 4: Trineos */}
      <div className="border-b-2 border-black p-6 sm:p-8 lg:p-10 xl:p-12">
        <div className="max-w-4xl">
          <div className="border-l-2 border-[var(--os-orange)] pl-5 sm:pl-6">
          <h3 className="mb-2 font-black uppercase tracking-tight text-[var(--os-navy)] text-xl sm:text-2xl lg:text-3xl xl:text-4xl">
            Trineos Patagonia 360
          </h3>
          <div className="space-y-4 text-base leading-relaxed lg:text-lg xl:text-xl">
            <p className="font-black">Adrenalina segura.</p>
            <p>Aerosilla, charla rápida de seguridad, circuito armado, risas, montaña y diversión real.</p>
            <p className="font-black text-lg lg:text-xl xl:text-2xl">Te subís al trineo… y arranca la bajada.</p>
          </div>
          </div>
        </div>
      </div>

      {/* Excursion 5: Cerro Catedral */}
      <div>
        <div className="grid grid-cols-1 items-stretch lg:grid-cols-2">
          <div

            className="os-grid-cover-cell border-b-2 border-black lg:border-b-0 lg:border-r-2"
          >
            <picture>
              <source media="(min-width: 1024px)" srcSet={sec16img3d} />
              <img src={sec16img3m} alt="Cerro Catedral Bariloche" className="os-grid-cover-img" />
            </picture>
          </div>
          <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10 xl:p-12">
            <div className="border-l-2 border-black pl-5 sm:pl-6">
            <h3 className="mb-2 font-black uppercase tracking-tight text-[var(--os-navy)] text-xl sm:text-2xl lg:text-3xl xl:text-4xl">
              Cerro Catedral & Gruta Virgen de las Nieves
            </h3>
            <div className="space-y-4 text-base leading-relaxed lg:text-lg xl:text-xl">
              <p className="font-black text-lg lg:text-xl xl:text-2xl">El día que te queda para siempre.</p>
              <p>Montaña, nieve, aire helado en la cara y el grupo viviendo algo enorme.</p>
              <p>Miradores, tiempo para recorrer, ski & snowboard con instructores y pases.</p>
              <p>Y para los más cancheros todavía: After Snow con gastronomía y música en vivo en el parador exclusivo de <OldSchoolWord registered={false} />.</p>
              <p className="pt-4 font-black text-xl lg:text-2xl xl:text-3xl">No es para todos.<br />Es para nosotros.</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
