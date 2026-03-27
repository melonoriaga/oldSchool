import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/1234567890"
      target="_blank"
      rel="noopener noreferrer"
      className="os-wa-fab group fixed bottom-4 right-4 z-50 sm:bottom-8 sm:right-8"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={2.25} />
      <span className="os-wa-tooltip pointer-events-none absolute right-full top-1/2 mr-3 hidden -translate-y-1/2 whitespace-nowrap opacity-0 transition-opacity group-hover:opacity-100 sm:block">
        CONSULTAR POR WHATSAPP
      </span>
    </a>
  );
}
