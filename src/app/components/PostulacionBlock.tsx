import { ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { placeholderByIndex } from '@/data/placeholders';
import { ImageWithFallback } from './figma/ImageWithFallback';

gsap.registerPlugin(ScrollTrigger);

interface PostulacionBlockProps {
  onPostular: () => void;
}

export function PostulacionBlock({ onPostular }: PostulacionBlockProps) {
  const sectionRef = useRef(null);
  const numberRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const cuposRef = useRef(null);
  const buttonsRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(numberRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 90%',
        },
        scale: 0.5,
        duration: 1,
        ease: 'back.out(1.7)',
      });

      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 90%',
        },
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.04,
      });

      gsap.from(textRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 90%',
        },
        y: 20,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.08,
      });

      gsap.from(cuposRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 88%',
        },
        y: 20,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.12,
      });

      gsap.from(buttonsRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 88%',
        },
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.16,
      });

      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 90%',
        },
        x: 50,
        duration: 1,
        ease: 'power3.out',
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="postulacion"
      ref={sectionRef}
      data-os-read-marker
      className="os-surface border-x-4 border-b-4 border-black"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center space-y-10 border-b-4 border-black p-8 lg:border-b-0 lg:border-r-4 lg:p-16 xl:p-20">
          <div ref={numberRef} className="os-brutal-num">
            27
          </div>

          <div className="space-y-6">
            <h2 ref={titleRef} className="font-black leading-tight text-3xl lg:text-5xl">
              ESTO NO ES INSCRIPCIÓN.
              <br />
              ES POSTULACIÓN.
            </h2>

            <p ref={textRef} className="os-body max-w-xl">
              Es para quienes sienten que todavía tienen algo pendiente con esa versión suya que
              despertó en el viaje.
            </p>

            <div ref={cuposRef} className="os-body-strong space-y-2 pt-2">
              <p>Cupos limitados</p>
              <p>Postulación sujeta a disponibilidad</p>
            </div>
          </div>

          <div ref={buttonsRef} className="os-cta-row">
            <button type="button" onClick={onPostular} className="os-btn-primary">
              POSTULARME AHORA <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </button>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="os-btn-secondary"
            >
              INFO POR WHATSAPP
            </a>
          </div>
        </div>

        <div className="relative min-h-[45vh] lg:min-h-[80vh]">
          <ImageWithFallback
            ref={imageRef}
            src={placeholderByIndex(10)}
            alt=""
            className="h-full w-full object-cover grayscale"
          />
        </div>
      </div>
    </div>
  );
}
