
import { ImageWithFallback } from './figma/ImageWithFallback';

export function CommunityBlock() {

  return (
    <div id="comunidad" className="bg-black text-white border-x-4 border-b-4 border-black">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left - Content */}
        <div className="p-8 lg:p-20 flex flex-col justify-center space-y-12 border-b-2 lg:border-b-0 lg:border-r-2 border-white">
          <div className="text-[8rem] lg:text-[12rem] font-black leading-none">
            05
          </div>

          <div className="space-y-8">
            <h2 className="text-4xl lg:text-6xl font-black leading-tight">
              NO ESTÁS SOLO
            </h2>

            <p className="text-2xl lg:text-3xl leading-relaxed">
              Somos miles los que alguna vez dijimos:<br />
              <strong className="font-black">"tenemos que volver".</strong>
            </p>

            <p className="text-3xl lg:text-4xl font-bold">
              Hoy, ese momento llegó.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-6xl font-black">*</div>
            <div className="text-6xl font-black">*</div>
            <div className="text-6xl font-black">*</div>
          </div>
        </div>

        {/* Right - Image */}
        <div className="relative h-[50vh] lg:h-[80vh]">
          <ImageWithFallback

            src="https://images.unsplash.com/photo-1576149324567-4fd5627ee73d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbW90aW9uYWwlMjByZXVuaW9uJTIwZnJpZW5kcyUyMHRvZ2V0aGVyfGVufDF8fHx8MTc3Mzc5ODczMXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Comunidad"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}