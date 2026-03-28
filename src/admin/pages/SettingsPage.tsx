import { useState, useEffect } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { Loader2 } from 'lucide-react';
import { db } from '../../lib/firebase';
import type { SiteSettings } from '../types';
import { useToast, ToastContainer } from '../components/Toast';

const DEFAULT_SETTINGS: SiteSettings = {
  successTitle: '¡Postulación enviada!',
  successMessage: 'Nos pondremos en contacto pronto.',
};

export function SettingsPage() {
  const [settings, setSettings] = useState<SiteSettings>(DEFAULT_SETTINGS);
  const [loadingSettings, setLoadingSettings] = useState(true);
  const [savingSettings, setSavingSettings] = useState(false);

  const { toasts, showToast, dismiss } = useToast();

  useEffect(() => {
    getDoc(doc(db, 'settings', 'main')).then((snap) => {
      if (snap.exists()) setSettings(snap.data() as SiteSettings);
      setLoadingSettings(false);
    });
  }, []);

  const saveSettingsForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setSavingSettings(true);
    try {
      await setDoc(doc(db, 'settings', 'main'), settings);
      showToast('Configuración guardada');
    } catch {
      showToast('Error al guardar', 'error');
    } finally {
      setSavingSettings(false);
    }
  };

  return (
    <div className="p-6 lg:p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Configuración</h1>
        <p className="mt-0.5 text-sm text-gray-500">Mensajes del sitio</p>
      </div>

      <div className="max-w-2xl">
        {loadingSettings ? (
          <div className="flex justify-center py-8">
            <div className="h-7 w-7 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
          </div>
        ) : (
          <form onSubmit={saveSettingsForm} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-5 text-sm font-semibold uppercase tracking-wide text-gray-500">
              Mensaje post-registro
            </h2>
            <div className="space-y-4">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">Título</label>
                <input
                  type="text" required value={settings.successTitle}
                  onChange={(e) => setSettings({ ...settings, successTitle: e.target.value })}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">Mensaje</label>
                <textarea
                  rows={3} required value={settings.successMessage}
                  onChange={(e) => setSettings({ ...settings, successMessage: e.target.value })}
                  className="w-full resize-none rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="mt-4 rounded-lg border border-dashed border-gray-300 bg-gray-50 px-4 py-3">
              <p className="text-[0.68rem] font-semibold uppercase tracking-wide text-gray-400">Vista previa</p>
              <p className="mt-0.5 text-sm font-bold text-gray-900">{settings.successTitle}</p>
              <p className="text-xs text-gray-500">{settings.successMessage}</p>
            </div>
            <button
              type="submit" disabled={savingSettings}
              className="mt-4 flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-60"
            >
              {savingSettings ? <><Loader2 className="h-4 w-4 animate-spin" /> Guardando…</> : 'Guardar mensaje'}
            </button>
          </form>
        )}
      </div>

      <ToastContainer toasts={toasts} dismiss={dismiss} />
    </div>
  );
}
