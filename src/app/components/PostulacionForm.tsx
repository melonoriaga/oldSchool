import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../lib/firebase';

interface PostulacionFormProps {
  isOpen: boolean;
  onClose: () => void;
}

type FormData = {
  nombre: string;
  edad: string;
  ciudad: string;
  email: string;
  telefono: string;
  mensaje: string;
};

type Errors = Partial<Record<'nombre' | 'email' | 'telefono', string>>;

const EMPTY: FormData = {
  nombre: '',
  edad: '',
  ciudad: '',
  email: '',
  telefono: '',
  mensaje: '',
};

function validate(data: FormData): Errors {
  const errs: Errors = {};
  if (!data.nombre.trim()) errs.nombre = 'El nombre es obligatorio.';
  if (!data.email.trim()) {
    errs.email = 'El email es obligatorio.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errs.email = 'Ingresá un email válido.';
  }
  if (!data.telefono.trim()) errs.telefono = 'El teléfono es obligatorio.';
  return errs;
}

const inputBase =
  'w-full rounded-xl border-2 px-4 py-3 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition-colors duration-150';
const inputOk    = 'border-black bg-[var(--os-paper)] focus-visible:ring-[var(--os-cyan)]';
const inputError = 'border-red-500 bg-red-50 text-red-900 placeholder-red-300 focus-visible:ring-red-400';

export function PostulacionForm({ isOpen, onClose }: PostulacionFormProps) {
  const [formData, setFormData] = useState<FormData>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [attempted, setAttempted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const errorBannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  // Reset when closed
  useEffect(() => {
    if (!isOpen) {
      setFormData(EMPTY);
      setErrors({});
      setAttempted(false);
      setSubmitting(false);
      setSubmitted(false);
    }
  }, [isOpen]);

  const update = (field: keyof FormData, value: string) => {
    const next = { ...formData, [field]: value };
    setFormData(next);
    if (attempted) setErrors(validate(next));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAttempted(true);
    const errs = validate(formData);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      // Scroll to error banner
      setTimeout(() => errorBannerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 50);
      return;
    }
    setSubmitting(true);
    try {
      await addDoc(collection(db, 'leads'), {
        ...formData,
        status: 'new',
        isNew: true,
        notes: [],
        source: 'form',
        createdAt: serverTimestamp(),
      });
      setSubmitted(true);
    } catch {
      setSubmitting(false);
      alert('Ocurrió un error al enviar. Intentá de nuevo.');
    }
  };

  const fieldClass = (field?: keyof Errors) =>
    `${inputBase} ${field && errors[field] ? inputError : inputOk}`;

  const ErrorMsg = ({ field }: { field: keyof Errors }) =>
    errors[field] ? (
      <p role="alert" className="mt-1.5 flex items-center gap-1 text-[0.7rem] font-bold text-red-600">
        <span className="flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-red-500 text-[0.55rem] text-white" aria-hidden>!</span>
        {errors[field]}
      </p>
    ) : null;

  if (!isOpen) return null;

  const errorCount = Object.keys(errors).length;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4"
      onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Formulario de postulación"
        className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-3xl border-2 border-black os-surface shadow-[8px_8px_0_0_#000]"
      >
        {/* Header */}
        <div className="border-b-2 border-black">
          <div className="flex items-start justify-between gap-4 p-4 sm:p-6">
            <div>
              <p className="os-section-kicker">POSTULACIÓN + CUPO</p>
              <h2 className="os-section-h2 os-title-capra text-2xl sm:text-4xl">POSTULARME</h2>
            </div>
            <button type="button" onClick={onClose} className="os-modal-close" aria-label="Cerrar">×</button>
          </div>
          <div className="os-band-cyan border-t-2 border-black px-4 py-2 sm:px-6">
            <p className="text-[0.68rem] font-black uppercase tracking-[0.12em] text-black sm:text-xs">
              Esto no es inscripción. Es postulación.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-8">
          {submitted ? (
            <div className="rounded-2xl border-2 border-black bg-[color-mix(in_srgb,var(--os-cyan)_10%,var(--os-paper))] px-6 py-14 text-center">
              <div className="mb-4 flex justify-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-black bg-[var(--os-cyan)] text-3xl text-black shadow-[4px_4px_0_0_#000]">✓</span>
              </div>
              <h3 className="mb-3 text-3xl font-black uppercase">¡Postulación enviada!</h3>
              <p className="text-base font-medium sm:text-lg">Nos pondremos en contacto pronto.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">

              {/* Error summary — visible only after submit attempt */}
              <div ref={errorBannerRef}>
                {attempted && errorCount > 0 && (
                  <div
                    role="alert"
                    className="flex items-center gap-3 rounded-xl border-2 border-red-500 bg-red-50 px-4 py-3"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-500 text-[0.7rem] font-black text-white">
                      {errorCount}
                    </span>
                    <p className="text-sm font-bold text-red-700">
                      {errorCount === 1
                        ? 'Falta completar 1 campo obligatorio.'
                        : `Faltan completar ${errorCount} campos obligatorios.`}
                    </p>
                  </div>
                )}
              </div>

              <div className="space-y-4 rounded-2xl border-2 border-black bg-white/40 p-4 sm:p-6">

                {/* Nombre */}
                <div>
                  <label className="mb-2 flex items-center gap-2 text-[0.68rem] font-black uppercase tracking-[0.14em] sm:text-xs">
                    Nombre <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.nombre}
                    onChange={(e) => update('nombre', e.target.value)}
                    placeholder="Tu nombre completo"
                    className={fieldClass('nombre')}
                    aria-invalid={!!errors.nombre}
                  />
                  <ErrorMsg field="nombre" />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-[0.68rem] font-black uppercase tracking-[0.14em] sm:text-xs">
                      Edad <span className="font-medium normal-case tracking-normal opacity-50">(opcional)</span>
                    </label>
                    <input
                      type="number"
                      value={formData.edad}
                      onChange={(e) => update('edad', e.target.value)}
                      placeholder="Tu edad"
                      className={fieldClass()}
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-[0.68rem] font-black uppercase tracking-[0.14em] sm:text-xs">
                      Ciudad <span className="font-medium normal-case tracking-normal opacity-50">(opcional)</span>
                    </label>
                    <input
                      type="text"
                      value={formData.ciudad}
                      onChange={(e) => update('ciudad', e.target.value)}
                      placeholder="Tu ciudad"
                      className={fieldClass()}
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="mb-2 flex items-center gap-2 text-[0.68rem] font-black uppercase tracking-[0.14em] sm:text-xs">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => update('email', e.target.value)}
                    placeholder="tu@email.com"
                    className={fieldClass('email')}
                    aria-invalid={!!errors.email}
                  />
                  <ErrorMsg field="email" />
                </div>

                {/* Teléfono */}
                <div>
                  <label className="mb-2 flex items-center gap-2 text-[0.68rem] font-black uppercase tracking-[0.14em] sm:text-xs">
                    Teléfono <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.telefono}
                    onChange={(e) => update('telefono', e.target.value)}
                    placeholder="+54 11 1234-5678"
                    className={fieldClass('telefono')}
                    aria-invalid={!!errors.telefono}
                  />
                  <ErrorMsg field="telefono" />
                </div>

                {/* Mensaje */}
                <div>
                  <label className="mb-2 block text-[0.68rem] font-black uppercase tracking-[0.14em] sm:text-xs">
                    Mensaje <span className="font-medium normal-case tracking-normal opacity-50">(opcional)</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formData.mensaje}
                    onChange={(e) => update('mensaje', e.target.value)}
                    placeholder="¿Algo que quieras contarnos?"
                    className={`${fieldClass()} resize-none`}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="os-btn-primary flex w-full min-h-12 items-center justify-center gap-2 text-sm sm:text-base disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {submitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    ENVIANDO…
                  </>
                ) : (
                  <>
                    ENVIAR POSTULACIÓN
                    <ArrowRight className="h-5 w-5 shrink-0" strokeWidth={2.5} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
