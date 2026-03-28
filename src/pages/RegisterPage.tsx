import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router';
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  setDoc,
  updateDoc,
  Timestamp,
} from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Eye, EyeOff, Loader2, ArrowRight } from 'lucide-react';
import { db, auth } from '../lib/firebase';
import logo from '../assets/01logos/LogoStickerconReborde.png';

type PageState = 'loading' | 'valid' | 'used' | 'expired' | 'invalid' | 'success';

type FormData = {
  nombre: string;
  email: string;
  password: string;
  confirm: string;
};

type Errors = Partial<Record<keyof FormData, string>>;

const EMPTY: FormData = { nombre: '', email: '', password: '', confirm: '' };

function validate(data: FormData): Errors {
  const errs: Errors = {};
  if (!data.nombre.trim()) errs.nombre = 'El nombre es obligatorio.';
  if (!data.email.trim()) {
    errs.email = 'El email es obligatorio.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errs.email = 'Ingresá un email válido.';
  }
  if (!data.password) {
    errs.password = 'La contraseña es obligatoria.';
  } else if (data.password.length < 6) {
    errs.password = 'Mínimo 6 caracteres.';
  }
  if (!data.confirm) {
    errs.confirm = 'Confirmá la contraseña.';
  } else if (data.confirm !== data.password) {
    errs.confirm = 'Las contraseñas no coinciden.';
  }
  return errs;
}

/* ── Shared styles ─────────────────────────────────────────── */
const inputBase =
  'w-full rounded-xl border-2 bg-[var(--os-paper,#f5f1e8)] px-4 py-3 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
const inputOk    = 'border-gray-300 focus:border-black focus:ring-black';
const inputError = 'border-red-500 bg-red-50 text-red-900 focus:border-red-500 focus:ring-red-400';

function ErrorMsg({ msg }: { msg?: string }) {
  if (!msg) return null;
  return (
    <p role="alert" className="mt-1.5 flex items-center gap-1.5 text-[0.7rem] font-bold text-red-600">
      <span className="flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-red-500 text-[0.55rem] text-white">!</span>
      {msg}
    </p>
  );
}

/* ── Status screens ────────────────────────────────────────── */
function StatusScreen({ emoji, title, message, action }: {
  emoji: string; title: string; message: string;
  action?: { label: string; href: string };
}) {
  return (
    <div
      className="flex min-h-screen items-center justify-center px-4 py-12"
      style={{ backgroundColor: 'var(--os-paper, #f5f1e8)' }}
    >
      <div className="w-full max-w-sm text-center">
        <img src={logo} alt="Old School Regresados" className="mx-auto mb-6 h-16 w-auto drop-shadow-md" />
        <div className="rounded-3xl border-4 border-black bg-white p-8 shadow-[6px_6px_0_0_#000]">
          <div className="mb-4 text-5xl">{emoji}</div>
          <h1 className="text-xl font-black uppercase tracking-tight text-gray-900">{title}</h1>
          <p className="mt-2 text-sm text-gray-500">{message}</p>
          {action && (
            <a
              href={action.href}
              className="mt-5 inline-flex items-center gap-2 rounded-xl border-2 border-black bg-gray-900 px-5 py-2.5 text-sm font-black uppercase tracking-widest text-white shadow-[3px_3px_0_0_#000] transition-transform hover:-translate-y-0.5"
            >
              {action.label} <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function LoadingScreen() {
  return (
    <div
      className="flex min-h-screen items-center justify-center"
      style={{ backgroundColor: 'var(--os-paper, #f5f1e8)' }}
    >
      <Loader2 className="h-10 w-10 animate-spin text-gray-400" />
    </div>
  );
}

/* ── Main component ────────────────────────────────────────── */
export function RegisterPage() {
  const { token } = useParams<{ token: string }>();
  const navigate = useNavigate();
  const [pageState, setPageState] = useState<PageState>('loading');
  const [inviteId, setInviteId]   = useState('');
  const [form, setForm]           = useState<FormData>(EMPTY);
  const [errors, setErrors]       = useState<Errors>({});
  const [attempted, setAttempted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [showPwd, setShowPwd]     = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [serverError, setServerError] = useState('');
  const errorBannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!token) { setPageState('invalid'); return; }
    getDocs(query(collection(db, 'invites'), where('token', '==', token))).then((snap) => {
      if (snap.empty) { setPageState('invalid'); return; }
      const invDoc = snap.docs[0];
      const inv = invDoc.data();
      setInviteId(invDoc.id);
      if (inv.isUsed)                              { setPageState('used');    return; }
      if (inv.expiresAt?.toDate() < new Date())    { setPageState('expired'); return; }
      setPageState('valid');
    });
  }, [token]);

  const update = (field: keyof FormData, value: string) => {
    const next = { ...form, [field]: value };
    setForm(next);
    if (attempted) setErrors(validate(next));
    setServerError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAttempted(true);
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      setTimeout(() => errorBannerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 50);
      return;
    }
    if (!inviteId) return;
    setSubmitting(true);
    setServerError('');

    // Step 1 — create Firebase Auth account
    let newUser;
    try {
      const cred = await createUserWithEmailAndPassword(auth, form.email, form.password);
      newUser = cred.user;
    } catch (err: unknown) {
      const code = (err as { code?: string }).code ?? '';
      if (code === 'auth/email-already-in-use') {
        setServerError('Este email ya tiene una cuenta registrada.');
      } else {
        setServerError('Error al crear la cuenta. Intentá de nuevo.');
      }
      setSubmitting(false);
      return;
    }

    // Step 2 — write to Firestore (force token refresh first to avoid timing issues)
    try {
      await newUser.getIdToken(true);
      await setDoc(doc(db, 'admins', newUser.uid), {
        email: form.email,
        nombre: form.nombre.trim(),
        createdAt: Timestamp.now(),
        inviteToken: token,
      });
      await updateDoc(doc(db, 'invites', inviteId), {
        isUsed: true,
        usedAt: Timestamp.now(),
        usedBy: form.email,
      });
      navigate('/admin/leads', { replace: true });
    } catch (err) {
      console.error('[RegisterPage] Firestore setup error:', err);
      // Auth account exists — navigate anyway; admin panel will show access denied
      // until rules are deployed or root manually adds the user.
      setServerError(
        'Tu cuenta fue creada pero hubo un error al guardar el acceso en la base de datos. ' +
        'Contactá al administrador para habilitarte.'
      );
      setSubmitting(false);
    }
  };

  const fc = (field: keyof Errors) =>
    `${inputBase} ${errors[field] ? inputError : inputOk}`;

  /* ── State gates ─────────────────────────────────────────── */
  if (pageState === 'loading') return <LoadingScreen />;
  if (pageState === 'used')
    return <StatusScreen emoji="🔒" title="Link ya utilizado" message="Este link de invitación ya fue usado. Contactá al administrador si necesitás un acceso nuevo." />;
  if (pageState === 'expired')
    return <StatusScreen emoji="⏰" title="Link expirado" message="Este link venció. Los links son válidos por 24 horas. Contactá al administrador." />;
  if (pageState === 'invalid')
    return <StatusScreen emoji="❌" title="Link inválido" message="Este link de invitación no existe o no es válido." />;

  const errorCount = Object.keys(errors).length;

  /* ── Form ────────────────────────────────────────────────── */
  return (
    <div
      className="min-h-screen px-4 py-12"
      style={{ backgroundColor: 'var(--os-paper, #f5f1e8)' }}
    >
      <div className="mx-auto max-w-md">
        {/* Logo + title */}
        <div className="mb-8 flex flex-col items-center gap-3 text-center">
          <img src={logo} alt="Old School Regresados" className="h-20 w-auto drop-shadow-md" />
          <div>
            <h1 className="text-lg font-black uppercase tracking-widest text-gray-900">Crear cuenta de administrador</h1>
            <p className="text-xs font-medium text-gray-500">Usá tus datos para activar tu acceso al panel.</p>
          </div>
        </div>

        {/* Card */}
        <div className="rounded-3xl border-4 border-black bg-white p-6 shadow-[6px_6px_0_0_#000] sm:p-8">

          {/* Error banner */}
          <div ref={errorBannerRef}>
            {attempted && errorCount > 0 && (
              <div role="alert" className="mb-5 flex items-center gap-3 rounded-xl border-2 border-red-500 bg-red-50 px-4 py-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-500 text-[0.7rem] font-black text-white">
                  {errorCount}
                </span>
                <p className="text-sm font-bold text-red-700">
                  {errorCount === 1 ? 'Falta completar 1 campo.' : `Faltan completar ${errorCount} campos.`}
                </p>
              </div>
            )}
            {serverError && (
              <div role="alert" className="mb-5 rounded-xl border-2 border-red-500 bg-red-50 px-4 py-3">
                <p className="text-sm font-bold text-red-700">{serverError}</p>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} noValidate className="space-y-4">

            {/* Nombre */}
            <div>
              <label className="mb-1.5 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-700">
                Nombre completo
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text" autoComplete="name" value={form.nombre}
                placeholder="Tu nombre completo"
                onChange={(e) => update('nombre', e.target.value)}
                className={fc('nombre')} aria-invalid={!!errors.nombre}
              />
              <ErrorMsg msg={errors.nombre} />
            </div>

            {/* Email */}
            <div>
              <label className="mb-1.5 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-700">
                Email
                <span className="text-red-500">*</span>
              </label>
              <input
                type="email" autoComplete="email" value={form.email}
                placeholder="tu@email.com"
                onChange={(e) => update('email', e.target.value)}
                className={fc('email')} aria-invalid={!!errors.email}
              />
              <ErrorMsg msg={errors.email} />
            </div>

            {/* Password */}
            <div>
              <label className="mb-1.5 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-700">
                Contraseña
                <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type={showPwd ? 'text' : 'password'} autoComplete="new-password"
                  value={form.password} placeholder="Mínimo 6 caracteres"
                  onChange={(e) => update('password', e.target.value)}
                  className={`${fc('password')} pr-11`} aria-invalid={!!errors.password}
                />
                <button
                  type="button" tabIndex={-1}
                  onClick={() => setShowPwd((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
                  aria-label={showPwd ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                >
                  {showPwd ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              <ErrorMsg msg={errors.password} />
            </div>

            {/* Confirm password */}
            <div>
              <label className="mb-1.5 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-700">
                Confirmar contraseña
                <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type={showConfirm ? 'text' : 'password'} autoComplete="new-password"
                  value={form.confirm} placeholder="Repetí la contraseña"
                  onChange={(e) => update('confirm', e.target.value)}
                  className={`${fc('confirm')} pr-11`} aria-invalid={!!errors.confirm}
                />
                <button
                  type="button" tabIndex={-1}
                  onClick={() => setShowConfirm((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
                  aria-label={showConfirm ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                >
                  {showConfirm ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              <ErrorMsg msg={errors.confirm} />
            </div>

            {/* Submit */}
            <button
              type="submit" disabled={submitting}
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl border-2 border-black bg-gray-900 py-3 text-sm font-black uppercase tracking-widest text-white shadow-[3px_3px_0_0_#000] transition-transform hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? (
                <><Loader2 className="h-4 w-4 animate-spin" /> Creando cuenta…</>
              ) : (
                <>Activar acceso <ArrowRight className="h-4 w-4" strokeWidth={2.5} /></>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
