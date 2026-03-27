import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Block02() {
  const sectionRef = useRef(null);
  const numberRef = useRef(null);
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
        ease: 'power3.out',
      });

      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.3,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="os-surface border-x-4 border-b-4 border-black">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Columna izquierda - Número */}
        <div className="lg:col-span-3 border-b-4 lg:border-b-0 lg:border-r-4 border-black p-8 lg:p-12 flex items-center justify-center">
          <div
            ref={numberRef}
            className="text-[8rem] lg:text-[12rem] font-black leading-none text-black"
          >
            02
          </div>
        </div>

        {/* Columna derecha - Contenido */}
        <div className="lg:col-span-9 p-8 lg:p-12 xl:p-16">
          <div
            ref={contentRef}
            className="space-y-4 text-lg lg:text-xl xl:text-2xl leading-relaxed text-black"
          >
            <p>Hubo un momento en tu vida en el que no estabas pensando tanto.</p>
            <p>Estabas viviendo.</p>
            <p>No calculabas cada paso.</p>
            <p>No medías todo.</p>
            <p>No te frenabas tanto.</p>
            <p>Te reías más.</p>
            <p>Te soltabas más.</p>
            <p>Conectabas más.</p>
            <p>Ese momento no desapareció.</p>
            <p>Quedó guardado en el cuerpo.</p>
            <p>Y cada tanto vuelve:</p>
            <p>en una canción, en una foto, en una charla.</p>
            <p>Y cuando vuelve, incomoda.</p>
            <p>Porque te muestra algo que no perdiste,</p>
            <p className="font-black">pero dejaste de usar.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
