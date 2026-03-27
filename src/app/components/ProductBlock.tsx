import { Check } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ImageWithFallback } from './figma/ImageWithFallback';

gsap.registerPlugin(ScrollTrigger);

export function ProductBlock() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const badgeRef = useRef(null);
  const numberRef = useRef(null);
  const titleRef = useRef(null);
  const listRef = useRef<HTMLUListElement | null>(null);
  const asterisk1Ref = useRef(null);
  const asterisk2Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animación de imagen
      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        x: -50,
        duration: 1,
        ease: 'power3.out'
      });

      // Animación de badge
      gsap.from(badgeRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        y: -20,
        duration: 0.6,
        ease: 'power3.out',
        delay: 0.3
      });

      // Animación del número
      gsap.from(numberRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        scale: 0.5,
        duration: 1,
        ease: 'back.out(1.7)',
        delay: 0.2
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
        delay: 0.4
      });

      // Animación de items de lista
      if (listRef.current) {
        const items = listRef.current.querySelectorAll('li');
        gsap.from(items, {
          scrollTrigger: {
            trigger: listRef.current,
            start: 'top 80%',
          },
          x: -20,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power3.out'
        });
      }

      // Animación de asteriscos decorativos
      gsap.from([asterisk1Ref.current, asterisk2Ref.current], {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        rotation: 360,
        scale: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'back.out(2)',
        delay: 0.6
      });

      // Rotación continua de asteriscos
      gsap.to([asterisk1Ref.current, asterisk2Ref.current], {
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
    <div ref={sectionRef} id="producto" className="os-surface border-x-4 border-b-4 border-black">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left - Image */}
        <div className="relative h-[50vh] lg:h-screen border-b-4 lg:border-b-0 lg:border-r-4 border-black">
          <ImageWithFallback
            ref={imageRef}
            src="https://images.unsplash.com/photo-1772127822607-2343696cf82e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHJlc29ydCUyMHRyYXZlbCUyMGV4cGVyaWVuY2V8ZW58MXx8fHwxNzczNzk4NzMwfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Experiencia"
            className="w-full h-full object-cover grayscale"
          />
          <div ref={badgeRef} className="absolute top-8 left-8 os-surface px-6 py-3 border-4 border-black">
            <p className="text-sm font-bold tracking-widest">LA EXPERIENCIA</p>
          </div>
          <div ref={asterisk1Ref} className="absolute bottom-8 left-8 text-6xl font-black opacity-20">
            *
          </div>
        </div>

        {/* Right - Content */}
        <div className="p-8 lg:p-16 flex flex-col justify-center relative">
          <div ref={asterisk2Ref} className="absolute top-8 right-8 text-7xl font-black opacity-20">
            *
          </div>
          <div className="space-y-12">
            <div>
              <div ref={numberRef} className="text-[8rem] font-black leading-none mb-6">04</div>
              <h2 ref={titleRef} className="text-4xl lg:text-5xl font-black leading-tight mb-8">
                QUÉ INCLUYE
              </h2>
            </div>

            <div className="space-y-3">
              <p className="text-xl font-bold">Duración: 4 a 6 días</p>
              <p className="text-xl font-bold">Formato: experiencia grupal</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-4">Incluye:</h3>
              <ul ref={listRef} className="space-y-3">
                {[
                  'Traslados (aéreos o terrestres según origen)',
                  'Alojamiento en hotel seleccionado',
                  'Actividades grupales',
                  'Experiencias nocturnas',
                  'Momentos recreados del viaje de egresados',
                  'Espacios de encuentro y reencuentro'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-lg">
                    <Check className="w-6 h-6 flex-shrink-0 mt-1" strokeWidth={3} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t-4 border-black">
              <p className="text-xl font-bold">
                Cupos limitados<br />
                Inscripción sujeta a disponibilidad
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}