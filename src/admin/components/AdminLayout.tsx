import { NavLink, Outlet, useNavigate } from 'react-router';
import { signOut } from 'firebase/auth';
import { auth } from '../../lib/firebase';
import { useAuth } from '../hooks/useAuth';
import { useEffect } from 'react';

const ROOT_NAV = [
  { to: '/admin/leads',    label: 'Leads',          icon: '👥' },
  { to: '/admin/statuses', label: 'Estados',        icon: '🏷️' },
  { to: '/admin/invites',  label: 'Invitaciones',   icon: '🔗' },
  { to: '/admin/settings', label: 'Configuración',  icon: '⚙️' },
];

const SUB_ADMIN_NAV = [
  { to: '/admin/leads', label: 'Leads', icon: '👥' },
];

export function AdminLayout() {
  const { user, loading, isAdmin, isRoot, isSubAdmin } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !isAdmin) navigate('/admin/login', { replace: true });
  }, [loading, isAdmin, navigate]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-50">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
      </div>
    );
  }

  if (!isAdmin) return null;

  const nav = isRoot ? ROOT_NAV : SUB_ADMIN_NAV;

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/admin/login');
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50 font-sans text-gray-900">
      {/* Sidebar */}
      <aside className="flex w-56 shrink-0 flex-col bg-gray-900 text-gray-100">
        <div className="border-b border-gray-700 px-5 py-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
            {isRoot ? 'Root admin' : 'Admin'}
          </p>
          <p className="mt-0.5 truncate text-sm font-medium">{user?.email}</p>
          {isSubAdmin && (
            <p className="mt-1 rounded-md bg-gray-800 px-2 py-0.5 text-center text-[0.6rem] font-semibold uppercase tracking-wider text-gray-400">
              acceso limitado
            </p>
          )}
        </div>

        <nav className="flex-1 space-y-0.5 px-2 py-4">
          {nav.map(({ to, label, icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`
              }
            >
              <span>{icon}</span>
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="border-t border-gray-700 p-3">
          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-400 transition-colors hover:bg-gray-800 hover:text-white"
          >
            <span>↩</span> Cerrar sesión
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
