import { useState, useEffect } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router';
import { Eye, EyeOff, Loader2 } from 'lucide-react';
import { auth } from '../../lib/firebase';
import { useAuth } from '../hooks/useAuth';
import logo from '../../assets/01logos/LogoStickerconReborde.png';

export function LoginPage() {
  const [email, setEmail] = useState('melonoriaga@gmail.com');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { isAdmin } = useAuth();

  useEffect(() => {
    if (isAdmin) navigate('/admin/leads', { replace: true });
  }, [isAdmin, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/admin/leads');
    } catch {
      setError('Email o contraseña incorrectos.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="flex min-h-screen items-center justify-center px-4 py-12"
      style={{ backgroundColor: 'var(--os-paper, #f5f1e8)' }}
    >
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="mb-8 flex flex-col items-center gap-3">
          <img
            src={logo}
            alt="Old School Regresados"
            className="h-20 w-auto drop-shadow-md"
          />
          <div className="text-center">
            <h1 className="text-lg font-black uppercase tracking-widest text-gray-900">
              Panel Admin
            </h1>
            <p className="text-xs font-medium text-gray-500">Old School Regresados</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border-4 border-black bg-white p-7 shadow-[6px_6px_0_0_#000]"
        >
          <div className="space-y-4">
            {/* Email */}
            <div>
              <label className="mb-1.5 block text-xs font-black uppercase tracking-widest text-gray-700">
                Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border-2 border-gray-300 bg-[var(--os-paper,#f5f1e8)] px-4 py-3 text-sm font-medium transition-colors focus:border-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
              />
            </div>

            {/* Password */}
            <div>
              <label className="mb-1.5 block text-xs font-black uppercase tracking-widest text-gray-700">
                Contraseña
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-xl border-2 border-gray-300 bg-[var(--os-paper,#f5f1e8)] px-4 py-3 pr-12 text-sm font-medium transition-colors focus:border-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-400 transition-colors hover:text-gray-700"
                  aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                >
                  {showPassword
                    ? <EyeOff className="h-4.5 w-4.5" strokeWidth={2} />
                    : <Eye className="h-4.5 w-4.5" strokeWidth={2} />
                  }
                </button>
              </div>
            </div>
          </div>

          {/* Error */}
          {error && (
            <div className="mt-4 flex items-center gap-2 rounded-xl border-2 border-red-400 bg-red-50 px-4 py-3">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500 text-[0.6rem] font-black text-white">!</span>
              <p className="text-sm font-semibold text-red-700">{error}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border-2 border-black bg-gray-900 px-4 py-3 text-sm font-black uppercase tracking-widest text-white shadow-[3px_3px_0_0_#000] transition-transform hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Ingresando…
              </>
            ) : (
              'Ingresar'
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
