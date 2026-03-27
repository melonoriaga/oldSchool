import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ImageWithFallback } from './figma/ImageWithFallback';

gsap.registerPlugin(ScrollTrigger);

/** Misma escala de padding que bloques editoriales en papel (cf. Section07 celda 10). */
const paperPad = 'relative border-b-4 border-black p-8 sm:p-10 lg:p-12 xl:p-16';

export function Section17() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const numberRef = useRef(null);
  const imageRef = useRef(null);
  const blockRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (numberRef.current) {
        gsap.from(numberRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 92%',
          },
          scale: 0.3,
          duration: 1.2,
          ease: 'back.out(1.7)',
        });
      }

      if (titleRef.current) {
        gsap.from(titleRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 90%',
          },
          y: 50,
          duration: 0.8,
          ease: 'power3.out',
          delay: 0.2,
        });
      }

      if (imageRef.current) {
        gsap.from(imageRef.current, {
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 92%',
          },
          scale: 1.06,
          duration: 1,
          ease: 'power3.out',
        });
      }

      const blocks = blockRefs.current.filter(Boolean);
      if (blocks.length > 0) {
        gsap.from(blocks, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 88%',
          },
          y: 28,
          duration: 0.58,
          stagger: 0.06,
          ease: 'power3.out',
          delay: 0.06,
        });
      }
    });

    return () => ctx.revert();
  }, []);

  const setBlockRef = (i: number) => (el: HTMLDivElement | null) => {
    blockRefs.current[i] = el;
  };

  return (
    <div
      ref={sectionRef}
      data-os-read-marker
      className="os-surface border-x-4 border-b-4 border-black"
    >
      <div className="os-section-head-row">
        <div className="max-w-3xl">
          <p className="os-section-kicker">NOCHE + RITMO</p>
          <h2 ref={titleRef} className="os-section-h2">
            VOLVEMOS A DONDE
            <br />
            LA MÚSICA LO
            <br />
            ACOMODABA TODO
            <br />
            DONDE TODO EXPLOTA
          </h2>
        </div>
        <div ref={numberRef} className="os-brutal-num self-end sm:self-start">
          17
        </div>
      </div>

      <div className="grid grid-cols-1 items-stretch border-b-4 border-black lg:grid-cols-[2fr_1fr]">
        <div className={`${paperPad} border-b-4 border-black lg:border-b-0 lg:border-r-4`}>
          <p className="os-body max-w-2xl lg:max-w-none">
            Visitamos las discotecas icónicas de Bariloche y revivimos la energía del viaje de
            egresados en versión <span className="font-black">Retro Premium</span>: hits 80/90/2000,
            puesta cinematográfica y noches pensadas para que el grupo se suelte, se ría y se lleve
            recuerdos reales.
          </p>
        </div>
        <div ref={imageRef} className="os-grid-cover-cell">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1657208431551-cbf415b8ef26?w=800&q=80"
            alt="Discoteca"
            className="os-grid-cover-img grayscale"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div ref={setBlockRef(0)} className={`${paperPad} border-b-4 lg:border-r-4`}>
          <div className="os-asterisk-deco absolute right-8 top-8 text-4xl font-black">*</div>
          <div className="os-brutal-num-sub mb-4">17.01</div>
          <h3 className="os-section-title mb-3 text-sm lg:text-base">Fiesta de Disfraces</h3>
          <div className="max-w-2xl space-y-3 border-l-4 border-[var(--os-cyan)] pl-5 lg:max-w-none lg:pl-6">
            <div className="space-y-3 os-body">
              <p>Disfraces, personajes, música, pasarela, desafíos y premios.</p>
              <p>Una noche para soltarse y reírse sin filtro.</p>
              <p className="os-body-strong font-black">Código de Vestimenta: Disfraces.</p>
            </div>
          </div>
        </div>

        <div ref={setBlockRef(1)} className={`${paperPad}`}>
          <div className="os-asterisk-deco absolute right-8 top-8 text-4xl font-black">*</div>
          <div className="os-brutal-num-sub mb-4">17.02</div>
          <h3 className="os-section-title mb-3 text-sm lg:text-base">Fiesta Colegial</h3>
          <div className="space-y-3 border-l-4 border-black pl-5 lg:pl-6">
            <div className="space-y-3 os-body">
              <p>
                La fiesta del estudiante convertida en una de las noches más esperadas del viaje.
              </p>
              <p>DJ en vivo, luces, hits y energía de egresados desde que entrás.</p>
              <p className="os-body-strong font-black">Código de Vestimenta: Estudiantil Retro.</p>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={setBlockRef(2)}
        className="os-band-orange relative border-b-4 border-black p-8 sm:p-10 lg:p-12 xl:p-16"
      >
        <div className="os-asterisk-deco absolute right-8 top-8 text-4xl">*</div>
        <div className="os-brutal-num-sub mb-4">17.03</div>
        <h3 className="os-section-title mb-3 text-sm lg:text-base">
          Fiesta del Semáforo & Color Crush
        </h3>
        <div className="max-w-4xl space-y-3">
          <p className="os-body-strong font-black">Dos conceptos en una noche.</p>
          <p className="os-body">Primero el código. Después la vibra.</p>
          <p className="os-body">Una propuesta pensada para conectar de verdad.</p>
          <p className="os-body pt-3">
            <span className="font-black">Semáforo:</span> cada color representa un mood, un deseo,
            una intención.
            <br />
            Código de vestimenta: tu estado civil.
          </p>
          <p className="os-body">
            <span className="font-black">Color Crush:</span> entrás con un color, jugás con una
            vibra y dejás que la noche haga el resto.
            <br />
            Código de vestimenta: tu vibra romántica.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div
          ref={setBlockRef(3)}
          className="os-band-cyan relative border-b-4 border-black p-8 sm:p-10 lg:border-r-4 lg:border-b-0 lg:p-12 xl:p-16"
        >
          <div className="os-asterisk-deco absolute right-8 top-8 text-4xl font-black">*</div>
          <div className="os-brutal-num-sub mb-4">17.04</div>
          <h3 className="os-section-title mb-3 text-sm lg:text-base">Super Retro Show</h3>
          <div className="space-y-3 os-body">
            <p className="os-body-strong font-black">Fiesta temática inmersiva.</p>
            <p>
              Neón, pantallas VHS, guiños a los 80/90/2000, show en vivo, Momento Generación y
              Clímax Colectivo.
            </p>
            <p className="os-body-strong font-black text-sm sm:text-base">
              No es nostalgia pasiva.
              <br />
              Es volver a entrar en una versión tuya que seguía intacta.
            </p>
            <p className="os-body-strong font-black">Código de Vestimenta: Retro.</p>
          </div>
        </div>

        <div ref={setBlockRef(4)} className={`${paperPad} border-b-0`}>
          <div className="os-asterisk-deco absolute right-8 top-8 text-4xl font-black">*</div>
          <div className="os-brutal-num-sub mb-4">17.05</div>
          <h3 className="os-section-title mb-3 text-sm lg:text-base">EVENTOS ESPECIALES</h3>
          <div className="space-y-3 border-l-4 border-[var(--os-orange)] pl-5 lg:pl-6">
            <div className="space-y-3 os-body">
              <p>
                Conducción en vivo, tribunas, desafíos, karaoke y juegos que te hacen gritar de
                risa.
              </p>
              <p className="os-body-strong font-black">
                Si te animás, te convertís en protagonista.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
