import { useState, useEffect, useCallback, useRef } from 'react';
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

function status(inv: Invite, now: number): 'used' | 'expired' | 'active' {
  if (inv.isUsed) return 'used';
  if ((inv.expiresAt?.toDate().getTime() ?? 0) < now) return 'expired';
  return 'active';
}

const STATUS_STYLES = {
  active:  'bg-green-100 text-green-800',
  used:    'bg-blue-100 text-blue-800',
  expired: 'bg-red-100 text-red-700',
};

const STATUS_LABELS = { active: 'Activo', used: '✓ Usado', expired: 'Expirado' };

function countdown(expiresAt: Timestamp | undefined, now: number): { text: string; urgency: 'ok' | 'warn' | 'critical' } {
  if (!expiresAt?.toDate) return { text: '—', urgency: 'ok' };
  const diff = expiresAt.toDate().getTime() - now;
  if (diff <= 0) return { text: 'Expirado', urgency: 'critical' };
  const h = Math.floor(diff / 3_600_000);
  const m = Math.floor((diff % 3_600_000) / 60_000);
  const s = Math.floor((diff % 60_000) / 1_000);
  const text = h > 0
    ? `${h}h ${String(m).padStart(2, '0')}m ${String(s).padStart(2, '0')}s`
    : m > 0
    ? `${m}m ${String(s).padStart(2, '0')}s`
    : `${s}s`;
  const urgency = diff < 3_600_000 ? 'critical' : diff < 6 * 3_600_000 ? 'warn' : 'ok';
  return { text, urgency };
}

const COUNTDOWN_STYLES = {
  ok:       'text-green-700 bg-green-50 border-green-200',
  warn:     'text-amber-700 bg-amber-50 border-amber-200',
  critical: 'text-red-700 bg-red-50 border-red-200',
};

export function InvitesPage() {
  const [invites, setInvites] = useState<Invite[]>([]);
  const [loading, setLoading] = useState(true);
  const [label, setLabel] = useState('');
  const [creating, setCreating] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);
  const [confirmId, setConfirmId] = useState<string | null>(null);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [now, setNow] = useState(Date.now());
  const { toasts, showToast, dismiss } = useToast();

  const tickRef = useRef<ReturnType<typeof setInterval> | null>(null);
  useEffect(() => {
    tickRef.current = setInterval(() => setNow(Date.now()), 1000);
    return () => { if (tickRef.current) clearInterval(tickRef.current); };
  }, []);

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
    <div className="p-4 lg:p-8">
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

      {/* ── Mobile card list (< lg) ──────────────────────────── */}
      <div className="lg:hidden space-y-2">
        {loading ? (
          <div className="flex justify-center py-16">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
          </div>
        ) : invites.length === 0 ? (
          <p className="py-16 text-center text-sm text-gray-400">No hay invitaciones generadas.</p>
        ) : invites.map((inv) => {
          const st = status(inv, now);
          const cd = st === 'active' ? countdown(inv.expiresAt, now) : null;
          return (
            <div
              key={inv.id}
              className={`rounded-xl border border-gray-200 bg-white p-4 shadow-sm ${st === 'used' ? 'border-blue-200 bg-blue-50/30' : ''}`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="truncate font-semibold text-gray-900">{inv.label}</p>
                  {inv.usedBy && (
                    <p className="mt-0.5 truncate text-xs font-medium text-blue-700">{inv.usedBy}</p>
                  )}
                </div>
                <span className={`shrink-0 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${STATUS_STYLES[st]}`}>
                  {STATUS_LABELS[st]}
                </span>
              </div>

              {cd && (
                <div className={`mt-2 inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-xs font-mono font-semibold ${COUNTDOWN_STYLES[cd.urgency]}`}>
                  ⏱ {cd.text}
                </div>
              )}

              <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-400">
                <span>Creado: {fmt(inv.createdAt)}</span>
                <span>
                  {st === 'used'
                    ? <span className="text-blue-700">Usado: {fmt(inv.usedAt)}</span>
                    : `Expira: ${fmt(inv.expiresAt)}`}
                </span>
              </div>

              <div className="mt-3 flex items-center gap-2">
                {st === 'active' && (
                  <button
                    onClick={() => copy(inv.token)}
                    className="rounded-lg border border-blue-200 px-3 py-1.5 text-xs font-medium text-blue-600 hover:bg-blue-50"
                  >
                    {copied === inv.token ? '✓ Copiado' : 'Copiar link'}
                  </button>
                )}
                <button
                  onClick={() => setConfirmId(inv.id)}
                  className="rounded-lg border border-red-200 px-3 py-1.5 text-xs font-medium text-red-400 hover:bg-red-50 hover:text-red-600"
                >
                  Eliminar
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Desktop table (≥ lg) ─────────────────────────────── */}
      <div className="hidden lg:block overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
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
                const st = status(inv, now);
                const cd = st === 'active' ? countdown(inv.expiresAt, now) : null;
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

                    {/* Context-aware date + countdown column */}
                    <td className="px-4 py-3">
                      {st === 'used' ? (
                        <span className="font-medium text-blue-700">{fmt(inv.usedAt)}</span>
                      ) : (
                        <div className="flex flex-col gap-1">
                          <span className="text-xs text-gray-400">{fmt(inv.expiresAt)}</span>
                          {cd && (
                            <span className={`inline-flex w-fit items-center gap-1 rounded border px-2 py-0.5 font-mono text-xs font-semibold ${COUNTDOWN_STYLES[cd.urgency]}`}>
                              ⏱ {cd.text}
                            </span>
                          )}
                        </div>
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
