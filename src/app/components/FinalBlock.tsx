import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function FinalBlock() {
  const sectionRef = useRef(null);
  const asterisk1Ref = useRef(null);
  const asterisk2Ref = useRef(null);
  const textRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animación de asteriscos con rotación
      gsap.from([asterisk1Ref.current, asterisk2Ref.current], {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        rotation: 360,
        scale: 0,
        duration: 1.5,
        ease: 'back.out(1.7)',
        stagger: 0.3
      });

      // Animación del texto
      gsap.from(textRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 88%',
        },
        y: 50,
        duration: 1,
        ease: 'power3.out',
        delay: 0.5
      });

      // Animación del CTA final
      gsap.from(ctaRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 88%',
        },
        scale: 0.8,
        duration: 1,
        ease: 'back.out(2)',
        delay: 1
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="bg-black text-white border-x-4 border-b-4 border-black min-h-[60vh] flex items-center justify-center">
      <div className="text-center p-8 lg:p-16 space-y-12">
        <div ref={asterisk1Ref} className="text-[10rem] lg:text-[15rem] font-black leading-none opacity-20">
          *
        </div>

        <div className="space-y-8">
          <p ref={textRef} className="text-3xl lg:text-5xl font-bold leading-tight max-w-3xl mx-auto">
            La pregunta es si vas a dejar pasar este regreso.
          </p>

          <div className="pt-8">
            <h2 ref={ctaRef} className="text-5xl lg:text-7xl font-black tracking-tight">
              VOLVÉ A VOS
            </h2>
          </div>
        </div>

        <div ref={asterisk2Ref} className="text-[10rem] lg:text-[15rem] font-black leading-none opacity-20">
          *
        </div>
      </div>
    </div>
  );
}