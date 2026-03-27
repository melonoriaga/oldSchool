import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ImageWithFallback } from './figma/ImageWithFallback';

gsap.registerPlugin(ScrollTrigger);

export function Section06() {
  const sectionRef = useRef(null);
  const numberRef = useRef(null);
  const titleRef = useRef(null);
  const textRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const imageContainer1Ref = useRef(null);
  const imageContainer2Ref = useRef(null);
  const asteriskRef = useRef(null);

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
          y: 48,
          duration: 0.85,
          ease: 'power3.out',
          delay: 0.12,
        });
      }

      const imgs = [imageContainer1Ref.current, imageContainer2Ref.current].filter(Boolean);
      if (imgs.length > 0) {
        gsap.from(imgs, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 90%',
          },
          scale: 1.08,
          duration: 1.05,
          stagger: 0.06,
          ease: 'power3.out',
        });
      }

      const valid = textRefs.current.filter(Boolean);
      if (valid.length > 0) {
        gsap.from(valid, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 88%',
          },
          y: 26,
          duration: 0.65,
          stagger: 0.05,
          ease: 'power3.out',
          delay: 0.12,
        });
      }

      if (asteriskRef.current) {
        gsap.from(asteriskRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 90%',
          },
          rotation: -360,
          scale: 0,
          duration: 1.25,
          ease: 'back.out(2)',
          delay: 0.08,
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} id="bariloche" data-os-read-marker className="os-surface border-x-4 border-b-4 border-black">
      <div className="os-section-head-row">
        <div className="max-w-3xl">
          <p className="os-section-kicker">LUGAR + SÍMBOLO</p>
          <h2 ref={titleRef} className="os-section-h2">
            BARILOCHE NO ES UN LUGAR.
            <br />
            ES UN SÍMBOLO.
          </h2>
        </div>
        <div ref={numberRef} className="os-brutal-num self-end sm:self-start">
          06
        </div>
      </div>

      <div className="grid grid-cols-1 items-stretch lg:grid-cols-3">
        <div
          ref={imageContainer1Ref}
          className="os-grid-cover-cell border-b-4 border-black lg:border-b-0 lg:border-r-4"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1653327611476-c55e75e6fbd4?w=800&q=80"
            alt="Lago Bariloche"
            className="os-grid-cover-img grayscale"
          />
        </div>

        <div className="relative flex flex-col justify-center space-y-5 border-b-4 border-black p-6 sm:p-8 lg:border-b-0 lg:border-r-4 lg:p-10 xl:p-12">
          <div ref={asteriskRef} className="os-asterisk-deco absolute right-6 top-6 text-5xl font-black lg:right-8 lg:top-8 lg:text-7xl">
            *
          </div>

          <p ref={(el) => (textRefs.current[0] = el)} className="os-pull max-w-xl pr-10">
            Bariloche es el escenario.
            <br />
            Pero el verdadero regreso es a esa versión tuya que despertó ahí.
          </p>

          <p ref={(el) => (textRefs.current[1] = el)} className="os-slice max-w-xl border-l-4 border-[var(--os-orange)] pl-4 text-black/88 sm:pl-5">
            No volvés al mapa.
            <br />
            Volvés a lo que te pasó ahí.
          </p>

          <p ref={(el) => (textRefs.current[2] = el)} className="os-slice max-w-xl">
            Frío, montaña, lago.
            <br />
            Un símbolo compartido.
          </p>

          <p ref={(el) => (textRefs.current[3] = el)} className="os-pull max-w-xl border-l-4 border-black pl-4 pt-1 text-base sm:text-lg lg:text-2xl sm:pl-5">
            Volver a Bariloche no es volver al lugar.
            <br />
            Es volver a lo que sentiste ahí.
          </p>
        </div>

        <div ref={imageContainer2Ref} className="os-grid-cover-cell">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1505832018823-50331d70d237?w=800&q=80"
            alt="Montaña nevada"
            className="os-grid-cover-img grayscale"
          />
        </div>
      </div>
    </div>
  );
}
