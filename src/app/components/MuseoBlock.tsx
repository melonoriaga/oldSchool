import { OldSchoolWord } from './OldSchoolWord';
import museod from '@/assets/imageBySections/Section25/OldSchool-IMG-SecMuseo-Desktop1.jpg';
import museom from '@/assets/imageBySections/Section25/OldSchool-IMG-SecMuseo-Mobile1.jpg';

export function MuseoBlock() {

  return (
    <div id="museo" className="os-surface border-x-4 border-b-4 border-black">
      <div className="grid grid-cols-1 lg:grid-cols-5">
        {/* Left - Number and Title */}
        <div className="lg:col-span-2 p-8 lg:p-16 flex flex-col justify-center space-y-8 border-b-4 lg:border-b-0 lg:border-r-4 border-black relative">
          <div className="os-spin-slow absolute top-8 right-8 text-5xl font-black opacity-25">
            *
          </div>
          <div className="text-[8rem] font-black leading-none">
            25
          </div>

          <h2 className="text-4xl lg:text-5xl font-black leading-tight">
            MUSEO
            <br />
            <OldSchoolWord uppercase registered={false} />
          </h2>

          <p

            className="text-2xl lg:text-3xl leading-relaxed"
          >
            Fotos, recuerdos,
            <br />
            objetos, historias.
          </p>

          <p className="text-xl leading-relaxed">
            Todo lo que alguna vez guardaste…
            <br />
            <strong className="font-bold">vuelve a tener sentido.</strong>
          </p>
        </div>

        {/* Right - Image */}
        <div className="lg:col-span-3 relative h-[50vh] lg:h-[70vh]">
          <picture>
            <source media="(min-width: 1024px)" srcSet={museod} />
            <img src={museom} alt="Museo Old School" className="w-full h-full object-cover" />
          </picture>

          <div className="absolute top-8 left-8 text-6xl font-black opacity-20">
            *
          </div>

          {/* Overlay Text */}
          <div

            className="absolute bottom-0 right-0 os-surface p-6 border-t-4 border-l-4 border-black max-w-md"
          >
            <p className="text-sm leading-relaxed">
              Un espacio dedicado a revivir los recuerdos de aquella época. Traé tus fotos, tus
              historias, tus objetos guardados.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
