import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface PostulacionFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PostulacionForm({ isOpen, onClose }: PostulacionFormProps) {
  const [formData, setFormData] = useState({
    nombre: '',
    edad: '',
    ciudad: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      setFormData({
        nombre: '',
        edad: '',
        ciudad: '',
        email: '',
        telefono: '',
        mensaje: ''
      });
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Formulario de postulación"
        className="max-h-[92vh] w-full max-w-3xl overflow-y-auto border-4 border-black os-surface shadow-[8px_8px_0_0_#000]"
      >
        {/* Header */}
        <div className="border-b-4 border-black">
          <div className="flex items-start justify-between gap-4 p-4 sm:p-6">
            <div>
              <p className="os-section-kicker">POSTULACIÓN + CUPO</p>
              <h2 className="os-section-h2 os-title-capra text-2xl sm:text-4xl">POSTULARME</h2>
            </div>
            <button type="button" onClick={onClose} className="os-modal-close" aria-label="Cerrar">
              ×
            </button>
          </div>
          <div className="os-band-cyan border-t-4 border-black px-4 py-2 sm:px-6">
            <p className="text-[0.68rem] font-black uppercase tracking-[0.12em] text-black sm:text-xs">
              Esto no es inscripción. Es postulación.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-8">
          {submitted ? (
            <div className="border-4 border-black bg-[color-mix(in_srgb,var(--os-cyan)_10%,var(--os-paper))] px-6 py-12 text-center">
              <div className="mb-6 text-6xl font-black">✓</div>
              <h3 className="mb-4 text-3xl font-black uppercase">¡Postulación enviada!</h3>
              <p className="text-base font-medium sm:text-lg">Nos pondremos en contacto pronto.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4 border-4 border-black bg-white/40 p-4 sm:p-6">
                <div>
                  <label className="mb-2 block text-[0.68rem] font-black uppercase tracking-[0.14em] sm:text-xs">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    className="w-full border-2 border-black bg-[var(--os-paper)] px-4 py-3 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--os-cyan)] focus-visible:ring-offset-2"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-[0.68rem] font-black uppercase tracking-[0.14em] sm:text-xs">
                      Edad *
                    </label>
                    <input
                      type="number"
                      required
                      value={formData.edad}
                      onChange={(e) => setFormData({ ...formData, edad: e.target.value })}
                      className="w-full border-2 border-black bg-[var(--os-paper)] px-4 py-3 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--os-cyan)] focus-visible:ring-offset-2"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[0.68rem] font-black uppercase tracking-[0.14em] sm:text-xs">
                      Ciudad *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.ciudad}
                      onChange={(e) => setFormData({ ...formData, ciudad: e.target.value })}
                      className="w-full border-2 border-black bg-[var(--os-paper)] px-4 py-3 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--os-cyan)] focus-visible:ring-offset-2"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-[0.68rem] font-black uppercase tracking-[0.14em] sm:text-xs">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full border-2 border-black bg-[var(--os-paper)] px-4 py-3 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--os-cyan)] focus-visible:ring-offset-2"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[0.68rem] font-black uppercase tracking-[0.14em] sm:text-xs">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.telefono}
                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                    className="w-full border-2 border-black bg-[var(--os-paper)] px-4 py-3 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--os-cyan)] focus-visible:ring-offset-2"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[0.68rem] font-black uppercase tracking-[0.14em] sm:text-xs">
                    Mensaje (opcional)
                  </label>
                  <textarea
                    rows={4}
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                    className="w-full resize-none border-2 border-black bg-[var(--os-paper)] px-4 py-3 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--os-cyan)] focus-visible:ring-offset-2"
                  />
                </div>
              </div>

              <button type="submit" className="os-btn-primary flex w-full min-h-12 items-center justify-center gap-2 text-sm sm:text-base">
                ENVIAR POSTULACIÓN <ArrowRight className="h-5 w-5 shrink-0" strokeWidth={2.5} />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
