import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function ScrollAsterisk() {
  const asteriskRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!asteriskRef.current) return;

    const ctx = gsap.context(() => {
      // Animación inicial de entrada con delay
      gsap.from(asteriskRef.current, {
        opacity: 0,
        scale: 0,
        duration: 1.5,
        ease: 'back.out(2)',
        delay: 1.5
      });

      // Movimiento vertical siguiendo el scroll
      gsap.to(asteriskRef.current, {
        y: () => {
          const windowHeight = window.innerHeight;
          const documentHeight = document.documentElement.scrollHeight;
          return documentHeight - windowHeight - 100;
        },
        rotation: 720,
        ease: 'none',
        scrollTrigger: {
          trigger: 'body',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={asteriskRef}
      className="fixed right-8 lg:right-16 top-20 z-40 pointer-events-none"
    >
      <div className="text-6xl lg:text-8xl font-black opacity-30 text-black">
        *
      </div>
    </div>
  );
}