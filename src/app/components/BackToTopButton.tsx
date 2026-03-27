interface BackToTopButtonProps {
  visible: boolean;
}

export function BackToTopButton({ visible }: BackToTopButtonProps) {
  const scrollToTop = () => {
    const hero = document.getElementById('hero');
    if (hero) hero.scrollIntoView({ behavior: 'smooth', block: 'start' });
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    /**
     * Mobile: bottom-right, just above the WhatsApp FAB (bottom-[5rem]).
     * Desktop (sm+): centered at the bottom of the screen.
     */
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Volver al inicio"
      className={`os-fab-back-top fixed z-50
        bottom-[5rem] right-4
        sm:bottom-8 sm:right-auto sm:left-1/2 sm:-translate-x-1/2
        transition-[opacity,transform] duration-300 ease-out
        ${visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-2 pointer-events-none'}
      `}
    >
      ↑
    </button>
  );
}
