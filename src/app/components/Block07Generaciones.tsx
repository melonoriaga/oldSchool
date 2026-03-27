import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Block07Generaciones() {
  const sectionRef = useRef(null);
  const numberRef = useRef(null);
  const titleRef = useRef(null);
  const introRef = useRef(null);

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

      gsap.from(introRef.current, {
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
        <div className="lg:col-span-3 lg:row-span-5 border-b-4 lg:border-b-0 lg:border-r-4 border-black p-8 lg:p-12 flex items-center justify-center">
          <div ref={numberRef} className="text-[8rem] lg:text-[12rem] font-black leading-none text-black">
            07
          </div>
        </div>

        {/* Título y subtítulo */}
        <div className="lg:col-span-9 border-b-4 border-black p-8 lg:p-12 xl:p-16 space-y-6">
          <h2 ref={titleRef} className="text-3xl lg:text-4xl xl:text-5xl font-black leading-tight text-black">
            REGRESADOS
          </h2>
          
          <p ref={introRef} className="text-2xl lg:text-3xl font-black leading-tight text-black">
            CADA GENERACIÓN LO VIVIÓ DISTINTO,<br />
            PERO TODAS SINTIERON LO MISMO.
          </p>

          <div className="space-y-4 text-base lg:text-lg leading-relaxed text-black">
            <p>No hacemos un viaje estándar.</p>
            <p>Diseñamos la experiencia según tu generación.</p>
            <p>Porque no es lo mismo haber egresado en los 80 que en los 2000.</p>
            <p>Cambió la música, cambió la forma de vincularse, cambió el código.</p>
            <p className="font-black">Pero hay algo que no cambió: lo que Bariloche dejó adentro.</p>
          </div>
        </div>

        {/* Generación 80 */}
        <div className="lg:col-span-9 border-b-4 border-black p-8 lg:p-12 xl:p-16 space-y-4">
          <h3 className="text-2xl lg:text-3xl font-black text-black">
            Generación 80 - La que vivió sin filtro.
          </h3>
          <p className="text-base lg:text-lg leading-relaxed text-black">
            Casseteras, Walkman, cartas, lentos y promesas.<br />
            Una generación con mística, códigos y amistades que todavía laten.<br />
            Para ellos diseñamos experiencias con espíritu auténtico, emoción real y memoria viva.
          </p>
        </div>

        {/* Generación 90 */}
        <div className="lg:col-span-9 border-b-4 border-black p-8 lg:p-12 xl:p-16 space-y-4">
          <h3 className="text-2xl lg:text-3xl font-black text-black">
            Generación 90 - La que mezcló inocencia con revolución.
          </h3>
          <p className="text-base lg:text-lg leading-relaxed text-black">
            CD, MSN, primeras cámaras digitales, coreografías, noches eternas y amistad intensa.<br />
            Una generación que empezó a mostrarse al mundo, pero todavía sabía mirar a los ojos.<br />
            Para ellos creamos viajes con fiestas icónicas y reencuentros potentes.
          </p>
        </div>

        {/* Generación 2000 */}
        <div className="lg:col-span-9 border-b-4 border-black p-8 lg:p-12 xl:p-16 space-y-4">
          <h3 className="text-2xl lg:text-3xl font-black text-black">
            Generación 2000 - La que creció conectada.
          </h3>
          <p className="text-base lg:text-lg leading-relaxed text-black">
            Fotolog, Messenger, redes, primeras selfies.<br />
            Una generación expresiva, intensa y protagonista.<br />
            Para ellos armamos viajes visuales, vibrantes y con energía de estreno.
          </p>
        </div>

        {/* Generación 2010 */}
        <div className="lg:col-span-9 p-8 lg:p-12 xl:p-16 space-y-4">
          <h3 className="text-2xl lg:text-3xl font-black text-black">
            Generación 2010 - La que empezó a vivir… y a mostrarse.
          </h3>
          <p className="text-base lg:text-lg leading-relaxed text-black">
            Instagram, WhatsApp, Snapchat.<br />
            Viajes en tiempo real, entre lo digital y lo real.<br />
            Para ellos diseñamos experiencias que vuelven a activar esa intensidad.
          </p>
        </div>

      </div>
    </div>
  );
}
