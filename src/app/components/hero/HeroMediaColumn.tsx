import { useEffect, useState, useSyncExternalStore } from 'react';
import Grainient from '@/components/Grainient';
import s01d1 from '@/assets/imageBySections/Section01/OldSchool-IMG-HomeSliderDesktop1.jpg';
import s01d2 from '@/assets/imageBySections/Section01/OldSchool-IMG-HomeSliderDesktop2.jpg';
import s01d3 from '@/assets/imageBySections/Section01/OldSchool-IMG-HomeSliderDesktop3.jpg';
import s01d4 from '@/assets/imageBySections/Section01/OldSchool-IMG-HomeSliderDesktop4.jpg';
import s01d5 from '@/assets/imageBySections/Section01/OldSchool-IMG-HomeSliderDesktop5.jpg';
import s01d6 from '@/assets/imageBySections/Section01/OldSchool-IMG-HomeSliderDesktop6.jpg';
import s01d7 from '@/assets/imageBySections/Section01/OldSchool-IMG-HomeSliderDesktop7.jpg';
import s01m1 from '@/assets/imageBySections/Section01/OldSchool-IMG-HomeSliderMobile1.jpg';
import s01m2 from '@/assets/imageBySections/Section01/OldSchool-IMG-HomeSliderMobile2.jpg';
import s01m3 from '@/assets/imageBySections/Section01/OldSchool-IMG-HomeSliderMobile3.jpg';
import s01m4 from '@/assets/imageBySections/Section01/OldSchool-IMG-HomeSliderMobile4.jpg';
import s01m5 from '@/assets/imageBySections/Section01/OldSchool-IMG-HomeSliderMobile5.jpg';
import s01m6 from '@/assets/imageBySections/Section01/OldSchool-IMG-HomeSliderMobile6.jpg';
import s01m7 from '@/assets/imageBySections/Section01/OldSchool-IMG-HomeSliderMobile7.jpg';

const LG_MQ = '(min-width: 1024px)';

function subscribeLg(cb: () => void) {
  const mq = window.matchMedia(LG_MQ);
  mq.addEventListener('change', cb);
  return () => mq.removeEventListener('change', cb);
}

function getLgSnapshot() {
  return window.matchMedia(LG_MQ).matches;
}

function getLgServerSnapshot() {
  return false;
}

function useIsLgViewport() {
  return useSyncExternalStore(subscribeLg, getLgSnapshot, getLgServerSnapshot);
}

const HERO_SLIDES = [
  { desktop: s01d1, mobile: s01m1, alt: 'Old School Regresados en Bariloche 1' },
  { desktop: s01d2, mobile: s01m2, alt: 'Old School Regresados en Bariloche 2' },
  { desktop: s01d3, mobile: s01m3, alt: 'Old School Regresados en Bariloche 3' },
  { desktop: s01d4, mobile: s01m4, alt: 'Old School Regresados en Bariloche 4' },
  { desktop: s01d5, mobile: s01m5, alt: 'Old School Regresados en Bariloche 5' },
  { desktop: s01d6, mobile: s01m6, alt: 'Old School Regresados en Bariloche 6' },
  { desktop: s01d7, mobile: s01m7, alt: 'Old School Regresados en Bariloche 7' },
];

const MARQUEE_ITEMS = [
  { label: 'REGRESO', tone: 'orange' as const },
  { label: 'BARILOCHE', tone: 'cyan' as const },
  { label: 'OLD SCHOOL', tone: 'paper' as const },
  { label: 'RETRO PREMIUM', tone: 'orange' as const },
  { label: 'MOMENTOS WOW', tone: 'cyan' as const },
  { label: 'EGRESADOS', tone: 'paper' as const },
  { label: 'BARILOCHE', tone: 'cyan' as const },
  { label: 'NO ES NOSTALGIA', tone: 'orange' as const },
] as const;

const toneClass: Record<(typeof MARQUEE_ITEMS)[number]['tone'], string> = {
  orange: 'text-[var(--os-orange)]',
  cyan: 'text-[var(--os-cyan)]',
  paper: 'text-[var(--os-paper)]',
};

function MarqueeStrip() {
  const segment = (copyId: number) => (
    <div className="flex items-center" key={copyId}>
      {MARQUEE_ITEMS.map((item, i) => (
        <span key={`${copyId}-${i}-${item.label}`} className="flex items-center whitespace-nowrap">
          <span className={`px-3 text-xs font-black uppercase tracking-[0.12em] sm:text-sm`}>
            <span className={toneClass[item.tone]}>{item.label}</span>
          </span>
          <span className="text-[var(--os-cyan)] opacity-90" aria-hidden>
            ✦
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div
      className="pointer-events-none absolute left-1/2 top-[70%] z-30 w-[166%] max-w-none select-none py-2.5 sm:top-[56%] sm:w-[155%] sm:py-3"
      style={{ transform: 'translate(-50%, 0) rotate(-9deg)' }}
      aria-hidden
    >
      <div className="overflow-hidden bg-black shadow-[0_2px_0_0_rgba(0,0,0,0.35)]">
        <div className="os-hero-marquee-track flex w-max">
          {segment(0)}
          {segment(1)}
        </div>
      </div>
    </div>
  );
}

export function HeroMediaColumn() {
  const [activeSlide, setActiveSlide] = useState(0);
  const isLg = useIsLgViewport();

  useEffect(() => {
    if (HERO_SLIDES.length <= 1) return;

    const intervalId = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4200);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <div className="pointer-events-none relative h-full min-h-[inherit] w-full overflow-hidden bg-black">
      {/* Slide: viewport/crop equivalente al video previo para conservar encuadre */}

      {/* [filter:grayscale(1)_contrast(1.08)_brightness(0.9)] */}
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden>
        <div className="os-hero-media-viewport pointer-events-none">
          {HERO_SLIDES.map((slide, index) => (
            <div
              key={slide.desktop}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === activeSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <picture>
                <source media="(min-width: 1024px)" srcSet={slide.desktop} />
                <img
                  src={slide.mobile}
                  alt={slide.alt}
                  className="absolute inset-0 h-full w-full object-cover object-center"
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              </picture>
            </div>
          ))}
        </div>
      </div>

      {/* Oscuro base para legibilidad de UI encima del video */}
      {/* <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/50 via-black/42
         to-[color-mix(in_srgb,var(--os-navy)_32%,black)] opacity-95 mix-blend-multiply"
        aria-hidden
      /> */}

      {/* Grainient (WebGL): solo ≥lg; no montar en mobile evita contexto WebGL + mix-blend (muy caro al hacer scroll). */}
      {isLg ? (
        <div
          className="pointer-events-none absolute inset-0 z-[2] opacity-55 mix-blend-soft-light"
          aria-hidden
        >
          <Grainient
            className="h-full w-full opacity-50"
            grainAmount={0.085}
            grainScale={1.55}
            grainAnimated={false}
            noiseScale={1.85}
            contrast={1.28}
            saturation={0.08}
            gamma={1}
            warpStrength={0.9}
            warpFrequency={4.5}
            warpSpeed={0}
            warpAmplitude={46}
            timeSpeed={0}
            blendAngle={18}
            blendSoftness={0.14}
            rotationAmount={180}
            color1="#f5f1e8"
            color2="#121212"
            color3="#1f2733"
          />
        </div>
      ) : (
        <div
          className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-br from-[#f5f1e8]/25 via-transparent to-[#1f2733]/35 opacity-90"
          aria-hidden
        />
      )}

      {/* Cinta diagonal */}
      <MarqueeStrip />

      <div className="pointer-events-auto absolute bottom-5 left-1/2 z-40 flex -translate-x-1/2 items-center gap-2.5 sm:bottom-6">
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === activeSlide;
          return (
            <button
              key={slide.desktop}
              type="button"
              onClick={() => setActiveSlide(index)}
              aria-label={`Mostrar imagen ${index + 1}`}
              aria-pressed={isActive}
              className={`h-3.5 w-3.5 rounded-full border transition-all duration-300 ${
                isActive
                  ? 'scale-110 border-white bg-[var(--os-cyan)] shadow-[0_0_0_2px_rgba(0,0,0,0.45)]'
                  : 'border-white/85 bg-white/45 hover:bg-white/70'
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}
