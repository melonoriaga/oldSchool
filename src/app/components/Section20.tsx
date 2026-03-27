
import CountUp from '@/components/CountUp';

export function Section20() {

  const formatToMillions = (v: number) => {
    const compact = (v / 100).toFixed(2).replace(/\.00$/, '').replace(/(\.\d)0$/, '$1');
    return `+${compact}M`;
  };

  return (
    <div data-os-read-marker className="os-surface border-x-4 border-b-4 border-black">
      <div className="os-section-head-row">
        <div className="max-w-3xl">
          <p className="os-section-kicker">TRAYECTORIA + MARCA</p>
          <h2 className="os-section-h2 os-title-capra text-3xl sm:text-5xl lg:text-6xl xl:text-7xl">
            CONFIANZA
          </h2>
        </div>
        <div className="os-brutal-num self-end sm:self-start">
          20
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12">
        <aside className="flex flex-col justify-center gap-4 border-b-4 border-black bg-black/[0.02] p-6 sm:p-8 lg:col-span-5 lg:border-b-0 lg:border-r-4 lg:p-10 xl:p-12">
          <p className="os-section-title text-center text-[0.65rem] text-[var(--os-navy)] sm:text-xs">NÚMEROS QUE SUMAN</p>
          <CountUp
            from={0}
            to={100}
            duration={1.9}
            className="block text-center font-black leading-none text-4xl text-[var(--os-orange)] sm:text-5xl lg:text-6xl"
            formatter={formatToMillions}
          />
          <p className="text-center text-sm font-medium uppercase tracking-widest text-black/60">viajes</p>
        </aside>
        <div className="flex flex-col justify-center space-y-5 p-6 sm:p-8 lg:col-span-7 lg:p-10 xl:p-12">
          <p className="os-pull">Más de un millón de viajes.</p>
          <p className="os-slice max-w-2xl text-black/85">Décadas creando experiencias.</p>
          <p className="os-pull max-w-2xl border-l-4 border-black pl-5 pt-4 text-xl sm:pl-6 sm:text-2xl lg:text-3xl">
            Esto no es improvisado.
          </p>
        </div>
      </div>
    </div>
  );
}
