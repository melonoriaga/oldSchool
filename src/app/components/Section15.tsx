import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ImageWithFallback } from './figma/ImageWithFallback';

gsap.registerPlugin(ScrollTrigger);

export function Section15() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const numberRef = useRef(null);
  const imageRef = useRef(null);
  const textRefs = useRef<(HTMLParagraphElement | null)[]>([]);
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
          ease: 'back.out(1.7)'
        });
      }

      if (titleRef.current) {
        gsap.from(titleRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 90%',
          },
          y: 50,
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

      if (asteriskRef.current) {
        gsap.from(asteriskRef.current, {
          scrollTrigger: {
            trigger: asteriskRef.current,
            start: 'top 93%',
          },
          rotation: -180,
          scale: 0,
          duration: 1.3,
          ease: 'back.out(2)'
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} data-os-read-marker className="os-surface border-x-4 border-b-4 border-black">
      <div className="os-section-head-row">
        <div className="max-w-3xl">
          <p className="os-section-kicker">MESA + GRUPO</p>
          <h2 ref={titleRef} className="os-section-h2">
            DONDE SE<br />CONSTRUYE TODO
          </h2>
        </div>
        <div ref={numberRef} className="os-brutal-num self-end sm:self-start">
          15
        </div>
      </div>

      {/* Grid section */}
      <div className="grid grid-cols-1 items-stretch lg:grid-cols-2">
        {/* Image */}
        <div
          ref={imageRef}
          className="os-grid-cover-cell border-b-4 border-black lg:border-b-0 lg:border-r-4"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1771837602933-c1cc6293702b?w=1200&q=80"
            alt="Comida grupo"
            className="os-grid-cover-img grayscale"
          />
        </div>

        {/* Text content */}
        <div className="relative flex flex-col justify-center space-y-6 p-6 sm:p-8 lg:p-10 xl:p-12">
          <div ref={asteriskRef} className="absolute right-6 top-6 text-5xl font-black os-asterisk-deco lg:right-8 lg:top-8 lg:text-7xl">
            *
          </div>

          <p ref={el => textRefs.current[0] = el} className="os-pull max-w-2xl pr-12">
            La comida no es comida.<br />
            Es mezcla.<br />
            Es grupo.<br />
            Es <span className="text-[var(--os-orange)]">banda</span>.
          </p>

          <p ref={el => textRefs.current[1] = el} className="os-slice max-w-2xl text-black/80">
            Nuestro programa incluye pensión completa, con bebidas libres de primeras marcas en las comidas.
          </p>

          <p ref={el => textRefs.current[2] = el} className="os-pull max-w-2xl pt-2 text-base sm:text-lg lg:text-xl">
            Pero más allá del servicio, importa lo que pasa ahí:
          </p>

          <p ref={el => textRefs.current[3] = el} className="os-slice max-w-2xl">
            mesas largas, risas, abrazos, brindis que se estiran, charlas que no se quieren cortar.
          </p>

          <p ref={el => textRefs.current[4] = el} className="os-slice max-w-2xl text-sm sm:text-base">
            Contemplamos dietas especiales, menús vegetarianos, celíacos y otras especificaciones.
          </p>

          <p ref={el => textRefs.current[5] = el} className="os-pull max-w-2xl border-l-4 border-[var(--os-cyan)] pl-5 pt-4 sm:pl-6">
            Porque lo importante es esto:<br />
            nadie está solo.
          </p>
        </div>
      </div>
    </div>
  );
}
