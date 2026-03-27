import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { NAV_FULL } from '../siteNav';

interface FloatingMenuProps {
  onPostular: () => void;
}

export function FloatingMenu({ onPostular }: FloatingMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const heroChipLabel = new Intl.DateTimeFormat('es-AR', { month: 'short', year: 'numeric' })
    .format(new Date())
    .replace(/\./g, '')
    .toUpperCase();

  useEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;
    gsap.set(menu, { y: -100, opacity: 0 });

    let ticking = false;
    let lastShown: boolean | null = null;

    const syncMenuToHero = () => {
      const hero = document.getElementById('hero');
      if (!hero) return;
      const shouldShow = hero.getBoundingClientRect().bottom < 2;
      if (lastShown === shouldShow) return;
      lastShown = shouldShow;

      gsap.to(menu, {
        y: shouldShow ? 0 : -100,
        opacity: shouldShow ? 1 : 0,
        duration: shouldShow ? 0.34 : 0.22,
        ease: shouldShow ? 'power2.out' : 'power2.inOut',
        overwrite: 'auto',
        onComplete: () => {
          if (!shouldShow) setIsOpen(false);
        },
      });
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        syncMenuToHero();
        ticking = false;
      });
    };

    syncMenuToHero();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      gsap.killTweensOf(menu);
      gsap.set(menu, { clearProps: 'transform,opacity' });
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      gsap.to(line1Ref.current, {
        rotation: 45,
        y: 4,
        duration: 0.3,
        ease: 'power2.out',
      });
      gsap.to(line2Ref.current, {
        rotation: -45,
        y: -4,
        duration: 0.3,
        ease: 'power2.out',
      });

      gsap.fromTo(
        navRef.current,
        { opacity: 0, scale: 0.8, y: -20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.3, ease: 'back.out(1.7)' },
      );
    } else {
      gsap.to(line1Ref.current, {
        rotation: 0,
        y: 0,
        duration: 0.3,
        ease: 'power2.out',
      });
      gsap.to(line2Ref.current, {
        rotation: 0,
        y: 0,
        duration: 0.3,
        ease: 'power2.out',
      });

      if (navRef.current) {
        gsap.to(navRef.current, {
          opacity: 0,
          scale: 0.8,
          y: -20,
          duration: 0.2,
          ease: 'power2.in',
        });
      }
    }
  }, [isOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'auto', block: 'start' });
      setIsOpen(false);
    }
  };

  return (
    <>
      <div
        ref={menuRef}
        className="pointer-events-none fixed top-4 right-4 z-50 flex flex-row-reverse items-start gap-2 sm:top-8 sm:right-8 sm:gap-3"
      >
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="os-fab-menu pointer-events-auto shrink-0"
          aria-label="Abrir menú"
        >
          <div className="flex h-8 w-8 flex-col items-center justify-center gap-2">
            <div
              ref={line1Ref}
              className="h-1 w-full bg-white"
              style={{ transformOrigin: 'center' }}
            />
            <div
              ref={line2Ref}
              className="h-1 w-full bg-white"
              style={{ transformOrigin: 'center' }}
            />
          </div>
        </button>

        <button
          type="button"
          onClick={() => scrollToSection('hero')}
          className="os-fab-hero-chip pointer-events-auto"
          aria-label="Volver al inicio"
        >
          <span className="max-w-[4.5rem] leading-tight">{heroChipLabel}</span>
          <span className="mt-0.5 block text-[0.55rem] font-black opacity-80">↑ INICIO</span>
        </button>
      </div>

      {isOpen && (
        <div
          ref={navRef}
          className="fixed top-24 right-4 z-40 max-h-[min(70vh,540px)] max-w-[calc(100vw-2rem)] overflow-hidden border-4 border-black os-surface shadow-2xl sm:top-28 sm:right-8"
          style={{ opacity: 0 }}
        >
          <div className="flex max-h-[min(70vh,540px)] min-w-[min(100%,280px)] flex-col sm:min-w-[250px]">
            <nav className="flex-1 overflow-y-auto overscroll-contain">
              {NAV_FULL.map((link, index) => (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => scrollToSection(link.id)}
                  className={`flex w-full min-h-12 items-center px-6 py-3 text-left text-sm font-bold transition-colors hover:bg-black/[0.06] sm:px-8 sm:py-4 ${
                    index < NAV_FULL.length - 1 ? 'border-b-2 border-black' : ''
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>
            <div className="border-t-4 border-black bg-[var(--os-paper)] p-3 sm:p-4">
              <button
                type="button"
                onClick={() => {
                  onPostular();
                  setIsOpen(false);
                }}
                className="os-btn-primary w-full justify-center text-center"
              >
                POSTULARME
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
