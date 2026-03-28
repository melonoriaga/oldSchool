import { OldSchoolWord } from './OldSchoolWord';
import sec4d from '@/assets/imageBySections/Section04/OldSchool-IMG-Sec4-Desktop1.jpg';
import sec4m from '@/assets/imageBySections/Section04/OldSchool-IMG-Sec4-Mobile1.jpg';

export function Section04() {

  return (
    <div data-os-read-marker className="os-surface border-x-4 border-b-4 border-black">
      <div className="os-section-head-row">
        <div className="max-w-3xl">
          <p className="os-section-kicker">REGRESO + ANTES / DESPUÉS</p>
          <h2 className="os-section-h2">
            VOLVÉS<br />DISTINTO
          </h2>
        </div>
        <div className="os-brutal-num self-end sm:self-start">
          04
        </div>
      </div>

      <div className="grid grid-cols-1 items-stretch lg:grid-cols-2">
        <div

          className="os-grid-cover-cell border-b-4 border-black lg:border-b-0 lg:border-r-4"
        >
          <picture>
            <source media="(min-width: 1024px)" srcSet={sec4d} />
            <img src={sec4m} alt="Bariloche" className="os-grid-cover-img" />
          </picture>
        </div>

        <div className="relative flex flex-col justify-center space-y-5 p-6 sm:p-8 lg:p-10 xl:p-12">
          <div className="os-asterisk-deco absolute right-6 top-6 text-5xl font-black lg:right-8 lg:top-8 lg:text-7xl">
            *
          </div>

          <p className="os-slice max-w-2xl pr-10">
            Hay una etapa de la vida en la que todo parecía más simple:
            <br />
            el grupo, la música, la noche, el frío en la cara, la sensación de &quot;estoy acá y esto importa&quot;.
          </p>

          <p className="os-slice max-w-2xl text-black/88">
            Después llegaron responsabilidades, agenda, familia, trabajo.
            <br />
            Y aunque todo eso tenga valor, a veces aparece una pregunta silenciosa:
            <br />
            <span className="mt-2 inline-block font-black text-black sm:text-lg">
              ¿En qué momento me dejé para después?
            </span>
          </p>

          <p className="os-pull max-w-2xl border-l-4 border-[var(--os-cyan)] pl-4 sm:pl-5">
            <OldSchoolWord /> nació para eso.
          </p>

          <p className="os-slice max-w-2xl">
            Para que no tengas que esperar a que algún día se dé.
          </p>

          <p className="os-slice max-w-2xl">
            Volvemos a Bariloche con producción premium, estética retro, rituales y Momentos WOW diseñados para que no seas espectador: seas protagonista.
          </p>

          <p className="os-pull max-w-2xl pt-1 text-base sm:text-lg lg:text-xl">
            No es un viaje convencional.
            <br />
            Es un antes y un después.
          </p>

          <p

            className="os-section-title max-w-2xl border-l-4 border-black pl-4 pt-3 text-sm sm:text-base lg:text-lg"
          >
            Porque no volvés con fotos nada más.
            <br />
            Volvés con algo interno.
            <br />
            Volvés distinto.
          </p>
        </div>
      </div>
    </div>
  );
}
