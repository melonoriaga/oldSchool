import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ImageWithFallback } from './figma/ImageWithFallback';

gsap.registerPlugin(ScrollTrigger);

export function CommunityBlock() {
  const sectionRef = useRef(null);
  const numberRef = useRef(null);
  const titleRef = useRef(null);
  const textRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const asterisksRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef(null);

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
        ease: 'back.out(1.7)'
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
        delay: 0.2
      });

      // Animación de textos
      gsap.from(textRefs.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 88%',
        },
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 0.4
      });

      // Animación de asteriscos
      if (asterisksRef.current) {
        const asterisks = asterisksRef.current.querySelectorAll('div');
        gsap.from(asterisks, {
          scrollTrigger: {
            trigger: asterisksRef.current,
            start: 'top 85%',
          },
          rotation: 180,
          scale: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'back.out(2)'
        });
      }

      // Animación de imagen
      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        x: 50,
        duration: 1,
        ease: 'power3.out'
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} id="comunidad" className="bg-black text-white border-x-4 border-b-4 border-black">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left - Content */}
        <div className="p-8 lg:p-20 flex flex-col justify-center space-y-12 border-b-4 lg:border-b-0 lg:border-r-4 border-white">
          <div ref={numberRef} className="text-[8rem] lg:text-[12rem] font-black leading-none">
            05
          </div>

          <div className="space-y-8">
            <h2 ref={titleRef} className="text-4xl lg:text-6xl font-black leading-tight">
              NO ESTÁS SOLO
            </h2>

            <p ref={el => textRefs.current[0] = el} className="text-2xl lg:text-3xl leading-relaxed">
              Somos miles los que alguna vez dijimos:<br />
              <strong className="font-black">"tenemos que volver".</strong>
            </p>

            <p ref={el => textRefs.current[1] = el} className="text-3xl lg:text-4xl font-bold">
              Hoy, ese momento llegó.
            </p>
          </div>

          <div ref={asterisksRef} className="flex items-center gap-4">
            <div className="text-6xl font-black">*</div>
            <div className="text-6xl font-black">*</div>
            <div className="text-6xl font-black">*</div>
          </div>
        </div>

        {/* Right - Image */}
        <div className="relative h-[50vh] lg:h-[80vh]">
          <ImageWithFallback
            ref={imageRef}
            src="https://images.unsplash.com/photo-1576149324567-4fd5627ee73d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbW90aW9uYWwlMjByZXVuaW9uJTIwZnJpZW5kcyUyMHRvZ2V0aGVyfGVufDF8fHx8MTc3Mzc5ODczMXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Comunidad"
            className="w-full h-full object-cover grayscale"
          />
        </div>
      </div>
    </div>
  );
}