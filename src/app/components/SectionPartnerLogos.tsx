import type { LogoItem } from './ui/LogoLoop';
import { LogoLoop } from './ui/LogoLoop';
import l001 from '@/assets/logosP/001.png';
import l002 from '@/assets/logosP/002.png';
import l003 from '@/assets/logosP/003.png';
import l004 from '@/assets/logosP/004.png';
import l005 from '@/assets/logosP/005.png';
import l006 from '@/assets/logosP/006.png';
import l007 from '@/assets/logosP/007.png';
import l008 from '@/assets/logosP/008.png';

const PARTNER_LOGOS: LogoItem[] = [
  { src: l001, alt: 'Aliado' },
  { src: l002, alt: 'Aliado' },
  { src: l003, alt: 'Aliado' },
  { src: l004, alt: 'Aliado' },
  { src: l005, alt: 'Aliado' },
  { src: l006, alt: 'Aliado' },
  { src: l007, alt: 'Aliado' },
  { src: l008, alt: 'Aliado' },
];

/**
 * Franja de aliados entre el cierre editorial y el footer.
 * Tipo [React Bits Logo Loop](https://reactbits.dev/animations/logo-loop).
 */
export function SectionPartnerLogos() {
  return (
    <section
      id="aliados"
      data-os-read-marker
      className="os-surface border-x-4 border-b-4 border-black"
    >
      <div className="border-b-2 border-black px-5 py-10 sm:px-8 sm:py-12 lg:px-14 lg:py-14">
        <p className="os-section-eyebrow mb-3 font-sans text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-black/45">
          Confían en esta experiencia
        </p>
        <h2 className="os-section-title mb-8 max-w-xl text-lg sm:text-xl lg:text-2xl">
          Aliados y marcas que acompañan cada edición
        </h2>

        <div className="relative rounded-sm border-2 border-black/15 bg-[var(--os-paper)] py-6 sm:py-8">
          <LogoLoop
            logos={PARTNER_LOGOS}
            speed={95}
            direction="left"
            gap={48}
            logoHeight={48}
            pauseOnHover
            fadeOut
            fadeOutColor="#f3efe6"
            ariaLabel="Logos de aliados"
            className="min-h-[4.5rem]"
            renderItem={(item) => {
              if (!('src' in item)) return null;
              return (
                <div className="flex h-14 w-[8.75rem] shrink-0 items-center justify-center sm:h-16 sm:w-[9.25rem]">
                  <img
                    src={item.src}
                    alt={item.alt ?? 'Logo aliado'}
                    className="max-h-12 max-w-[8rem] object-contain sm:max-h-14 sm:max-w-[8.5rem]"
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                  />
                </div>
              );
            }}
          />
        </div>
      </div>
    </section>
  );
}
