import { useState, useEffect, useCallback } from 'react';
import {
  collection,
  query,
  orderBy,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  serverTimestamp,
  Timestamp,
} from 'firebase/firestore';
import { db } from '../../lib/firebase';
import type { Invite } from '../types';
import { ConfirmDialog } from '../components/ConfirmDialog';
import { useToast, ToastContainer } from '../components/Toast';

const TTL_MS = 24 * 60 * 60 * 1000;

function inviteUrl(token: string) {
  return `${window.location.origin}/r/${token}`;
}

function status(inv: Invite): 'used' | 'expired' | 'active' {
  if (inv.isUsed) return 'used';
  if (inv.expiresAt?.toDate() < new Date()) return 'expired';
  return 'active';
}

const STATUS_STYLES = {
  active:  'bg-green-100 text-green-800',
  used:    'bg-blue-100 text-blue-800',
  expired: 'bg-red-100 text-red-700',
};

const STATUS_LABELS = { active: 'Activo', used: '✓ Usado', expired: 'Expirado' };

export function InvitesPage() {
  const [invites, setInvites] = useState<Invite[]>([]);
  const [loading, setLoading] = useState(true);
  const [label, setLabel] = useState('');
  const [creating, setCreating] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);
  const [confirmId, setConfirmId] = useState<string | null>(null);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const { toasts, showToast, dismiss } = useToast();

  const fetch = useCallback(async () => {
    setLoading(true);
    const snap = await getDocs(query(collection(db, 'invites'), orderBy('createdAt', 'desc')));
    setInvites(snap.docs.map((d) => ({ id: d.id, ...d.data() } as Invite)));
    setLoading(false);
  }, []);

  useEffect(() => { fetch(); }, [fetch]);

  const generate = async () => {
    setCreating(true);
    const token = crypto.randomUUID();
    const now = Date.now();
    await addDoc(collection(db, 'invites'), {
      token,
      label: label.trim() || 'Sin etiqueta',
      isUsed: false,
      createdAt: serverTimestamp(),
      expiresAt: Timestamp.fromMillis(now + TTL_MS),
    });
    setLabel('');
    setCreating(false);
    fetch();
  };

  const confirmDelete = async () => {
    if (!confirmId) return;
    setDeleteLoading(true);
    try {
      await deleteDoc(doc(db, 'invites', confirmId));
      setInvites((prev) => prev.filter((i) => i.id !== confirmId));
      showToast('Invitación eliminada');
    } catch {
      showToast('Error al eliminar', 'error');
    } finally {
      setDeleteLoading(false);
      setConfirmId(null);
    }
  };

  const copy = (token: string) => {
    navigator.clipboard.writeText(inviteUrl(token));
    setCopied(token);
    setTimeout(() => setCopied(null), 2000);
  };

  const fmt = (ts: Timestamp | undefined) => {
    if (!ts?.toDate) return '—';
    return ts.toDate().toLocaleString('es-AR', {
      day: '2-digit', month: '2-digit', year: '2-digit',
      hour: '2-digit', minute: '2-digit',
    });
  };

  return (
    <div className="p-6 lg:p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Invitaciones</h1>
        <p className="mt-0.5 text-sm text-gray-500">Links de un solo uso · válidos 24 h</p>
      </div>

      {/* Generate */}
      <div className="mb-8 flex flex-wrap items-end gap-3 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        <div className="flex-1 min-w-[180px]">
          <label className="mb-1.5 block text-xs font-medium text-gray-700">Etiqueta (opcional)</label>
          <input
            type="text"
            placeholder="Ej: Juan Pérez, Promo Mayo…"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
          />
        </div>
        <button
          onClick={generate}
          disabled={creating}
          className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-60"
        >
          {creating ? 'Generando…' : '+ Generar link'}
        </button>
      </div>

      {/* List */}
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        {loading ? (
          <div className="flex justify-center py-16">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
          </div>
        ) : invites.length === 0 ? (
          <p className="py-16 text-center text-sm text-gray-400">No hay invitaciones generadas.</p>
        ) : (
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-50">
              <tr>
                {['Etiqueta', 'Estado', 'Creado', 'Expira / Usado el', 'Usado por', ''].map((h) => (
                  <th key={h} className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {invites.map((inv) => {
                const st = status(inv);
                return (
                  <tr
                    key={inv.id}
                    className={`transition-colors hover:bg-gray-50 ${st === 'used' ? 'bg-blue-50/40' : ''}`}
                  >
                    <td className="px-4 py-3 font-medium text-gray-900">{inv.label}</td>

                    <td className="px-4 py-3">
                      <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${STATUS_STYLES[st]}`}>
                        {STATUS_LABELS[st]}
                      </span>
                    </td>

                    <td className="px-4 py-3 text-gray-500">{fmt(inv.createdAt)}</td>

                    {/* Context-aware date column */}
                    <td className="px-4 py-3">
                      {st === 'used' ? (
                        <span className="text-blue-700 font-medium">{fmt(inv.usedAt)}</span>
                      ) : (
                        <span className="text-gray-500">{fmt(inv.expiresAt)}</span>
                      )}
                    </td>

                    {/* Used by */}
                    <td className="px-4 py-3">
                      {inv.usedBy ? (
                        <span className="font-medium text-blue-800">{inv.usedBy}</span>
                      ) : (
                        <span className="text-gray-300">—</span>
                      )}
                    </td>

                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        {st === 'active' && (
                          <button
                            onClick={() => copy(inv.token)}
                            className="rounded px-2 py-1 text-xs font-medium text-blue-600 hover:bg-blue-50"
                          >
                            {copied === inv.token ? '✓ Copiado' : 'Copiar link'}
                          </button>
                        )}
                        <button
                          onClick={() => setConfirmId(inv.id)}
                          className="rounded px-2 py-1 text-xs font-medium text-red-400 hover:bg-red-50 hover:text-red-600"
                        >
                          Eliminar
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>

      <ConfirmDialog
        isOpen={!!confirmId}
        title="Eliminar invitación"
        message="Esta acción es permanente. ¿Querés eliminar esta invitación?"
        confirmLabel="Sí, eliminar"
        onConfirm={confirmDelete}
        onCancel={() => setConfirmId(null)}
        loading={deleteLoading}
      />

      <ToastContainer toasts={toasts} dismiss={dismiss} />
    </div>
  );
}
