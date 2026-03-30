

export function ManifestoBlock() {

  return (
    <div id="manifiesto" className="os-surface border-x-4 border-b-4 border-black">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {/* Left - Number */}
        <div className="border-b-2 lg:border-b-0 lg:border-r-2 border-black p-8 lg:p-16 flex items-center justify-center relative">
          <div className="text-[8rem] lg:text-[12rem] font-black leading-none">
            02
          </div>
          <div className="os-spin-slow absolute top-8 right-8 text-5xl font-black opacity-30">
            *
          </div>
        </div>

        {/* Center - Title */}
        <div className="border-b-2 lg:border-b-0 lg:border-r-2 border-black p-8 lg:p-16 flex items-center">
          <h2 className="text-4xl lg:text-6xl font-black leading-tight">
            EL MOMENTO QUE NUNCA SE REPITIÓ
          </h2>
        </div>

        {/* Right - Content */}
        <div className="p-8 lg:p-16 flex flex-col justify-center space-y-6">
          <p className="text-lg leading-relaxed">
            Hubo un tiempo en el que éramos más livianos.
            Más impulsivos. Más amigos. <strong>Más nosotros.</strong>
          </p>
          <p className="text-lg leading-relaxed">
            Y hubo un momento que quedó guardado para siempre.
          </p>
          <p className="text-lg leading-relaxed">
            La vida siguió.
          </p>
          <p className="text-lg leading-relaxed">
            Pero hay promesas que no.
          </p>
          <p className="text-lg leading-relaxed">
            Durante años lo dijimos.
          </p>
          <p className="text-2xl font-bold">
            Hasta ahora.
          </p>
        </div>
      </div>
    </div>
  );
}