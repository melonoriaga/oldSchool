import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function AnimatedScrollAsterisks() {
  const asterisk1Ref = useRef<HTMLDivElement>(null);
  const asterisk2Ref = useRef<HTMLDivElement>(null);
  const asterisk3Ref = useRef<HTMLDivElement>(null);
  const asterisk4Ref = useRef<HTMLDivElement>(null);
  const asterisk5Ref = useRef<HTMLDivElement>(null);
  const asterisk6Ref = useRef<HTMLDivElement>(null);
  const asterisk7Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ASTERISCO 1: Del Hero al Manifiesto (derecha → izquierda, diagonal)
      if (asterisk1Ref.current) {
        gsap.timeline({
          scrollTrigger: {
            trigger: '#manifiesto',
            start: 'top 80%',
            end: 'center center',
          }
        })
        .fromTo(asterisk1Ref.current,
          { x: 0, y: 0, rotation: 0, scale: 0, opacity: 0 },
          { x: -300, y: 400, rotation: 540, scale: 1.5, opacity: 0.5, duration: 2, ease: 'power2.inOut' }
        )
        .to(asterisk1Ref.current,
          { x: -600, y: 800, rotation: 1080, scale: 0.8, opacity: 0, duration: 1.5, ease: 'power2.inOut' }
        );
      }

      // ASTERISCO 2: Del Manifiesto al Concepto (izquierda → derecha, ondulante)
      if (asterisk2Ref.current) {
        gsap.timeline({
          scrollTrigger: {
            trigger: '#concepto',
            start: 'top 80%',
            end: 'center center',
          }
        })
        .fromTo(asterisk2Ref.current,
          { x: 0, y: 0, rotation: 0, scale: 0, opacity: 0 },
          { x: 200, y: 300, rotation: -360, scale: 1.8, opacity: 0.6, duration: 1.5, ease: 'sine.inOut' }
        )
        .to(asterisk2Ref.current,
          { x: 500, y: 600, rotation: -720, scale: 1.2, opacity: 0.5, duration: 1.2, ease: 'sine.inOut' }
        )
        .to(asterisk2Ref.current,
          { x: 700, y: 900, rotation: -1080, scale: 0, opacity: 0, duration: 1, ease: 'sine.inOut' }
        );
      }

      // ASTERISCO 3: Del Concepto al Producto (zigzag amplio)
      if (asterisk3Ref.current) {
        gsap.timeline({
          scrollTrigger: {
            trigger: '#producto',
            start: 'top 80%',
            end: 'center center',
          }
        })
        .fromTo(asterisk3Ref.current,
          { x: 0, y: 0, rotation: 0, scale: 0, opacity: 0 },
          { x: -250, y: 250, rotation: 360, scale: 1.6, opacity: 0.5, duration: 1, ease: 'power1.inOut' }
        )
        .to(asterisk3Ref.current,
          { x: 200, y: 500, rotation: 720, scale: 2, opacity: 0.6, duration: 1, ease: 'power1.inOut' }
        )
        .to(asterisk3Ref.current,
          { x: -150, y: 750, rotation: 1080, scale: 1.3, opacity: 0.4, duration: 0.8, ease: 'power1.inOut' }
        )
        .to(asterisk3Ref.current,
          { x: 100, y: 1000, rotation: 1440, scale: 0, opacity: 0, duration: 0.8, ease: 'power1.inOut' }
        );
      }

      // ASTERISCO 4: Del Producto a Comunidad (curva elegante)
      if (asterisk4Ref.current) {
        gsap.timeline({
          scrollTrigger: {
            trigger: '#comunidad',
            start: 'top 80%',
            end: 'center center',
          }
        })
        .fromTo(asterisk4Ref.current,
          { x: 0, y: 0, rotation: 0, scale: 0, opacity: 0 },
          { x: 350, y: 350, rotation: -540, scale: 1.7, opacity: 0.55, duration: 1.8, ease: 'power3.inOut' }
        )
        .to(asterisk4Ref.current,
          { x: 250, y: 700, rotation: -900, scale: 1.4, opacity: 0.5, duration: 1.2, ease: 'power3.inOut' }
        )
        .to(asterisk4Ref.current,
          { x: 50, y: 1050, rotation: -1440, scale: 0, opacity: 0, duration: 1, ease: 'power3.inOut' }
        );
      }

      // ASTERISCO 5: De Comunidad a Museo (movimiento suave ondulante)
      if (asterisk5Ref.current) {
        gsap.timeline({
          scrollTrigger: {
            trigger: '#museo',
            start: 'top 80%',
            end: 'center center',
          }
        })
        .fromTo(asterisk5Ref.current,
          { x: 0, y: 0, rotation: 0, scale: 0, opacity: 0 },
          { x: -350, y: 300, rotation: 450, scale: 1.9, opacity: 0.6, duration: 1.5, ease: 'sine.inOut' }
        )
        .to(asterisk5Ref.current,
          { x: -200, y: 600, rotation: 810, scale: 1.5, opacity: 0.55, duration: 1.2, ease: 'sine.inOut' }
        )
        .to(asterisk5Ref.current,
          { x: -450, y: 900, rotation: 1260, scale: 1, opacity: 0.3, duration: 1, ease: 'sine.inOut' }
        )
        .to(asterisk5Ref.current,
          { x: -600, y: 1200, rotation: 1800, scale: 0, opacity: 0, duration: 1, ease: 'sine.inOut' }
        );
      }

      // ASTERISCO 6: Museo → Postulación (rebote divertido)
      if (asterisk6Ref.current) {
        gsap.timeline({
          scrollTrigger: {
            trigger: '#museo',
            start: 'center center',
            end: 'bottom center',
          }
        })
        .fromTo(asterisk6Ref.current,
          { x: 0, y: 0, rotation: 0, scale: 0, opacity: 0 },
          { x: 150, y: 200, rotation: -270, scale: 1.4, opacity: 0.5, duration: 1.3, ease: 'back.out(2)' }
        )
        .to(asterisk6Ref.current,
          { x: -100, y: 500, rotation: -630, scale: 1.8, opacity: 0.6, duration: 1.2, ease: 'back.inOut(2)' }
        )
        .to(asterisk6Ref.current,
          { x: 200, y: 800, rotation: -990, scale: 0, opacity: 0, duration: 1, ease: 'back.in(2)' }
        );
      }

      // ASTERISCO 7: Scroll general lateral (siempre visible, se mueve de lado a lado)
      if (asterisk7Ref.current) {
        gsap.timeline({
          scrollTrigger: {
            trigger: 'body',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 2.5,
          }
        })
        .fromTo(asterisk7Ref.current,
          { x: -100, y: 0, rotation: 0, opacity: 0.3 },
          { x: 100, y: window.innerHeight * 4, rotation: 2160, opacity: 0.4, ease: 'sine.inOut' }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Asterisco 1: Hero → Manifiesto */}
      <div
        ref={asterisk1Ref}
        className="fixed right-[5%] top-[15vh] z-30 pointer-events-none"
        style={{ willChange: 'transform, opacity' }}
      >
        <div className="text-9xl lg:text-[12rem] font-black text-black">*</div>
      </div>

      {/* Asterisco 2: Manifiesto → Concepto */}
      <div
        ref={asterisk2Ref}
        className="fixed left-[10%] top-[25vh] z-30 pointer-events-none"
        style={{ willChange: 'transform, opacity' }}
      >
        <div className="text-8xl lg:text-[10rem] font-black text-black">*</div>
      </div>

      {/* Asterisco 3: Concepto → Producto */}
      <div
        ref={asterisk3Ref}
        className="fixed right-[20%] top-[35vh] z-30 pointer-events-none"
        style={{ willChange: 'transform, opacity' }}
      >
        <div className="text-[10rem] lg:text-[14rem] font-black text-black">*</div>
      </div>

      {/* Asterisco 4: Producto → Comunidad */}
      <div
        ref={asterisk4Ref}
        className="fixed left-[15%] top-[45vh] z-30 pointer-events-none"
        style={{ willChange: 'transform, opacity' }}
      >
        <div className="text-9xl lg:text-[11rem] font-black text-black">*</div>
      </div>

      {/* Asterisco 5: Comunidad → Museo */}
      <div
        ref={asterisk5Ref}
        className="fixed right-[12%] top-[55vh] z-30 pointer-events-none"
        style={{ willChange: 'transform, opacity' }}
      >
        <div className="text-8xl lg:text-[10rem] font-black text-black">*</div>
      </div>

      {/* Asterisco 6: Museo → Postulación */}
      <div
        ref={asterisk6Ref}
        className="fixed left-[25%] top-[65vh] z-30 pointer-events-none"
        style={{ willChange: 'transform, opacity' }}
      >
        <div className="text-9xl lg:text-[12rem] font-black text-black">*</div>
      </div>

      {/* Asterisco 7: Siempre visible, lateral */}
      <div
        ref={asterisk7Ref}
        className="fixed left-[5%] top-[10vh] z-25 pointer-events-none hidden lg:block"
        style={{ willChange: 'transform, opacity' }}
      >
        <div className="text-7xl font-black text-black opacity-30">*</div>
      </div>
    </>
  );
}