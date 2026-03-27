import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ImageWithFallback } from './figma/ImageWithFallback';

gsap.registerPlugin(ScrollTrigger);

export function Section14() {
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
          ease: 'back.out(1.7)'
        });
      }

      if (titleRef.current) {
        gsap.from(titleRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 90%',
          },
          x: -50,
          duration: 0.8,
          ease: 'power3.out',
          delay: 0.2
        });
      }

      if (imageRef.current) {
        gsap.from(imageRef.current, {
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 90%',
          },
          scale: 1.1,
          duration: 1.2,
          ease: 'power3.out'
        });
      }

      const validTextRefs = textRefs.current.filter(Boolean);
      if (validTextRefs.length > 0) {
        gsap.from(validTextRefs, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 88%',
          },
          y: 30,
          duration: 0.7,
          stagger: 0.04,
          ease: 'power3.out',
          delay: 0.4
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} data-os-read-marker className="os-surface border-x-4 border-b-4 border-black">
      <div className="os-section-head-row">
        <div className="max-w-3xl">
          <p className="os-section-kicker">BASE + CORAZÓN</p>
          <h2 ref={titleRef} className="os-section-h2">
            DONDE EMPIEZA<br />TODO
          </h2>
        </div>
        <div ref={numberRef} className="os-brutal-num self-end sm:self-start">
          14
        </div>
      </div>

      {/* Grid section */}
      <div className="grid grid-cols-1 items-stretch lg:grid-cols-[1fr_2fr]">
        {/* Image */}
        <div
          ref={imageRef}
          className="os-grid-cover-cell border-b-4 border-black lg:border-b-0 lg:border-r-4"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1726708627786-f6f606aef332?w=800&q=80"
            alt="Hotel Bariloche"
            className="os-grid-cover-img grayscale"
          />
        </div>

        {/* Text content */}
        <div className="space-y-6 p-6 sm:p-8 lg:p-10 xl:p-12">
          <p ref={el => textRefs.current[0] = el} className="os-pull max-w-2xl">
            El hotel no es alojamiento.<br />
            Es <span className="text-[var(--os-cyan)]">escenario</span>.
          </p>

          <p ref={el => textRefs.current[1] = el} className="os-slice max-w-2xl pt-1">
            Tu base está en el corazón de Bariloche:<br />
            a metros del Centro Cívico, el lago y las discotecas.
          </p>

          <p ref={el => textRefs.current[2] = el} className="os-slice max-w-2xl text-black/80">
            Nuestra cadena de hoteles es premium, exclusiva y pensada para que todo esté cerca.
          </p>

          <p ref={el => textRefs.current[3] = el} className="os-slice max-w-2xl">
            Habitaciones dobles, triples y cuádruples con máximo confort.
          </p>

          <p ref={el => textRefs.current[4] = el} className="os-slice max-w-2xl pt-2">
            Porque el hotel no es solo un lugar para dormir.
          </p>

          <p ref={el => textRefs.current[5] = el} className="os-pull max-w-2xl border-l-4 border-black pl-5 sm:pl-6">
            También es encuentro, charla y buenos momentos.
          </p>

          <p ref={el => textRefs.current[6] = el} className="os-pull max-w-2xl pt-4 text-[var(--os-navy)]">
            El hotel también es parte de la historia.
          </p>
        </div>
      </div>
    </div>
  );
}
