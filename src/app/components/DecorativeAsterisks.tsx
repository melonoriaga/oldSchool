

export function DecorativeAsterisks() {

  return (
    <>
      {/* Asterisco superior izquierdo */}
      <div

        className="fixed top-32 left-8 z-30 pointer-events-none hidden lg:block"
      >
        <div className="text-7xl font-black opacity-15 text-black">*</div>
      </div>

      {/* Asterisco superior derecho (más abajo) */}
      <div

        className="fixed top-[40vh] right-24 z-30 pointer-events-none hidden lg:block"
      >
        <div className="text-9xl font-black opacity-10 text-black">*</div>
      </div>

      {/* Asterisco medio izquierdo */}
      <div
        className="fixed top-[60vh] left-16 z-30 pointer-events-none hidden lg:block"
      >
        <div className="text-6xl font-black opacity-20 text-black">*</div>
      </div>

      {/* Asterisco medio centro */}
      <div
        className="fixed top-[75vh] left-1/2 -translate-x-1/2 z-30 pointer-events-none hidden lg:block"
      >
        <div className="text-8xl font-black opacity-12 text-black">*</div>
      </div>

      {/* Asterisco inferior derecho */}
      <div
        className="fixed bottom-32 right-12 z-30 pointer-events-none hidden lg:block"
      >
        <div className="text-7xl font-black opacity-18 text-black">*</div>
      </div>
    </>
  );
}
