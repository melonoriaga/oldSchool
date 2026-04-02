import { sectionNavLabel } from '../siteNav';
import { RegresadosWord } from './RegresadosWord';
import { SectionEyebrow } from './SectionEyebrow';
import { DotGrid } from './ui/DotGrid';
import sec7img1d from '@/assets/imageBySections/Section07/OldSchool-IMG-Sec7-01-Desktop1.jpg';
import sec7img1m from '@/assets/imageBySections/Section07/OldSchool-IMG-Sec7-01-Mobile1.jpg';
import sec7img2d from '@/assets/imageBySections/Section07/OldSchool-IMG-Sec7-01-Desktop2.jpg';
import sec7img2m from '@/assets/imageBySections/Section07/OldSchool-IMG-Sec7-01-Mobile2.jpg';

export function Section06() {
  return (
    <div
      id="generaciones"
      data-os-read-marker
      className="os-surface border-x-4 border-b-4 border-black"
    >
      <div className="relative flex flex-col items-start justify-between gap-5 border-b-2 border-black p-5 sm:gap-6 sm:p-8 lg:flex-row lg:items-start lg:p-16">
        <div className="max-w-3xl min-w-0 flex-1 space-y-4">
          <SectionEyebrow index={6} label={sectionNavLabel(6)} />
          <h2 className="os-section-h2">
            <RegresadosWord className="h-[0.8em] align-[-0.04em]" />
          </h2>
          <p className="font-black text-lg leading-tight sm:text-xl lg:text-3xl xl:text-4xl">
            CADA GENERACIÓN LO VIVIÓ DISTINTO,
            <br />
            PERO TODAS SINTIERON LO MISMO.
          </p>
        </div>
      </div>

      <div className="border-b-2 border-black">
        <div className="grid w-full grid-cols-1 items-stretch lg:grid-cols-[minmax(0,1fr)_minmax(260px,min(32vw,380px))]">
          <div className="relative flex min-h-[22rem] min-w-0 w-full items-center justify-center overflow-hidden border-b-2 border-black bg-[color-mix(in_srgb,var(--os-paper)_92%,var(--os-orange)_8%)] p-6 sm:min-h-[24rem] sm:p-8 lg:h-full lg:min-h-0 lg:border-b-0 lg:border-r-2 lg:p-12 xl:p-14">
            <DotGrid
              className="z-0"
              dotSize={2}
              gap={10}
              baseColor="#f5a46e"
              activeColor="#FF9A57"
              proximity={130}
              speedTrigger={70}
              shockRadius={180}
              shockStrength={3.2}
              resistance={820}
              returnDuration={1.3}
            />
            <div className="relative z-[1] mx-auto w-full max-w-prose space-y-4 text-center text-base font-medium leading-relaxed text-black sm:text-lg lg:text-xl lg:leading-relaxed">
              <p className="font-black leading-snug sm:text-xl lg:text-2xl">
                No hacemos un viaje estándar.
              </p>
              <p className="font-black leading-snug sm:text-lg lg:text-xl">
                Diseñamos la experiencia según la generación de tu Promo.
              </p>
              <p>Porque no es lo mismo haber egresado en los 80's que en los 00's.</p>
              <p>Cambió la música, cambió la forma de vincularse, cambió el código.</p>
              <p className="os-section-title border-t-2 border-[var(--os-orange)] pt-4 text-xs sm:text-base lg:text-lg">
                Pero hay algo que no cambió: lo que Bariloche dejó en cada uno.
              </p>
            </div>
          </div>
          <div className="grid min-h-[20rem] grid-rows-2 lg:h-full lg:min-h-0">
            <div className="relative min-h-[10rem] overflow-hidden border-b-2 border-black lg:min-h-0">
              <picture>
                <source media="(min-width: 1024px)" srcSet={sec7img1d} />
                <img
                  src={sec7img1m}
                  alt="Old School Regresados"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
              </picture>
            </div>
            <div className="relative min-h-[10rem] overflow-hidden lg:min-h-0">
              <picture>
                <source media="(min-width: 1024px)" srcSet={sec7img2d} />
                <img
                  src={sec7img2m}
                  alt="Old School Regresados"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 items-stretch lg:grid-cols-2">
        <div className="os-band-orange relative border-b-2 border-black p-8 lg:border-r-2 lg:p-12 xl:p-16">
          <div
            className="os-brutal-num-sub mb-4"
            style={{ display: 'inline', fontSize: '30px', letterSpacing: '-0.06em' }}
          >
            Gen Promo 80’s
          </div>

          <h3 className="os-section-title mb-3 text-base lg:text-lg">La que vivió sin filtro.</h3>

          <p
            className="os-body leading-relaxed text-sm sm:text-base lg:text-lg"
            style={{ fontSize: '16px' }}
          >
            Caseteras, Walkman, cartas, lentos y promesas.
            <br />
            Una generación con mística, códigos y amistades que todavía laten.
            <br />
            Para ellos diseñamos experiencias con espíritu auténtico, emoción real y memoria viva.
          </p>
        </div>

        <div className="os-band-cyan relative border-b-2 border-black p-8 lg:p-12 xl:p-16">
          <div
            className="os-brutal-num-sub mb-4"
            style={{ display: 'inline', fontSize: '30px', letterSpacing: '-0.06em' }}
          >
            Gen Promo 90’s
          </div>
          <h3 className="os-section-title mb-3 text-base lg:text-lg">
            La que mezcló inocencia con revolución.
          </h3>
          <p
            className="os-body leading-relaxed text-sm sm:text-base lg:text-lg"
            style={{ fontSize: '16px' }}
          >
            CD, MSN, primeras cámaras digitales, coreografías, noches eternas y amistad intensa.
            <br />
            Una generación que empezó a mostrarse al mundo, pero todavía sabía mirar a los ojos.
            <br />
            Para ellos creamos viajes con fiestas icónicas y reencuentros potentes.
          </p>
        </div>

        <div className="col-span-1 grid grid-cols-1 items-stretch border-b-2 border-black lg:col-span-2 lg:grid-cols-3">
          <div className="os-band-navy relative min-w-0 border-b-2 border-black p-8 lg:border-b-0 lg:border-r-2 lg:p-12 xl:p-16">
            <div
              className="os-brutal-num-sub mb-4 text-white"
              style={{ display: 'inline', fontSize: '30px', letterSpacing: '-0.06em' }}
            >
              Gen Promo 00’s
            </div>
            <h3 className="os-section-title mb-3 text-base lg:text-lg">La que creció conectada.</h3>
            <p
              className="os-body leading-relaxed text-sm sm:text-base lg:text-lg"
              style={{ fontSize: '16px' }}
            >
              Fotolog, Messenger, redes, primeras selfies.
              <br />
              Una generación expresiva, intensa y protagonista.
              <br />
              Para ellos armamos viajes visuales, vibrantes y con energía de estreno.
            </p>
          </div>

          <div className="relative flex min-w-0 flex-col justify-center border-b-2 border-black bg-[var(--os-paper)] p-8 lg:border-b-0 lg:border-r-2 lg:p-12 xl:p-16">
            <div
              className="os-brutal-num-sub mb-0"
              style={{ display: 'inline', fontSize: '30px', letterSpacing: '-0.06em' }}
            >
              Gen Promo 10’s
            </div>

            <h3 className="os-section-title mb-3 text-base lg:text-lg">
              La que empezó a vivir… y a mostrarse.
            </h3>
            <p
              className="os-body leading-relaxed text-sm sm:text-base lg:text-lg"
              style={{ fontSize: '16px' }}
            >
              Instagram, WhatsApp, Snapchat.
              <br />
              Viajes en tiempo real, entre lo digital y lo real.
              <br />
              Para ellos diseñamos experiencias que vuelven a activar esa intensidad.
            </p>
          </div>

          <div className="relative min-h-[14rem] min-w-0 overflow-hidden lg:min-h-0 lg:h-full">
            <picture>
              <source media="(min-width: 1024px)" srcSet={sec7img1d} />
              <img
                src={sec7img1m}
                alt="Old School Regresados"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
}
