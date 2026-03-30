import logoSticker from '@/assets/01logos/LogoStickerconReborde.png';

export function UnderConstructionPage() {
  const tapeItems = Array.from({ length: 10 }, (_, idx) => (
    <span key={idx} className="flex items-center">
      <span className="px-2.5 text-[0.58rem] font-black uppercase tracking-[0.12em] text-white sm:px-3 sm:text-xs">
        EN CONSTRUCCIÓN
      </span>
      <span className="text-[var(--os-cyan)]" aria-hidden>
        ✦
      </span>
    </span>
  ));

  return (
    <main className="relative min-h-screen os-surface border-x-4 border-b-4 border-black flex items-center justify-center overflow-hidden p-4 sm:p-8 lg:p-10">
      <div
        className="pointer-events-none absolute left-1/2 top-[26%] z-20 w-[230%] -translate-x-1/2 -translate-y-1/2 rotate-[-10deg] sm:top-[27%] sm:w-[185%] lg:top-[28%] lg:w-[170%]"
        aria-hidden
      >
        <div className="overflow-hidden border-y-2 border-black bg-[var(--os-navy)] py-2">
          <div className="os-hero-marquee-track flex w-max">{tapeItems}{tapeItems}</div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute left-1/2 top-[74%] z-20 w-[230%] -translate-x-1/2 -translate-y-1/2 rotate-[9deg] sm:top-[72%] sm:w-[185%] lg:top-[70%] lg:w-[170%]"
        aria-hidden
      >
        <div className="overflow-hidden border-y-2 border-black bg-black py-2">
          <div className="os-hero-marquee-track flex w-max" style={{ animationDirection: 'reverse' }}>
            {tapeItems}
            {tapeItems}
          </div>
        </div>
      </div>

      <div className="relative z-30 w-full max-w-3xl border-4 border-black bg-white/95 p-5 sm:p-10 lg:p-12 text-center">
        <p className="os-section-kicker">OLD SCHOOL</p>
        <img
          src={logoSticker}
          alt="Old School Regresados"
          className="mx-auto mb-5 h-16 w-auto object-contain sm:mb-6 sm:h-24 lg:h-32"
          loading="eager"
        />
        <h1 className="os-section-h2 text-[1.75rem] leading-[1.06] sm:text-5xl lg:text-6xl">SITIO EN CONSTRUCCIÓN</h1>
        <p className="os-slice mt-4 sm:mt-6">
          Estamos preparando una nueva versión del sitio.
          <br />
          Volvé pronto para verla.
        </p>
        <a
          href="/?viewSite=true"
          className="os-btn-primary inline-flex mt-6 sm:mt-8"
        >
          VER SITIO ACTUAL
        </a>
      </div>
    </main>
  );
}
