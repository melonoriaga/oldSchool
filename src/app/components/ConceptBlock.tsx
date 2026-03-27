
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ConceptBlock() {

  return (
    <div id="concepto" className="os-surface border-x-4 border-b-4 border-black">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left - Content */}
        <div className="p-8 lg:p-20 flex flex-col justify-center space-y-8 border-b-4 lg:border-b-0 lg:border-r-4 border-black relative">
          <div className="os-spin-slow absolute top-8 left-8 text-5xl font-black opacity-20 hidden lg:block">
            *
          </div>
          <div className="space-y-6">
            <p className="text-2xl lg:text-3xl font-bold leading-tight">
              Esto no es un paquete turístico.<br />
              No es una escapada.
            </p>
            
            <p className="text-xl lg:text-2xl leading-relaxed">
              Es volver a ese momento que nunca se repitió.
            </p>
            
            <p className="text-xl lg:text-2xl leading-relaxed">
              Es reencontrarte con quienes fuiste.<br />
              Y con quienes lo vivieron con vos.
            </p>
          </div>

          <div className="pt-8">
            <div className="text-6xl lg:text-8xl font-black">*</div>
          </div>
        </div>

        {/* Right - Image */}
        <div className="relative h-[50vh] lg:h-[70vh]">
          <ImageWithFallback

            src="https://images.unsplash.com/photo-1757143137392-0b1e1a27a7de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub3N0YWxnaWMlMjBzY2hvb2wlMjBncmFkdWF0aW9uJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzczNzk4NzI5fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Concepto"
            className="w-full h-full object-cover grayscale"
          />
        </div>
      </div>
    </div>
  );
}