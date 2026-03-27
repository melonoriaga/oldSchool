import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ReAccentWord } from './ReAccentWord';

gsap.registerPlugin(ScrollTrigger);

export function Block03() {
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
        x: -50,
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
            03
          </div>
        </div>

        {/* Columna derecha - Contenido */}
        <div className="lg:col-span-9 p-8 lg:p-12 xl:p-16 space-y-8">
          
          <h2 ref={titleRef} className="text-3xl lg:text-4xl xl:text-5xl font-black leading-tight text-black">
            NO ES NOSTALGIA,<br />
            ES <ReAccentWord word="RECONEXIÓN" tone="orange" />.
          </h2>

          <div ref={contentRef} className="space-y-4 text-base lg:text-lg xl:text-xl leading-relaxed text-black">
            <p>Old School no está hecho para mirar el pasado desde afuera.</p>
            <p>Está hecho para volver a entrar.</p>
            <p>
              No es <ReAccentWord word="recordar" tone="orange" />.
            </p>
            <p>
              Es <ReAccentWord word="reactivar" tone="cyan" />.
            </p>
            <p>No es mirar lo que fue.</p>
            <p className="font-black">
              Es volver a sentirlo en tiempo <ReAccentWord word="real" tone="cyan" />.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
