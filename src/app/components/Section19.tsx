import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Section19() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const numberRef = useRef(null);
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
          y: 50,
          duration: 0.8,
          ease: 'power3.out',
          delay: 0.2
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
          stagger: 0.05,
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
          <p className="os-section-kicker">CUERPO + PRESENCIA</p>
          <h2 ref={titleRef} className="os-section-h2">
            VISUALIZACIÓN<br />TOTAL
          </h2>
        </div>
        <div ref={numberRef} className="os-brutal-num self-end sm:self-start">
          19
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="border-b-4 border-black p-6 sm:p-8 lg:col-span-7 lg:border-b-0 lg:border-r-4 lg:p-12 xl:p-14">
          <div className="max-w-3xl space-y-5 sm:space-y-6">
            <p ref={el => textRefs.current[0] = el} className="os-pull">
              Llegás.
            </p>
            <p ref={el => textRefs.current[1] = el} className="os-slice text-lg sm:text-xl">
              No conocés a nadie.
            </p>
            <p ref={el => textRefs.current[2] = el} className="os-pull text-xl sm:text-2xl lg:text-3xl">
              A las horas, ya estás hablando.
            </p>
            <p ref={el => textRefs.current[3] = el} className="os-slice text-lg sm:text-xl">
              Al segundo día, ya estás riendo.
            </p>
            <p ref={el => textRefs.current[4] = el} className="os-pull border-l-4 border-[var(--os-cyan)] pl-5 text-xl sm:pl-6 sm:text-2xl lg:text-3xl">
              A la noche, ya estás adentro.
            </p>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="os-band-cyan border-b-4 border-black p-6 sm:p-8 lg:p-10">
            <p ref={el => textRefs.current[5] = el} className="os-section-title text-sm sm:text-base">
              DURANTE EL VIAJE TE SOLTÁS
            </p>
          </div>
          <div className="bg-[color-mix(in_srgb,var(--os-paper)_85%,white)] p-6 sm:p-8 lg:p-10">
            <p ref={el => textRefs.current[6] = el} className="os-pull text-2xl sm:text-3xl lg:text-4xl">
              Y en algún momento, dejás de pensar y{' '}
              <span className="text-[var(--os-orange)]">empezás a vivir</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
