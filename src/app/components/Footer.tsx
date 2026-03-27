import { Instagram, Facebook, Twitter } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import logoBlancoCompleto from '../../assets/01logos/LogoBlancoCompleto.png';
import logoHumanNegro from '../../assets/01logos/LogoHumanNegro.png';
import { RegresadosWord } from './RegresadosWord';

gsap.registerPlugin(ScrollTrigger);

const footerNav = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Concepto', href: '#concepto' },
  { label: 'Experiencia', href: '#producto' },
  { label: 'Comunidad', href: '#comunidad' },
  { label: 'Museo', href: '#museo' },
  { label: 'Postulación', href: '#postulacion' },
];

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const footerMarqueeItems = ['EDICION_BRAND', 'BARILOCHE', 'RETRO PREMIUM'] as const;

  useEffect(() => {
    const root = footerRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      gsap.from(root.querySelectorAll('.os-footer-reveal'), {
        scrollTrigger: {
          trigger: root,
          start: 'top 90%',
        },
        opacity: 0,
        y: 28,
        duration: 0.65,
        stagger: 0.06,
        ease: 'power3.out',
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      data-os-read-marker
      className="border-x-4 border-b-4 border-black bg-[var(--os-navy)] text-white"
    >
      <div className="border-b-4 border-black bg-black py-3">
        <div className="overflow-hidden">
          <div className="os-footer-reveal os-hero-marquee-track flex w-max">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex items-center whitespace-nowrap">
                {Array.from({ length: 6 }).flatMap((_, repeatIdx) =>
                  footerMarqueeItems.map((label, itemIdx) => {
                    const toneClass =
                      label === 'BARILOCHE'
                          ? 'text-[var(--os-cyan)]'
                          : 'text-[var(--os-paper)]';
                    return (
                      <span key={`${copy}-${repeatIdx}-${itemIdx}`} className="flex items-center">
                        <span
                          className={`px-3 text-[0.65rem] font-black uppercase tracking-[0.16em] ${toneClass} sm:text-xs`}
                        >
                          {label === 'EDICION_BRAND' ? (
                            <span className="inline-flex items-center gap-1">
                              EDICIÓN <RegresadosWord variant="split" className="text-[0.75em] align-[0.02em]" />
                            </span>
                          ) : (
                            label
                          )}
                        </span>
                        <span className="text-[var(--os-cyan)]" aria-hidden>
                          ✦
                        </span>
                      </span>
                    );
                  }),
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-14">
          {/* Marca + CTA */}
          <div className="os-footer-reveal space-y-6 border-4 border-black bg-white/5 p-6 sm:p-8 lg:col-span-5 lg:p-10">
            <div className="space-y-4">
              <img
                src={logoBlancoCompleto}
                alt="Old School Regresados"
                className="h-20 w-auto object-contain sm:h-24 lg:h-28"
                loading="lazy"
              />
              <div className="inline-flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/65">
                  by
                </span>
                <span className="inline-flex rounded-md bg-white px-2 py-1">
                  <img
                    src={logoHumanNegro}
                    alt="Human"
                    className="h-4 w-auto object-contain sm:h-5"
                    loading="lazy"
                  />
                </span>
              </div>
            </div>
            <p className="max-w-md text-2xl font-black uppercase leading-[1.05] tracking-tight text-white sm:text-3xl lg:text-4xl">
              NO ES CIERRE.
              <br />
              ES LA PUERTA DE ENTRADA.
            </p>
            <p className="text-sm font-medium leading-relaxed text-white/80 sm:max-w-sm">
              Formato experiencial original y sistema registrado. Lo esencial para contacto y
              siguiente paso.
            </p>
            <a href="#postulacion" className="os-btn-primary inline-flex">
              Ir a postulación →
            </a>
          </div>

          {/* Navegación */}
          <nav
            className="os-footer-reveal border-4 border-black bg-white/5 p-6 sm:p-8 lg:col-span-3 lg:p-10"
            aria-label="En el sitio"
          >
            <h3 className="mb-5 font-black uppercase tracking-wider text-[0.65rem] text-[var(--os-cyan)] sm:text-xs">
              Sitio
            </h3>
            <ul className="space-y-3">
              {footerNav.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="inline-block border-b-2 border-white/35 pb-1 font-black uppercase tracking-wide text-sm text-white/90 transition-colors hover:text-white"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contacto */}
          <div className="os-footer-reveal space-y-5 border-4 border-black bg-white/5 p-6 sm:p-8 lg:col-span-4 lg:p-10">
            <h3 className="font-black uppercase tracking-wider text-white/60 text-xs">
              Contacto
            </h3>
            <div className="space-y-2 text-sm font-medium text-white/85">
              <a
                href="mailto:info@oldschoolregresados.com"
                className="block transition-opacity hover:text-white"
              >
                info@oldschoolregresados.com
              </a>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="block font-black text-[var(--os-cyan)] transition-opacity hover:text-white"
              >
                WhatsApp → +54 9 11 1234-5678
              </a>
            </div>

            <div>
              <h3 className="mb-3 font-black uppercase tracking-wider text-white/60 text-xs">
                Seguinos
              </h3>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#"
                  className="flex h-12 w-12 items-center justify-center border-2 border-white/80 text-white transition-colors hover:border-white hover:bg-white hover:text-[var(--os-navy)]"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" strokeWidth={2.25} />
                </a>
                <a
                  href="#"
                  className="flex h-12 w-12 items-center justify-center border-2 border-white/80 text-white transition-colors hover:border-white hover:bg-white hover:text-[var(--os-navy)]"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" strokeWidth={2.25} />
                </a>
                <a
                  href="#"
                  className="flex h-12 w-12 items-center justify-center border-2 border-white/80 text-white transition-colors hover:border-white hover:bg-white hover:text-[var(--os-navy)]"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" strokeWidth={2.25} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Barra legal / copyright */}
      <div className="os-footer-reveal border-t-4 border-black bg-black px-5 py-6 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-white/55 sm:text-left">
            © {new Date().getFullYear()} Old School® — <RegresadosWord variant="split" className="text-[0.9em]" />
          </p>
          <p className="text-center text-xs text-white/45 sm:text-right">
            Buenos Aires · Bariloche · Experiencia registrada
          </p>
        </div>
      </div>
    </footer>
  );
}
