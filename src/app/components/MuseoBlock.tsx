import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { OldSchoolWord } from './OldSchoolWord';

gsap.registerPlugin(ScrollTrigger);

export function MuseoBlock() {
  const sectionRef = useRef(null);
  const numberRef = useRef(null);
  const titleRef = useRef(null);
  const textRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const imageRef = useRef(null);
  const overlayRef = useRef(null);
  const asterisk1Ref = useRef(null);
  const asterisk2Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animación del número
      gsap.from(numberRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        scale: 0.5,
        duration: 1,
        ease: 'back.out(1.7)',
      });

      // Animación del título
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.2,
      });

      // Animación de textos
      gsap.from(textRefs.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 88%',
        },
        y: 20,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.4,
      });

      // Animación de imagen
      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        scale: 1.2,
        duration: 1.2,
        ease: 'power3.out',
      });

      // Animación del overlay
      gsap.from(overlayRef.current, {
        scrollTrigger: {
          trigger: overlayRef.current,
          start: 'top 85%',
        },
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
      });

      // Animación de asteriscos
      gsap.from([asterisk1Ref.current, asterisk2Ref.current], {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        rotation: 360,
        scale: 0,
        duration: 1.2,
        stagger: 0.3,
        ease: 'back.out(2)',
        delay: 0.6,
      });

      // Rotación continua de asteriscos
      gsap.to([asterisk1Ref.current, asterisk2Ref.current], {
        rotation: 360,
        duration: 18,
        ease: 'none',
        repeat: -1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play pause resume pause',
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} id="museo" className="os-surface border-x-4 border-b-4 border-black">
      <div className="grid grid-cols-1 lg:grid-cols-5">
        {/* Left - Number and Title */}
        <div className="lg:col-span-2 p-8 lg:p-16 flex flex-col justify-center space-y-8 border-b-4 lg:border-b-0 lg:border-r-4 border-black relative">
          <div ref={asterisk1Ref} className="absolute top-8 right-8 text-5xl font-black opacity-25">
            *
          </div>
          <div ref={numberRef} className="text-[8rem] font-black leading-none">
            25
          </div>

          <h2 ref={titleRef} className="text-4xl lg:text-5xl font-black leading-tight">
            MUSEO
            <br />
            <OldSchoolWord uppercase registered={false} />
          </h2>

          <p
            ref={(el) => (textRefs.current[0] = el)}
            className="text-2xl lg:text-3xl leading-relaxed"
          >
            Fotos, recuerdos,
            <br />
            objetos, historias.
          </p>

          <p ref={(el) => (textRefs.current[1] = el)} className="text-xl leading-relaxed">
            Todo lo que alguna vez guardaste…
            <br />
            <strong className="font-bold">vuelve a tener sentido.</strong>
          </p>
        </div>

        {/* Right - Image */}
        <div className="lg:col-span-3 relative h-[50vh] lg:h-[70vh]">
          <ImageWithFallback
            ref={imageRef}
            src="https://images.unsplash.com/photo-1767395563816-613ab1d5ea8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwcmV0cm8lMjBvYmplY3RzJTIwbWVtb3JpZXN8ZW58MXx8fHwxNzczNzk4NzMxfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Museo Old School"
            className="w-full h-full object-cover grayscale"
          />

          <div ref={asterisk2Ref} className="absolute top-8 left-8 text-6xl font-black opacity-20">
            *
          </div>

          {/* Overlay Text */}
          <div
            ref={overlayRef}
            className="absolute bottom-0 right-0 os-surface p-6 border-t-4 border-l-4 border-black max-w-md"
          >
            <p className="text-sm leading-relaxed">
              Un espacio dedicado a revivir los recuerdos de aquella época. Traé tus fotos, tus
              historias, tus objetos guardados.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
