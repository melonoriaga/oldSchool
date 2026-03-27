import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { RegresadosWord } from './RegresadosWord';

gsap.registerPlugin(ScrollTrigger);

export function IdentityBlock() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const numberRef = useRef(null);
  const imageRef = useRef(null);
  const textRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const badgeRef = useRef(null);
  const asteriskRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animación del título
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        x: -30,
        duration: 0.8,
        ease: 'power3.out'
      });

      // Animación del número
      gsap.from(numberRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        scale: 0.5,
        duration: 1,
        ease: 'back.out(1.7)'
      });

      // Animación de imagen
      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 80%',
        },
        x: -50,
        duration: 1,
        ease: 'power3.out'
      });

      // Animación de textos
      gsap.from(textRefs.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 88%',
        },
        y: 30,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
      });

      // Animación del badge
      gsap.from(badgeRef.current, {
        scrollTrigger: {
          trigger: badgeRef.current,
          start: 'top 85%',
        },
        scale: 0,
        duration: 0.6,
        ease: 'back.out(2)'
      });

      // Animación del asterisco
      gsap.from(asteriskRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        rotation: -360,
        scale: 0,
        duration: 1.5,
        ease: 'back.out(2)',
        delay: 0.5
      });

      // Rotación continua
      gsap.to(asteriskRef.current, {
        rotation: 360,
        duration: 25,
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
    <div ref={sectionRef} id="identidad" className="os-surface border-x-4 border-b-4 border-black">
      {/* Top Section with Number */}
      <div className="border-b-4 border-black p-8 lg:p-16 flex items-center justify-between relative">
        <h2 ref={titleRef} className="text-3xl lg:text-5xl font-black max-w-2xl leading-tight">
          PROMO <RegresadosWord variant="split" className="align-[0.01em]" /> 2026<br />
          PRIMERA EDICIÓN
        </h2>
        <div ref={numberRef} className="text-[6rem] lg:text-[10rem] font-black leading-none hidden lg:block">
          03
        </div>
        <div ref={asteriskRef} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-6xl font-black opacity-20 lg:left-auto lg:transform-none lg:bottom-8 lg:left-1/3">
          *
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {/* Image */}
        <div className="relative h-[40vh] lg:h-[60vh] border-b-4 lg:border-b-0 lg:border-r-4 border-black">
          <ImageWithFallback
            ref={imageRef}
            src="https://images.unsplash.com/photo-1770564512491-e88eb93d48a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHBlb3BsZSUyMGFkdmVudHVyZSUyMGFjdGl2aXR5fGVufDF8fHx8MTc3Mzc5ODczMHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Nueva generación"
            className="w-full h-full object-cover grayscale"
          />
        </div>

        {/* Text Content */}
        <div className="lg:col-span-2 p-8 lg:p-16 flex flex-col justify-center space-y-8">
          <p ref={el => textRefs.current[0] = el} className="text-2xl lg:text-4xl font-bold leading-tight">
            Una nueva generación empieza.
          </p>
          
          <p ref={el => textRefs.current[1] = el} className="text-xl lg:text-2xl leading-relaxed">
            No de egresados.<br />
            <strong>De <RegresadosWord variant="split" />.</strong>
          </p>
          
          <p ref={el => textRefs.current[2] = el} className="text-xl lg:text-2xl leading-relaxed">
            Personas que deciden volver.
          </p>

          <div className="pt-6">
            <div ref={badgeRef} className="inline-block px-6 py-3 border-4 border-black">
              <p className="text-sm font-bold tracking-widest">
                MARZO 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}