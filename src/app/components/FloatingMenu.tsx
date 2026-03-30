import { useState, useEffect } from 'react';
import { MobileNavScrollInner } from './MobileNavScrollInner';

interface FloatingMenuProps {
  onPostular: () => void;
  visible: boolean;
}

export function FloatingMenu({ onPostular, visible }: FloatingMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!visible) setIsOpen(false);
  }, [visible]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'auto', block: 'start' });
      setIsOpen(false);
    }
  };

  return (
    /**
     * Anchor: fixed position. Dropdown is absolute inside this container so it
     * always opens directly below the button — no z-index fights.
     */
    <div
      className={`fixed right-4 top-4 z-50 sm:right-8 sm:top-8 transition-[opacity,transform] duration-300 ease-out ${
        visible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 -translate-y-2 pointer-events-none'
      }`}
      aria-hidden={!visible}
    >
      {/* Hamburger button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="os-fab-menu"
        aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={isOpen}
      >
        <div className="flex h-7 w-7 flex-col items-center justify-center gap-[6px]">
          <span
            className="block h-[3px] w-full origin-center bg-white transition-transform duration-200"
            style={isOpen ? { transform: 'translateY(4.5px) rotate(45deg)' } : undefined}
          />
          <span
            className="block h-[3px] w-full origin-center bg-white transition-transform duration-200"
            style={isOpen ? { transform: 'translateY(-4.5px) rotate(-45deg)' } : undefined}
          />
        </div>
      </button>

      {/* Dropdown: absolute inside FAB anchor → always below the button */}
      <div
        className={`absolute right-0 top-full mt-2 w-[min(92vw,340px)] overflow-hidden border-2 border-black os-surface shadow-[4px_4px_0_0_#000] transition-[opacity,transform] duration-200 ease-out ${
          isOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex max-h-[min(78vh,580px)] flex-col">
          <nav className="flex-1 overflow-y-auto overscroll-contain">
            <MobileNavScrollInner
              open={isOpen}
              variant="fab"
              searchInputId="os-floating-nav-search"
              onSelectSection={scrollToSection}
            />
          </nav>
          <div className="border-t-2 border-black bg-[var(--os-paper)] p-3">
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
    </div>
  );
}
