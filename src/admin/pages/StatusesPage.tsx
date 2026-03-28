import { useState, useEffect } from 'react';
import { collection, query, where, getDocs, limit } from 'firebase/firestore';
import { Loader2, Trash2, Plus, AlertCircle, Check } from 'lucide-react';
import { db } from '../../lib/firebase';
import type { StatusConfig } from '../types';
import { useStatuses, COLOR_PALETTE } from '../hooks/useStatuses';
import { useToast, ToastContainer } from '../components/Toast';
import { ConfirmDialog } from '../components/ConfirmDialog';

function hexToRgba(hex: string, alpha: number) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export function StatusesPage() {
  const { statuses, loading, save: saveStatuses } = useStatuses();
  const [localStatuses, setLocalStatuses] = useState<StatusConfig[]>([]);
  const [saving, setSaving] = useState(false);
  const [dirty, setDirty] = useState(false);

  // New status form
  const [newLabel, setNewLabel] = useState('');
  const [newColor, setNewColor] = useState(COLOR_PALETTE[0].hex);

  // Delete
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [deleteBlocked, setDeleteBlocked] = useState<{ id: string; label: string; count: number } | null>(null);
  const [checkingDelete, setCheckingDelete] = useState(false);

  const { toasts, showToast, dismiss } = useToast();

  useEffect(() => {
    if (!loading) {
      setLocalStatuses(statuses);
      setDirty(false);
    }
  }, [statuses, loading]);

  const markDirty = (updated: StatusConfig[]) => {
    setLocalStatuses(updated);
    setDirty(true);
  };

  const addStatus = () => {
    const label = newLabel.trim();
    if (!label) return;
    const id = label.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '') + '_' + Date.now();
    markDirty([...localStatuses, { id, label, color: newColor }]);
    setNewLabel('');
    setNewColor(COLOR_PALETTE[0].hex);
  };

  const updateLabel = (id: string, label: string) =>
    markDirty(localStatuses.map((s) => s.id === id ? { ...s, label } : s));

  const updateColor = (id: string, color: string) =>
    markDirty(localStatuses.map((s) => s.id === id ? { ...s, color } : s));

  const requestDelete = async (s: StatusConfig) => {
    setCheckingDelete(true);
    try {
      const snap = await getDocs(
        query(collection(db, 'leads'), where('status', '==', s.id), limit(50))
      );
      if (snap.size > 0) {
        setDeleteBlocked({ id: s.id, label: s.label, count: snap.size });
      } else {
        setDeleteId(s.id);
      }
    } finally {
      setCheckingDelete(false);
    }
  };

  const removeStatus = (id: string) => {
    markDirty(localStatuses.filter((s) => s.id !== id));
    setDeleteId(null);
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      await saveStatuses(localStatuses);
      setDirty(false);
      showToast('Estados guardados');
    } catch {
      showToast('Error al guardar', 'error');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Estados</h1>
          <p className="mt-0.5 text-sm text-gray-500">
            Creá y editá los estados que puede tener un lead.
          </p>
        </div>
        <button
          onClick={handleSave}
          disabled={saving || !dirty}
          className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-40"
        >
          {saving ? (
            <><Loader2 className="h-4 w-4 animate-spin" /> Guardando…</>
          ) : (
            <><Check className="h-4 w-4" /> Guardar cambios</>
          )}
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center py-20">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
        </div>
      ) : (
        <div className="max-w-2xl space-y-4">

          {/* ── Existing statuses ───────────────────────────── */}
          {localStatuses.length === 0 && (
            <p className="rounded-xl border border-dashed border-gray-300 py-10 text-center text-sm text-gray-400">
              No hay estados. Creá el primero abajo.
            </p>
          )}

          {localStatuses.map((s) => (
            <div
              key={s.id}
              className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
            >
              <div className="mb-3 flex items-center gap-3">
                {/* Color dot */}
                <span
                  className="h-4 w-4 shrink-0 rounded-full border-2 border-white shadow"
                  style={{ backgroundColor: s.color }}
                />

                {/* Label input */}
                <input
                  type="text"
                  value={s.label}
                  onChange={(e) => updateLabel(s.id, e.target.value)}
                  className="flex-1 rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5 text-sm font-semibold focus:border-blue-400 focus:bg-white focus:outline-none"
                />

                {/* Badge preview */}
                <span
                  className="hidden shrink-0 rounded-full border px-3 py-0.5 text-xs font-semibold sm:inline-flex"
                  style={{
                    backgroundColor: hexToRgba(s.color, 0.12),
                    borderColor: hexToRgba(s.color, 0.35),
                    color: s.color,
                  }}
                >
                  {s.label || 'Vista previa'}
                </span>

                {/* Delete */}
                <button
                  type="button"
                  onClick={() => requestDelete(s)}
                  disabled={checkingDelete}
                  title="Eliminar estado"
                  className="shrink-0 rounded-lg p-1.5 text-gray-300 transition-colors hover:bg-red-50 hover:text-red-500 disabled:opacity-40"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>

              {/* Color palette */}
              <div className="flex flex-wrap gap-1.5 pl-7">
                {COLOR_PALETTE.map(({ hex, name }) => (
                  <button
                    key={hex}
                    type="button"
                    title={name}
                    onClick={() => updateColor(s.id, hex)}
                    className="h-6 w-6 rounded-full border-2 transition-transform hover:scale-110"
                    style={{
                      backgroundColor: hex,
                      borderColor: s.color === hex ? '#111' : 'transparent',
                      outline: s.color === hex ? `2px solid ${hex}` : 'none',
                      outlineOffset: '2px',
                    }}
                  />
                ))}
              </div>
            </div>
          ))}

          {/* ── Add new status ───────────────────────────────── */}
          <div className="rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 p-5">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-400">
              Nuevo estado
            </p>
            <div className="space-y-3">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={newLabel}
                  onChange={(e) => setNewLabel(e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); addStatus(); } }}
                  placeholder="Ej: En seguimiento, Pendiente, Confirmado…"
                  className="flex-1 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={addStatus}
                  disabled={!newLabel.trim()}
                  className="flex items-center gap-1.5 rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-700 disabled:opacity-40"
                >
                  <Plus className="h-4 w-4" /> Agregar
                </button>
              </div>

              {/* Color picker for new */}
              <div>
                <p className="mb-1.5 text-xs font-medium text-gray-500">Color</p>
                <div className="flex flex-wrap gap-2">
                  {COLOR_PALETTE.map(({ hex, name }) => (
                    <button
                      key={hex}
                      type="button"
                      title={name}
                      onClick={() => setNewColor(hex)}
                      className="h-7 w-7 rounded-full border-2 transition-transform hover:scale-110"
                      style={{
                        backgroundColor: hex,
                        borderColor: newColor === hex ? '#111' : 'transparent',
                        outline: newColor === hex ? `2px solid ${hex}` : 'none',
                        outlineOffset: '2px',
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Preview of new status */}
              {newLabel.trim() && (
                <div className="flex items-center gap-2">
                  <p className="text-xs text-gray-400">Vista previa:</p>
                  <span
                    className="rounded-full border px-3 py-0.5 text-xs font-semibold"
                    style={{
                      backgroundColor: hexToRgba(newColor, 0.12),
                      borderColor: hexToRgba(newColor, 0.35),
                      color: newColor,
                    }}
                  >
                    {newLabel}
                  </span>
                </div>
              )}
            </div>
          </div>

          {dirty && (
            <p className="text-center text-xs text-amber-600">
              Tenés cambios sin guardar — hacé clic en "Guardar cambios" arriba.
            </p>
          )}
        </div>
      )}

      {/* Delete confirm */}
      <ConfirmDialog
        isOpen={!!deleteId}
        title="Eliminar estado"
        message="Este estado no está asignado a ningún lead. ¿Querés eliminarlo?"
        confirmLabel="Sí, eliminar"
        onConfirm={() => deleteId && removeStatus(deleteId)}
        onCancel={() => setDeleteId(null)}
      />

      {/* Blocked — in use */}
      {deleteBlocked && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl">
            <div className="mb-4 flex items-start gap-3">
              <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
              <div>
                <h3 className="text-base font-bold text-gray-900">No se puede eliminar</h3>
                <p className="mt-1 text-sm text-gray-500">
                  El estado <span className="font-semibold text-gray-800">"{deleteBlocked.label}"</span> está
                  asignado a <span className="font-semibold text-gray-800">{deleteBlocked.count}</span> lead
                  {deleteBlocked.count !== 1 ? 's' : ''}. Cambiá el estado de esos leads primero.
                </p>
              </div>
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => setDeleteBlocked(null)}
                className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-700"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}

      <ToastContainer toasts={toasts} dismiss={dismiss} />
    </div>
  );
}
