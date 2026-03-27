import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function DecorativeAsterisks() {
  const asterisk1Ref = useRef<HTMLDivElement>(null);
  const asterisk2Ref = useRef<HTMLDivElement>(null);
  const asterisk3Ref = useRef<HTMLDivElement>(null);
  const asterisk4Ref = useRef<HTMLDivElement>(null);
  const asterisk5Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const asterisks = [
        asterisk1Ref.current,
        asterisk2Ref.current,
        asterisk3Ref.current,
        asterisk4Ref.current,
        asterisk5Ref.current
      ];

      // Animación de entrada escalonada
      gsap.from(asterisks, {
        opacity: 0,
        scale: 0,
        rotation: 360,
        duration: 1.5,
        stagger: 0.3,
        ease: 'back.out(2)',
        delay: 2
      });

      // Rotación continua individual para cada asterisco
      asterisks.forEach((asterisk, index) => {
        if (asterisk) {
          gsap.to(asterisk, {
            rotation: 360,
            duration: 15 + (index * 5), // Diferentes velocidades
            ease: 'none',
            repeat: -1
          });
        }
      });

      // Animación de flotación vertical
      gsap.to(asterisks, {
        y: '+=20',
        duration: 2.5,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        stagger: {
          each: 0.2,
          from: 'random'
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Asterisco superior izquierdo */}
      <div
        ref={asterisk1Ref}
        className="fixed top-32 left-8 z-30 pointer-events-none hidden lg:block"
      >
        <div className="text-7xl font-black opacity-15 text-black">*</div>
      </div>

      {/* Asterisco superior derecho (más abajo) */}
      <div
        ref={asterisk2Ref}
        className="fixed top-[40vh] right-24 z-30 pointer-events-none hidden lg:block"
      >
        <div className="text-9xl font-black opacity-10 text-black">*</div>
      </div>

      {/* Asterisco medio izquierdo */}
      <div
        ref={asterisk3Ref}
        className="fixed top-[60vh] left-16 z-30 pointer-events-none hidden lg:block"
      >
        <div className="text-6xl font-black opacity-20 text-black">*</div>
      </div>

      {/* Asterisco medio centro */}
      <div
        ref={asterisk4Ref}
        className="fixed top-[75vh] left-1/2 -translate-x-1/2 z-30 pointer-events-none hidden lg:block"
      >
        <div className="text-8xl font-black opacity-12 text-black">*</div>
      </div>

      {/* Asterisco inferior derecho */}
      <div
        ref={asterisk5Ref}
        className="fixed bottom-32 right-12 z-30 pointer-events-none hidden lg:block"
      >
        <div className="text-7xl font-black opacity-18 text-black">*</div>
      </div>
    </>
  );
}
