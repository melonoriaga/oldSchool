import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ImageWithFallback } from './figma/ImageWithFallback';

gsap.registerPlugin(ScrollTrigger);

export function ConceptBlock() {
  const sectionRef = useRef(null);
  const textRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const asteriskRef = useRef(null);
  const imageRef = useRef(null);
  const floatingAsteriskRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animación de textos con stagger
      gsap.from(textRefs.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        y: 40,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
      });

      // Animación del asterisco
      gsap.from(asteriskRef.current, {
        scrollTrigger: {
          trigger: asteriskRef.current,
          start: 'top 85%',
        },
        rotation: 180,
        scale: 0.5,
        duration: 1,
        ease: 'back.out(1.7)'
      });

      // Animación de imagen
      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        scale: 1.2,
        duration: 1.2,
        ease: 'power3.out'
      });

      // Asterisco flotante decorativo
      gsap.from(floatingAsteriskRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        rotation: -360,
        scale: 0,
        duration: 1.3,
        ease: 'back.out(2)',
        delay: 0.4
      });

      // Rotación continua del asterisco flotante
      gsap.to(floatingAsteriskRef.current, {
        rotation: 360,
        duration: 20,
        ease: 'none',
        repeat: -1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play pause resume pause'
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} id="concepto" className="os-surface border-x-4 border-b-4 border-black">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left - Content */}
        <div className="p-8 lg:p-20 flex flex-col justify-center space-y-8 border-b-4 lg:border-b-0 lg:border-r-4 border-black relative">
          <div ref={floatingAsteriskRef} className="absolute top-8 left-8 text-5xl font-black opacity-20 hidden lg:block">
            *
          </div>
          <div className="space-y-6">
            <p ref={el => textRefs.current[0] = el} className="text-2xl lg:text-3xl font-bold leading-tight">
              Esto no es un paquete turístico.<br />
              No es una escapada.
            </p>
            
            <p ref={el => textRefs.current[1] = el} className="text-xl lg:text-2xl leading-relaxed">
              Es volver a ese momento que nunca se repitió.
            </p>
            
            <p ref={el => textRefs.current[2] = el} className="text-xl lg:text-2xl leading-relaxed">
              Es reencontrarte con quienes fuiste.<br />
              Y con quienes lo vivieron con vos.
            </p>
          </div>

          <div className="pt-8">
            <div ref={asteriskRef} className="text-6xl lg:text-8xl font-black">*</div>
          </div>
        </div>

        {/* Right - Image */}
        <div className="relative h-[50vh] lg:h-[70vh]">
          <ImageWithFallback
            ref={imageRef}
            src="https://images.unsplash.com/photo-1757143137392-0b1e1a27a7de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub3N0YWxnaWMlMjBzY2hvb2wlMjBncmFkdWF0aW9uJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzczNzk4NzI5fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Concepto"
            className="w-full h-full object-cover grayscale"
          />
        </div>
      </div>
    </div>
  );
}