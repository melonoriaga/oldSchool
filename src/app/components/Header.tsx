import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import gsap from 'gsap';
import { NAV_DESKTOP } from '../siteNav';
import { MobileNavScrollInner } from './MobileNavScrollInner';
import logoSticker from '../../assets/01logos/LogoStickerconReborde.png';

interface HeaderProps {
  onPostular: () => void;
  onHiddenChange?: (hidden: boolean) => void;
}

const HEADER_HIDE_Y = -100;

export function Header({ onPostular, onHiddenChange }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    gsap.set(header, { y: 0 });
    let ticking = false;
    let lastHidden: boolean | null = null;

    const syncHeaderToHero = () => {
      const hero = document.getElementById('hero');
      if (!hero) return;
      const shouldHide = hero.getBoundingClientRect().bottom < 2;
      if (lastHidden === shouldHide) return;
      lastHidden = shouldHide;
      onHiddenChange?.(shouldHide);
      gsap.to(header, {
        y: shouldHide ? HEADER_HIDE_Y : 0,
        duration: 0.22,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        syncHeaderToHero();
        ticking = false;
      });
    };

    syncHeaderToHero();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      gsap.killTweensOf(header);
      gsap.set(header, { clearProps: 'transform' });
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'auto', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header ref={headerRef} className="fixed top-0 left-0 right-0 os-surface border-b-4 border-black z-50">
      <div className="flex items-center justify-between p-4 lg:px-8">
        {/* Logo */}
        <button
          type="button"
          onClick={() => scrollToSection('hero')}
          className="cursor-pointer transition-opacity hover:opacity-70"
        >
          <img
            src={logoSticker}
            alt="Old School Regresados"
            className="h-10 w-auto object-contain sm:h-11 lg:h-12"
            loading="eager"
          />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex flex-wrap items-center justify-end gap-x-4 gap-y-1 xl:gap-x-6">
          {NAV_DESKTOP.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => scrollToSection(link.id)}
              className="cursor-pointer text-[11px] font-bold tracking-wide transition-opacity hover:opacity-70 xl:text-xs"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA Button - Desktop */}
        <button type="button" onClick={onPostular} className="os-btn-primary os-btn-compact hidden lg:inline-flex">
          POSTULARME
        </button>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 transition-opacity hover:opacity-70 lg:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-8 h-8" strokeWidth={3} />
          ) : (
            <Menu className="w-8 h-8" strokeWidth={3} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden max-h-[min(88vh,40rem)] border-t-2 border-black os-surface">
          <div className="flex max-h-[min(88vh,40rem)] flex-col">
            <nav className="flex-1 overflow-y-auto overscroll-contain">
              <MobileNavScrollInner
                open={isMenuOpen}
                variant="header"
                searchInputId="os-header-mobile-nav-search"
                onSelectSection={scrollToSection}
              />
            </nav>
            <div className="border-t-2 border-black bg-[var(--os-paper)] p-4 sm:p-5">
              <button
                type="button"
                onClick={() => {
                  onPostular();
                  setIsMenuOpen(false);
                }}
                className="os-btn-primary w-full justify-center"
              >
                POSTULARME
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}