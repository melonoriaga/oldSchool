import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Section05() {
  const sectionRef = useRef(null);
  const numberRef = useRef(null);
  const titleRef = useRef(null);
  const textRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const asterisk1Ref = useRef(null);
  const asterisk2Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (numberRef.current) {
        gsap.from(numberRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 92%',
          },
          scale: 0.3,
          rotation: -90,
          duration: 1.3,
          ease: 'back.out(1.7)'
        });
      }

      if (titleRef.current) {
        gsap.from(titleRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 90%',
          },
          x: -80,
          duration: 0.9,
          ease: 'power3.out',
          delay: 0.3
        });
      }

      const validTextRefs = textRefs.current.filter(Boolean);
      if (validTextRefs.length > 0) {
        gsap.from(validTextRefs, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 88%',
          },
          y: 40,
          duration: 0.8,
          stagger: 0.06,
          ease: 'power3.out',
          delay: 0.5
        });
      }

      [asterisk1Ref.current, asterisk2Ref.current].filter(Boolean).forEach((ref, i) => {
        if (ref) {
          gsap.from(ref, {
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 90%',
            },
            rotation: 180,
            scale: 0,
            duration: 1.2,
            ease: 'back.out(2)',
            delay: 0.6 + i * 0.2,
          });
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      data-os-read-marker
      className="os-band-cyan border-x-4 border-b-4 border-black"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left - Number */}
        <div className="lg:col-span-2 border-b-4 lg:border-b-0 lg:border-r-4 border-black p-8 lg:p-12 flex items-center justify-center">
          <div ref={numberRef} className="os-brutal-num">
            05
          </div>
        </div>

        {/* Right - Content */}
        <div className="lg:col-span-10 p-8 lg:p-20 xl:p-24 relative">
          <div ref={asterisk1Ref} className="os-asterisk-deco absolute top-8 right-8 text-5xl lg:text-7xl">
            *
          </div>

          <div ref={asterisk2Ref} className="os-asterisk-deco absolute bottom-8 left-8 text-6xl lg:text-8xl">
            *
          </div>

          <h2 ref={titleRef} className="os-section-title mb-10 text-2xl leading-tight lg:text-4xl xl:text-5xl">
            NO EXTRAÑÁS EL DESTINO,<br />
            EXTRAÑÁS TU LATIDO.
          </h2>

          <div className="max-w-4xl space-y-5">
            <p ref={el => textRefs.current[0] = el} className="os-body">
              Lo que extrañás del viaje de egresados no es solo el destino.
            </p>

            <p ref={el => textRefs.current[1] = el} className="os-section-title text-base lg:text-xl">
              Extrañás cómo latía tu vida cuando eras libre.
            </p>

            <p ref={el => textRefs.current[2] = el} className="os-body pt-6">
              Volver a vos es recuperar esa versión tuya:<br />
              liviana, valiente, presente, viva.<br />
              La que se emocionaba sin vergüenza.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}