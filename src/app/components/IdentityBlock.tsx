
import { ImageWithFallback } from './figma/ImageWithFallback';
import { RegresadosWord } from './RegresadosWord';

export function IdentityBlock() {

  return (
    <div id="identidad" className="os-surface border-x-4 border-b-4 border-black">
      {/* Top Section with Number */}
      <div className="border-b-2 border-black p-8 lg:p-16 flex items-center justify-between relative">
        <h2 className="text-3xl lg:text-5xl font-black max-w-2xl leading-tight">
          PROMO <RegresadosWord variant="split" className="align-[0.01em]" /> 2026<br />
          PRIMERA EDICIÓN
        </h2>
        <div className="text-[6rem] lg:text-[10rem] font-black leading-none hidden lg:block">
          03
        </div>
        <div className="os-spin-slow absolute bottom-8 left-1/2 translate-x-[-50%] text-6xl font-black opacity-20 lg:left-1/3 lg:translate-x-0">
          *
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {/* Image */}
        <div className="relative h-[40vh] lg:h-[60vh] border-b-2 lg:border-b-0 lg:border-r-2 border-black">
          <ImageWithFallback

            src="https://images.unsplash.com/photo-1770564512491-e88eb93d48a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHBlb3BsZSUyMGFkdmVudHVyZSUyMGFjdGl2aXR5fGVufDF8fHx8MTc3Mzc5ODczMHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Nueva generación"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="lg:col-span-2 p-8 lg:p-16 flex flex-col justify-center space-y-8">
          <p className="text-2xl lg:text-4xl font-bold leading-tight">
            Una nueva generación empieza.
          </p>
          
          <p className="text-xl lg:text-2xl leading-relaxed">
            No de egresados.<br />
            <strong>De <RegresadosWord variant="split" />.</strong>
          </p>
          
          <p className="text-xl lg:text-2xl leading-relaxed">
            Personas que deciden volver.
          </p>

          <div className="pt-6">
            <div className="inline-block px-6 py-3 border-2 border-black">
              <p className="text-sm font-bold tracking-widest">
                MARZO 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}