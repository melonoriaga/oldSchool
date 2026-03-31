import logoBlancoCompleto from '../../assets/01logos/LogoBlancoCompleto.png';
import logoHumanNegro from '../../assets/01logos/LogoHumanNegro.png';
import { RegresadosWord } from './RegresadosWord';

const footerNav = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Old School', href: '#concepto' },
  { label: 'Regresados', href: '#generaciones' },
  { label: 'Preguntas frecuentes', href: '#faq' },
  { label: 'Solicitar reunión', href: '#meet' },
  { label: 'Postulación', href: '#postulacion' },
];

const socialLinks = [
  {
    href: 'https://www.instagram.com/oldschool.regresados/',
    label: 'Instagram',
    iconClass: 'ri-instagram-fill',
  },
  {
    href: 'https://open.spotify.com/user/31b3t7qyy26b2vnkpncb4jglnrvm?si=eba6df296e084dc2',
    label: 'Spotify',
    iconClass: 'ri-spotify-fill',
  },
  {
    href: 'https://www.tiktok.com/@oldschool.regresados?_r=1&_t=ZS-959Ne6CahOq',
    label: 'TikTok',
    iconClass: 'ri-tiktok-fill',
  },
  {
    href: 'https://www.facebook.com/oldschool.regresados?mibextid=wwXIfr&rdid=IxHJGPaMWYM1ee9C&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CcpKQ8siM%2F%3Fmibextid%3DwwXIfr%26ref%3D1#',
    label: 'Facebook',
    iconClass: 'ri-facebook-circle-fill',
  },
  {
    href: 'https://www.youtube.com/channel/UCBXzmS5NfYNY6xEGrdbneMg',
    label: 'YouTube',
    iconClass: 'ri-youtube-fill',
  },
] as const;

export function Footer() {
  const footerMarqueeItems = ['EDICION_BRAND', 'BARILOCHE', 'RETRO PREMIUM'] as const;

  return (
    <footer
      data-os-read-marker
      className="border-x-4 border-b-4 border-black bg-[var(--os-navy)] text-white"
    >
      <div className="border-b-2 border-black bg-black py-3">
        <div className="overflow-hidden">
          <div className="os-footer-reveal os-hero-marquee-track flex w-max">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex items-center whitespace-nowrap">
                {Array.from({ length: 6 }).flatMap((_, repeatIdx) =>
                  footerMarqueeItems.map((label, itemIdx) => {
                    const toneClass =
                      label === 'BARILOCHE' ? 'text-[var(--os-cyan)]' : 'text-[var(--os-paper)]';
                    return (
                      <span key={`${copy}-${repeatIdx}-${itemIdx}`} className="flex items-center">
                        <span
                          className={`px-3 text-[0.65rem] font-black uppercase tracking-[0.16em] ${toneClass} sm:text-xs`}
                        >
                          {label === 'EDICION_BRAND' ? (
                            <span className="inline-flex items-center gap-1">
                              EDICIÓN{' '}
                              <RegresadosWord
                                variant="split"
                                className="text-[0.75em] align-[0.02em]"
                              />
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
          <div className="os-footer-reveal space-y-6 sm:p-8 lg:col-span-5 flex flex-col items-start justify-start">
            <div className="space-y-4 flex flex-col items-start justify-start">
              <img
                src={logoBlancoCompleto}
                alt="Old School Regresados"
                className="h-30 w-auto object-contain sm:h-36 lg:h-40"
                loading="lazy"
              />

              <span className="inline-flex rounded-md bg-white px-2 py-1">
                <img
                  src={logoHumanNegro}
                  alt="Human"
                  className="h-10 w-auto object-contain sm:h-12 lg:h-14"
                  loading="lazy"
                />
              </span>
            </div>

            <p className="max-w-md text-2xl font-black uppercase leading-[1.05] tracking-tight text-white sm:text-3xl lg:text-4xl">
              NO ES CIERRE.
              <br />
              ES LA PUERTA DE ENTRADA.
            </p>
            <p className="text-sm font-medium leading-relaxed text-white/80 sm:max-w-md">
              OLD SCHOOL® — REGRESADOS es un formato experiencial original, con sistema y narrativa
              propia, protegido por derechos de autor. Todo su contenido, diseño y metodología están
              registrados como obra intelectual. Su uso es exclusivo bajo licencia oficial, y
              cualquier copia o adaptación sin autorización constituye una infracción. No es solo un
              viaje: es un sistema registrado con identidad protegida.
            </p>
            <a href="#postulacion" className="os-btn-primary inline-flex">
              Ir a postulación →
            </a>
          </div>

          {/* Navegación */}
          <nav className="os-footer-reveal  p-6 sm:p-8 lg:col-span-3 " aria-label="En el sitio">
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
          <div className="os-footer-reveal space-y-5  p-6 sm:p-8 lg:col-span-4 ">
            <h3 className="font-black uppercase  text-xs">Contacto</h3>
            <div className="space-y-2 text-sm font-medium text-white/85">
              <a
                href="https://wa.me/5491128935992"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-b-2 border-white/35 pb-1 font-black uppercase tracking-wide text-sm text-white/90 transition-colors hover:text-white"
                aria-label="Abrir WhatsApp para contactar"
              >
                WhatsApp
              </a>
            </div>

            <div>
              <h3 className="mb-3 font-black uppercase  text-xs">Seguinos</h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center text-white transition-colors hover:border-white hover:bg-white hover:text-[var(--os-navy)]"
                    aria-label={social.label}
                  >
                    <i className={`${social.iconClass} text-[1.35rem] leading-none`} aria-hidden />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Barra legal / copyright */}
      <div className="os-footer-reveal border-t-2 border-black bg-black px-5 py-6 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-white/55 sm:text-left">
            © {new Date().getFullYear()} Old School® —{' '}
            <RegresadosWord variant="split" className="text-[0.9em]" />
          </p>
          <p className="text-center text-xs text-white/45 sm:text-right">
            Buenos Aires · Bariloche · Experiencia registrada
          </p>
        </div>
      </div>
    </footer>
  );
}
