import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ImageWithFallback } from './figma/ImageWithFallback';

gsap.registerPlugin(ScrollTrigger);

export function Section09() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const numberRef = useRef(null);
  const imageRef = useRef(null);
  const textRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (numberRef.current) {
        gsap.from(numberRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 92%',
          },
          scale: 0.3,
          duration: 1.2,
          ease: 'back.out(1.7)',
        });
      }

      if (titleRef.current) {
        gsap.from(titleRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 90%',
          },
          y: 44,
          duration: 0.8,
          ease: 'power3.out',
          delay: 0.12,
        });
      }

      if (imageRef.current) {
        gsap.from(imageRef.current, {
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 92%',
          },
          scale: 1.06,
          duration: 1,
          ease: 'power3.out',
        });
      }

      const validTextRefs = textRefs.current.filter(Boolean);
      if (validTextRefs.length > 0) {
        gsap.from(validTextRefs, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 88%',
          },
          y: 26,
          duration: 0.62,
          stagger: 0.04,
          ease: 'power3.out',
          delay: 0.08,
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} data-os-read-marker className="os-surface border-x-4 border-b-4 border-black">
      <div className="os-section-head-row">
        <div className="max-w-3xl">
          <p className="os-section-kicker">ORIGEN + PROPÓSITO</p>
          <h2 ref={titleRef} className="os-section-h2">
            LA IDEA
          </h2>
        </div>
        <div ref={numberRef} className="os-brutal-num self-end sm:self-start">
          09
        </div>
      </div>

      <div className="grid grid-cols-1 items-stretch lg:grid-cols-[2fr_1fr]">
        <div className="border-b-4 border-black p-6 sm:p-8 lg:border-b-0 lg:border-r-4 lg:p-10 xl:p-12">
          <div className="max-w-3xl space-y-5 lg:max-w-2xl">
            <p ref={(el) => (textRefs.current[0] = el)} className="os-slice">
              Old School® nace de alguien que vivió miles de viajes de egresados desde adentro.
            </p>
            <p ref={(el) => (textRefs.current[1] = el)} className="os-slice text-black/88">
              Después de más de tres décadas observando, entendió algo simple:
            </p>
            <p
              ref={(el) => (textRefs.current[2] = el)}
              className="os-pull border-l-4 border-[var(--os-orange)] pl-4 sm:pl-5"
            >
              las personas no solo extrañan el destino.
              <br />
              También extrañan <span className="text-[var(--os-navy)]">quiénes eran</span> en ese momento de su vida.
            </p>
            <p ref={(el) => (textRefs.current[3] = el)} className="os-pull pt-1 text-base sm:text-lg lg:text-xl">
              De ahí nace Old School®:
            </p>
            <p ref={(el) => (textRefs.current[4] = el)} className="os-slice border-l-4 border-[var(--os-cyan)] pl-4 sm:pl-5">
              una experiencia diseñada para volver a entrar en ese capítulo.
            </p>
            <p
              ref={(el) => (textRefs.current[5] = el)}
              className="os-section-title border-l-4 border-black pl-4 pt-4 text-sm sm:text-base lg:text-lg xl:text-xl"
            >
              Volver a Bariloche, no para recordar.
              <br />
              Para volver a <span className="text-[var(--os-orange)]">sentir</span>.
            </p>
          </div>
        </div>

        <div ref={imageRef} className="os-grid-cover-cell">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1577801599358-90f87d7555d7?w=800&q=80"
            alt="Viaje Bariloche"
            className="os-grid-cover-img grayscale"
          />
        </div>
      </div>
    </div>
  );
}
