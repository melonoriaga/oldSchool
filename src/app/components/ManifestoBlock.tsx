import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function ManifestoBlock() {
  const sectionRef = useRef(null);
  const numberRef = useRef(null);
  const titleRef = useRef(null);
  const paragraphsRef = useRef<HTMLDivElement>(null);
  const asteriskRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animación del número
      gsap.from(numberRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        scale: 0.5,
        duration: 1,
        ease: 'power3.out'
      });

      // Animación del título
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        x: -50,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.2
      });

      // Animación de párrafos uno por uno
      if (paragraphsRef.current) {
        const paragraphs = paragraphsRef.current.querySelectorAll('p');
        gsap.from(paragraphs, {
          scrollTrigger: {
            trigger: paragraphsRef.current,
            start: 'top 80%',
          },
          y: 30,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          delay: 0.4
        });
      }

      // Animación del asterisco decorativo
      gsap.from(asteriskRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        rotation: 360,
        scale: 0,
        duration: 1.2,
        ease: 'back.out(2)',
        delay: 0.8
      });

      // Rotación continua del asterisco
      gsap.to(asteriskRef.current, {
        rotation: 360,
        duration: 15,
        ease: 'none',
        repeat: -1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play pause resume pause'
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div id="manifiesto" ref={sectionRef} className="os-surface border-x-4 border-b-4 border-black">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {/* Left - Number */}
        <div className="border-b-4 lg:border-b-0 lg:border-r-4 border-black p-8 lg:p-16 flex items-center justify-center relative">
          <div ref={numberRef} className="text-[8rem] lg:text-[12rem] font-black leading-none">
            02
          </div>
          <div ref={asteriskRef} className="absolute top-8 right-8 text-5xl font-black opacity-30">
            *
          </div>
        </div>

        {/* Center - Title */}
        <div className="border-b-4 lg:border-b-0 lg:border-r-4 border-black p-8 lg:p-16 flex items-center">
          <h2 ref={titleRef} className="text-4xl lg:text-6xl font-black leading-tight">
            EL MOMENTO QUE NUNCA SE REPITIÓ
          </h2>
        </div>

        {/* Right - Content */}
        <div ref={paragraphsRef} className="p-8 lg:p-16 flex flex-col justify-center space-y-6">
          <p className="text-lg leading-relaxed">
            Hubo un tiempo en el que éramos más livianos.
            Más impulsivos. Más amigos. <strong>Más nosotros.</strong>
          </p>
          <p className="text-lg leading-relaxed">
            Y hubo un momento que quedó guardado para siempre.
          </p>
          <p className="text-lg leading-relaxed">
            La vida siguió.
          </p>
          <p className="text-lg leading-relaxed">
            Pero hay promesas que no.
          </p>
          <p className="text-lg leading-relaxed">
            Durante años lo dijimos.
          </p>
          <p className="text-2xl font-bold">
            Hasta ahora.
          </p>
        </div>
      </div>
    </div>
  );
}