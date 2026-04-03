import { ArrowRight } from 'lucide-react';
import { useEffect, useMemo, useRef } from 'react';
import gsap from 'gsap';
import { sectionNavLabel } from '../siteNav';
import { HeroMediaColumn } from './hero/HeroMediaColumn';
import { SectionEyebrow } from './SectionEyebrow';
import { SplitText } from './ui/SplitText';
import volveAVosAzul from '@/assets/01logos/VolveAVosAzul.png';

interface HeroProps {
  onPostular: () => void;
}

export function Hero({ onPostular }: HeroProps) {
  const numberRef = useRef(null);
  const kickerRef = useRef(null);
  const leadRef = useRef(null);
  const ctaRef = useRef(null);
  const buttonsRef = useRef(null);
  const collageRef = useRef(null);
  const splitFrom = useMemo(() => ({ opacity: 0, y: 36 }), []);
  const splitTo = useMemo(() => ({ opacity: 1, y: 0 }), []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(numberRef.current, {
        opacity: 0,
        scale: 0.5,
        duration: 1,
        ease: 'power3.out',
        delay: 0.2,
      });

      const blocks = [kickerRef.current, leadRef.current, ctaRef.current];
      gsap.from(blocks, {
        opacity: 0,
        y: 36,
        duration: 0.75,
        stagger: 0.12,
        ease: 'power3.out',
        delay: 0.35,
      });

      gsap.from(buttonsRef.current, {
        opacity: 0,
        y: 24,
        duration: 0.75,
        ease: 'power3.out',
        delay: 1.05,
      });

      gsap.from(collageRef.current, {
        opacity: 0,
        duration: 1.05,
        ease: 'power3.out',
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="hero"
      data-os-read-marker
      className="flex min-h-screen items-center border-b-4 border-black os-surface pt-20 lg:pt-0"
    >
      <div className="grid h-full min-h-screen w-full grid-cols-1 lg:grid-cols-2">
        <div
          ref={collageRef}
          className="relative h-[48vh] min-h-[12rem] border-b-2 border-black lg:h-auto lg:min-h-screen lg:border-b-0 lg:border-r-2"
        >
          <HeroMediaColumn />
        </div>

        <div className="relative flex flex-col justify-center gap-8 p-6 lg:gap-10 lg:p-12">
          <div className="mb-2" ref={numberRef}>
            <SectionEyebrow index={1} label={sectionNavLabel(1)} />
          </div>

          <div className="space-y-4 lg:space-y-5">
            <p ref={kickerRef} className="os-section-title max-w-xl text-sm lg:text-base">
              SI VIAJASTE A BARILOCHE CON TU CURSO, ESTO ES PARA VOS.
            </p>

            <SplitText
              tag="h1"
              text={'NO ES UN VIAJE.\nES VOLVER A ESTAR JUNTOS.\nES VOLVER.'}
              className="os-section-title os-title-capra max-w-3xl text-[2.15rem] uppercase tracking-[-0.02em] leading-[0.98] sm:text-4xl sm:tracking-[-0.03em] lg:text-6xl xl:text-7xl"
              splitType="words, chars"
              delay={32}
              duration={0.95}
              ease="power3.out"
              from={splitFrom}
              to={splitTo}
              textAlign="left"
              threshold={0.2}
              rootMargin="-40px"
            />

            <div ref={leadRef} className="os-body max-w-xl space-y-2">
              <p className="os-section-subtitle max-w-xl text-sm lg:text-base">
                Es volver a ese grupo que alguna vez lo fue todo.
              </p>

              <p className="os-section-subtitle max-w-xl text-sm lg:text-base">
                Es volver a esa versión tuya que quedó ahí, esperando.
              </p>

              <p className="os-section-subtitle max-w-xl text-sm lg:text-base">
                Esa versión que se reía más, sentía más y estaba más viva.
              </p>

              <p className="os-section-title max-w-xl text-sm lg:text-base">Bariloche sigue.</p>
            </div>

            <div ref={ctaRef}>
              <img
                src={volveAVosAzul}
                alt="Volvé a vos"
                className="h-auto w-full max-w-[22rem] lg:max-w-[26rem]"
                loading="lazy"
              />
            </div>
          </div>

          <div ref={buttonsRef} className="os-cta-row">
            <a
              href="https://wa.me/5491128935992"
              target="_blank"
              rel="noopener noreferrer"
              className="os-btn-secondary"
            >
              HABLAR POR WHATSAPP
            </a>

            <button type="button" onClick={onPostular} className="os-btn-primary">
              POSTULARME <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
