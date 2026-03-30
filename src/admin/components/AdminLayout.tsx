import { NavLink, Outlet, useNavigate } from 'react-router';
import { signOut } from 'firebase/auth';
import { Menu, X } from 'lucide-react';
import { auth } from '../../lib/firebase';
import { useAuth } from '../hooks/useAuth';
import { useEffect, useState } from 'react';

const ROOT_NAV = [
  { to: '/admin/leads',    label: 'Leads',         icon: '👥' },
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
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (!loading && !isAdmin) navigate('/admin/login', { replace: true });
  }, [loading, isAdmin, navigate]);

  useEffect(() => {
    document.documentElement.style.overflowX = 'hidden';
    document.body.style.overflowX = 'hidden';
    return () => {
      document.documentElement.style.overflowX = '';
      document.body.style.overflowX = '';
    };
  }, []);

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

  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50 font-sans text-gray-900">

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          onClick={closeSidebar}
          aria-hidden
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-64 shrink-0 flex-col bg-gray-900 text-gray-100 transition-[transform,visibility] duration-200 ease-in-out lg:static lg:w-56 lg:translate-x-0 lg:visible ${
          sidebarOpen ? 'translate-x-0 visible' : '-translate-x-full invisible'
        }`}
      >
        {/* Header */}
        <div className="flex items-start justify-between border-b border-gray-700 px-5 py-5">
          <div className="min-w-0">
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
          <button
            onClick={closeSidebar}
            className="ml-3 shrink-0 rounded-lg p-1 text-gray-400 hover:text-white lg:hidden"
            aria-label="Cerrar menú"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 space-y-0.5 overflow-y-auto px-2 py-4">
          {nav.map(({ to, label, icon }) => (
            <NavLink
              key={to}
              to={to}
              onClick={closeSidebar}
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

        {/* Logout */}
        <div className="border-t border-gray-700 p-3">
          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-400 transition-colors hover:bg-gray-800 hover:text-white"
          >
            <span>↩</span> Cerrar sesión
          </button>
        </div>
      </aside>

      {/* Main column */}
      <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
        {/* Mobile top bar */}
        <header className="flex shrink-0 items-center gap-3 border-b border-gray-200 bg-white px-4 py-3 lg:hidden">
          <button
            onClick={() => setSidebarOpen(true)}
            className="rounded-lg p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-900"
            aria-label="Abrir menú"
          >
            <Menu className="h-5 w-5" />
          </button>
          <span className="text-sm font-bold text-gray-800">Old School Admin</span>
        </header>

        <main className="flex-1 overflow-x-hidden overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
