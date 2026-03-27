import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Section13() {
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
          ease: 'back.out(1.7)',
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
          delay: 0.2,
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
          delay: 0.4,
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      data-os-read-marker
      className="os-band-cyan border-x-4 border-b-4 border-black"
    >
      <div className="os-section-head-row border-b-4 border-black">
        <div className="max-w-3xl">
          <p className="os-section-kicker text-white" style={{ color: '#fff', fontSize: '1.5rem' }}>
            LOGÍSTICA SILENCIOSA
          </p>
          <h2 ref={titleRef} className="os-section-h2">
            EL SISTEMA
            <br />
            INVISIBLE
          </h2>
        </div>
        <div ref={numberRef} className="os-brutal-num self-end sm:self-start">
          13
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12">
        <aside className="flex flex-col justify-center border-b-4 border-black bg-black/[0.06] p-6 sm:p-8 lg:col-span-4 lg:border-b-0 lg:border-r-4 lg:p-10 xl:p-12">
          <p className="os-section-title mb-2 text-[0.65rem] text-[var(--os-navy)] sm:text-xs">
            SIN FRICCIÓN
          </p>
          <p className="os-pull text-balance">
            Cuando llegás, no pensás en logística.
            <br />
            Todo fluye.
          </p>
        </aside>
        <div className="space-y-6 bg-[color-mix(in_srgb,var(--os-paper)_80%,white)] p-6 sm:p-8 lg:col-span-8 lg:p-10 xl:p-12">
          <p
            ref={(el) => (textRefs.current[0] = el)}
            className="os-slice max-w-2xl border-l-4 border-black pl-4 lg:max-w-none"
          >
            Te movés sin darte cuenta porque todo está diseñado para que vos no tengas que pensar.
          </p>
          <p
            ref={(el) => (textRefs.current[1] = el)}
            className="os-slice max-w-2xl border-l-4 border-[var(--os-orange)] pl-5 text-black/85 sm:pl-6 lg:max-w-none"
          >
            Para excursiones y discotecas contamos con unidades receptivas modernas, habilitadas y
            una flota exclusiva de última generación que aporta confort, calidad y tranquilidad
            durante toda la estadía.
          </p>
        </div>
      </div>
    </div>
  );
}
