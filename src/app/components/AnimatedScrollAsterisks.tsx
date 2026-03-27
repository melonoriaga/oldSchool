

export function AnimatedScrollAsterisks() {

  return (
    <>
      {/* Asterisco 1: Hero → Manifiesto */}
      <div

        className="fixed right-[5%] top-[15vh] z-30 pointer-events-none"
        style={{ willChange: 'transform, opacity' }}
      >
        <div className="text-9xl lg:text-[12rem] font-black text-black">*</div>
      </div>

      {/* Asterisco 2: Manifiesto → Concepto */}
      <div

        className="fixed left-[10%] top-[25vh] z-30 pointer-events-none"
        style={{ willChange: 'transform, opacity' }}
      >
        <div className="text-8xl lg:text-[10rem] font-black text-black">*</div>
      </div>

      {/* Asterisco 3: Concepto → Producto */}
      <div
        className="fixed right-[20%] top-[35vh] z-30 pointer-events-none"
        style={{ willChange: 'transform, opacity' }}
      >
        <div className="text-[10rem] lg:text-[14rem] font-black text-black">*</div>
      </div>

      {/* Asterisco 4: Producto → Comunidad */}
      <div
        className="fixed left-[15%] top-[45vh] z-30 pointer-events-none"
        style={{ willChange: 'transform, opacity' }}
      >
        <div className="text-9xl lg:text-[11rem] font-black text-black">*</div>
      </div>

      {/* Asterisco 5: Comunidad → Museo */}
      <div
        className="fixed right-[12%] top-[55vh] z-30 pointer-events-none"
        style={{ willChange: 'transform, opacity' }}
      >
        <div className="text-8xl lg:text-[10rem] font-black text-black">*</div>
      </div>

      {/* Asterisco 6: Museo → Postulación */}
      <div
        className="fixed left-[25%] top-[65vh] z-30 pointer-events-none"
        style={{ willChange: 'transform, opacity' }}
      >
        <div className="text-9xl lg:text-[12rem] font-black text-black">*</div>
      </div>

      {/* Asterisco 7: Siempre visible, lateral */}
      <div
        className="fixed left-[5%] top-[10vh] z-25 pointer-events-none hidden lg:block"
        style={{ willChange: 'transform, opacity' }}
      >
        <div className="text-7xl font-black text-black opacity-30">*</div>
      </div>
    </>
  );
}