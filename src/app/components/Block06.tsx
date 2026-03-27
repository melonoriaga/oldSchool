import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Block06() {
  const sectionRef = useRef(null);
  const numberRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(numberRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        scale: 0.5,
        duration: 1,
        ease: 'power3.out'
      });

      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        y: 50,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.3
      });

      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.5
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="os-surface border-x-4 border-b-4 border-black">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        
        {/* Columna izquierda - Número */}
        <div className="lg:col-span-3 border-b-4 lg:border-b-0 lg:border-r-4 border-black p-8 lg:p-12 flex items-center justify-center">
          <div ref={numberRef} className="text-[8rem] lg:text-[12rem] font-black leading-none text-black">
            06
          </div>
        </div>

        {/* Columna derecha - Contenido */}
        <div className="lg:col-span-9 p-8 lg:p-12 xl:p-16 space-y-8">
          
          <h2 ref={titleRef} className="text-3xl lg:text-4xl xl:text-5xl font-black leading-tight text-black">
            BARILOCHE NO ES UN LUGAR.<br />
            ES UN SÍMBOLO.
          </h2>

          <div ref={contentRef} className="space-y-6 text-base lg:text-lg xl:text-xl leading-relaxed text-black">
            <p>
              Bariloche es el escenario.<br />
              Pero el verdadero regreso es a esa versión tuya que despertó ahí.
            </p>
            
            <p>
              No volvés al mapa.<br />
              Volvés a lo que te pasó ahí.
            </p>

            <p>
              Frío, montaña, lago.<br />
              Un símbolo compartido.
            </p>

            <p className="font-black text-2xl lg:text-3xl">
              Volver a Bariloche no es volver al lugar.<br />
              Es volver a lo que sentiste ahí.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
