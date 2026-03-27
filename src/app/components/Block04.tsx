import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Block04() {
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
            04
          </div>
        </div>

        {/* Columna derecha - Contenido */}
        <div className="lg:col-span-9 p-8 lg:p-12 xl:p-16 space-y-8">
          
          <h2 ref={titleRef} className="text-3xl lg:text-4xl xl:text-5xl font-black leading-tight text-black">
            VOLVÉS DISTINTO
          </h2>

          <div ref={contentRef} className="space-y-6 text-base lg:text-lg xl:text-xl leading-relaxed text-black">
            <p>
              Hay una etapa de la vida en la que todo parecía más simple:<br />
              el grupo, la música, la noche, el frío en la cara, la sensación de "estoy acá y esto importa".
            </p>
            
            <p>
              Después llegaron responsabilidades, agenda, familia, trabajo.<br />
              Y aunque todo eso tenga valor, a veces aparece una pregunta silenciosa:<br />
              <span className="font-black">¿En qué momento me dejé para después?</span>
            </p>

            <p>Old School® nació para eso.</p>
            
            <p>Para que no tengas que esperar a que algún día se dé.</p>

            <p>
              Volvemos a Bariloche con producción premium, estética retro, rituales y Momentos WOW diseñados para que no seas espectador: seas protagonista.
            </p>

            <p>
              No es un viaje convencional.<br />
              Es un antes y un después.
            </p>

            <p>
              Porque no volvés con fotos nada más.<br />
              Volvés con algo interno.<br />
              <span className="font-black text-2xl lg:text-3xl">Volvés distinto.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
