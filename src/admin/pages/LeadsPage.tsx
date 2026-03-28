import { useState, useEffect, useCallback } from 'react';
import {
  collection,
  query,
  orderBy,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  serverTimestamp,
  Timestamp,
} from 'firebase/firestore';
import { Loader2, MessageSquare, X, RefreshCw } from 'lucide-react';
import { useNavigate } from 'react-router';
import { db } from '../../lib/firebase';
import type { Lead, LeadStatus, LeadNote } from '../types';
import { ConfirmDialog } from '../components/ConfirmDialog';
import { useToast, ToastContainer } from '../components/Toast';
import { useStatuses } from '../hooks/useStatuses';
import { useAuth } from '../hooks/useAuth';

const PAGE_SIZE = 20;

const EMPTY_FORM = {
  nombre: '', edad: '', ciudad: '', email: '', telefono: '', mensaje: '',
};

export function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState<LeadStatus | 'all'>('all');
  const [showAddModal, setShowAddModal] = useState(false);
  const [addForm, setAddForm] = useState(EMPTY_FORM);
  const [addLoading, setAddLoading] = useState(false);

  // Delete
  const [confirmId, setConfirmId] = useState<string | null>(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

  // Notes modal
  const [notesLead, setNotesLead] = useState<Lead | null>(null);

  const { toasts, showToast, dismiss } = useToast();
  const { statuses, find: findStatus } = useStatuses();
  const { isRoot } = useAuth();
  const navigate = useNavigate();

  const fetchLeads = useCallback(async () => {
    setLoading(true);
    const snap = await getDocs(query(collection(db, 'leads'), orderBy('createdAt', 'desc')));
    setLeads(snap.docs.map((d) => ({ id: d.id, ...d.data() } as Lead)));
    setLoading(false);
  }, []);

  useEffect(() => { fetchLeads(); }, [fetchLeads]);

  const markRead = async (lead: Lead) => {
    if (!lead.isNew) return;
    await updateDoc(doc(db, 'leads', lead.id), { isNew: false });
    setLeads((prev) => prev.map((l) => l.id === lead.id ? { ...l, isNew: false } : l));
  };

  const changeStatus = async (id: string, status: LeadStatus) => {
    await updateDoc(doc(db, 'leads', id), { status });
    setLeads((prev) => prev.map((l) => l.id === id ? { ...l, status } : l));
    showToast(`Estado actualizado a "${findStatus(status).label}"`);
  };

  const confirmDelete = async () => {
    if (!confirmId) return;
    setDeleteLoading(true);
    try {
      await deleteDoc(doc(db, 'leads', confirmId));
      setLeads((prev) => prev.filter((l) => l.id !== confirmId));
      showToast('Lead eliminado');
    } catch {
      showToast('Error al eliminar', 'error');
    } finally {
      setDeleteLoading(false);
      setConfirmId(null);
    }
  };

  const addLead = async (e: React.FormEvent) => {
    e.preventDefault();
    setAddLoading(true);
    try {
      await addDoc(collection(db, 'leads'), {
        ...addForm,
        status: statuses[0]?.id ?? 'new',
        isNew: true,
        notes: [],
        source: 'manual',
        createdAt: serverTimestamp(),
      });
      setAddForm(EMPTY_FORM);
      setShowAddModal(false);
      showToast('Lead agregado');
      fetchLeads();
    } catch {
      showToast('Error al agregar', 'error');
    } finally {
      setAddLoading(false);
    }
  };

  const filtered = leads.filter((l) => {
    const q = search.toLowerCase();
    const matchSearch =
      !q ||
      l.nombre?.toLowerCase().includes(q) ||
      l.email?.toLowerCase().includes(q) ||
      l.ciudad?.toLowerCase().includes(q) ||
      l.telefono?.includes(q);
    const matchStatus = filterStatus === 'all' || l.status === filterStatus;
    return matchSearch && matchStatus;
  });

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);
  const newCount = leads.filter((l) => l.isNew).length;

  const fmt = (ts: Timestamp | undefined) => {
    if (!ts?.toDate) return '—';
    return ts.toDate().toLocaleDateString('es-AR', { day: '2-digit', month: '2-digit', year: '2-digit' });
  };

  const fmtFull = (ts: Timestamp | undefined) => {
    if (!ts?.toDate) return '—';
    return ts.toDate().toLocaleString('es-AR', {
      day: '2-digit', month: '2-digit', year: '2-digit',
      hour: '2-digit', minute: '2-digit',
    });
  };

  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Leads</h1>
          <p className="mt-0.5 text-sm text-gray-500">
            {leads.length} total
            {newCount > 0 && (
              <span className="ml-2 rounded-full bg-blue-600 px-2 py-0.5 text-xs font-semibold text-white">
                {newCount} nuevos
              </span>
            )}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => fetchLeads()}
            disabled={loading}
            title="Recargar leads"
            className="rounded-lg border border-gray-300 p-2 text-gray-500 hover:bg-gray-50 hover:text-gray-900 disabled:opacity-40"
          >
            <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
          </button>
          <button
            onClick={() => setShowAddModal(true)}
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
          >
            + Agregar lead
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-4 flex flex-wrap gap-3">
        <input
          type="search"
          placeholder="Buscar por nombre, email, ciudad…"
          value={search}
          onChange={(e) => { setSearch(e.target.value); setPage(0); }}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:w-72"
        />
        <select
          value={filterStatus}
          onChange={(e) => { setFilterStatus(e.target.value); setPage(0); }}
          className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
        >
          <option value="all">Todos los estados</option>
          {statuses.map((s) => <option key={s.id} value={s.id}>{s.label}</option>)}
        </select>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        {loading ? (
          <div className="flex justify-center py-16">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
          </div>
        ) : paginated.length === 0 ? (
          <p className="py-16 text-center text-sm text-gray-400">No hay leads.</p>
        ) : (
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-50">
              <tr>
                {['Nombre', 'Ciudad', 'Email', 'Estado', 'Notas', 'Fecha', ...(isRoot ? [''] : [])].map((h) => (
                  <th key={h} className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {paginated.map((lead) => {
                const noteCount = lead.notes?.length ?? 0;
                const statusCfg = findStatus(lead.status);
                return (
                  <tr
                    key={lead.id}
                    className={`cursor-pointer transition-colors hover:bg-blue-50 ${lead.isNew ? 'bg-blue-50/50' : ''}`}
                    onClick={() => { markRead(lead); navigate(`/admin/leads/${lead.id}`); }}
                  >
                    {/* Nombre */}
                    <td className="px-4 py-3 font-medium text-gray-900">
                      <span className="flex items-center gap-2">
                        {lead.isNew && <span className="h-2 w-2 shrink-0 rounded-full bg-blue-500" title="Nuevo" />}
                        {lead.nombre || '—'}
                      </span>
                    </td>

                    {/* Ciudad */}
                    <td className="px-4 py-3 text-gray-600">{lead.ciudad || '—'}</td>

                    {/* Email */}
                    <td className="px-4 py-3 text-gray-600">{lead.email || '—'}</td>

                    {/* Status */}
                    <td className="px-4 py-3" onClick={(e) => e.stopPropagation()}>
                      <div className="flex items-center gap-1.5">
                        <span
                          className="h-2.5 w-2.5 shrink-0 rounded-full"
                          style={{ backgroundColor: statusCfg.color }}
                        />
                        <select
                          value={lead.status ?? ''}
                          onChange={(e) => changeStatus(lead.id, e.target.value)}
                          className="rounded-md border px-2 py-1 text-xs font-semibold focus:outline-none"
                          style={{
                            color: statusCfg.color,
                            borderColor: `${statusCfg.color}50`,
                            backgroundColor: `${statusCfg.color}14`,
                          }}
                        >
                          {statuses.map((s) => <option key={s.id} value={s.id}>{s.label}</option>)}
                        </select>
                      </div>
                    </td>

                    {/* Notes */}
                    <td className="px-4 py-3" onClick={(e) => e.stopPropagation()}>
                      {noteCount > 0 ? (
                        <button
                          onClick={() => setNotesLead(lead)}
                          className="flex items-center gap-1.5 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-700 transition-colors hover:bg-amber-100"
                          title={`${noteCount} nota${noteCount > 1 ? 's' : ''}`}
                        >
                          <MessageSquare className="h-3.5 w-3.5" />
                          {noteCount}
                        </button>
                      ) : (
                        <span className="text-xs text-gray-300">—</span>
                      )}
                    </td>

                    {/* Date */}
                    <td className="px-4 py-3 text-gray-500">{fmt(lead.createdAt)}</td>

                    {/* Delete — root only */}
                    {isRoot && (
                      <td className="px-4 py-3 text-right" onClick={(e) => e.stopPropagation()}>
                        <button
                          onClick={() => setConfirmId(lead.id)}
                          className="rounded px-2 py-1 text-xs font-medium text-red-400 hover:bg-red-50 hover:text-red-600"
                        >
                          Eliminar
                        </button>
                      </td>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
          <span>Página {page + 1} de {totalPages} — {filtered.length} leads</span>
          <div className="flex gap-2">
            <button disabled={page === 0} onClick={() => setPage((p) => p - 1)}
              className="rounded-lg border border-gray-300 px-3 py-1.5 hover:bg-gray-50 disabled:opacity-40">
              ← Anterior
            </button>
            <button disabled={page >= totalPages - 1} onClick={() => setPage((p) => p + 1)}
              className="rounded-lg border border-gray-300 px-3 py-1.5 hover:bg-gray-50 disabled:opacity-40">
              Siguiente →
            </button>
          </div>
        </div>
      )}

      {/* ── Notes modal ─────────────────────────────────────── */}
      {notesLead && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onMouseDown={(e) => { if (e.target === e.currentTarget) setNotesLead(null); }}
        >
          <div className="w-full max-w-md rounded-2xl bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4">
              <div>
                <h2 className="text-base font-bold text-gray-900">Notas internas</h2>
                <p className="text-xs text-gray-400">{notesLead.nombre || 'Sin nombre'}</p>
              </div>
              <button
                onClick={() => setNotesLead(null)}
                className="rounded-full p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="max-h-[60vh] overflow-y-auto p-5">
              {(notesLead.notes?.length ?? 0) === 0 ? (
                <p className="text-center text-sm text-gray-400">Sin notas.</p>
              ) : (
                <div className="space-y-3">
                  {[...(notesLead.notes ?? [])].reverse().map((note: LeadNote, i) => (
                    <div key={i} className="rounded-xl bg-amber-50 px-4 py-3">
                      <p className="text-sm text-gray-800 whitespace-pre-wrap">{note.text}</p>
                      <p className="mt-1.5 text-xs text-gray-400">{fmtFull(note.createdAt)}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="border-t border-gray-200 px-5 py-3">
              <button
                onClick={() => { navigate(`/admin/leads/${notesLead.id}`); setNotesLead(null); }}
                className="text-xs font-semibold text-blue-600 hover:underline"
              >
                Ver y editar lead completo →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Delete confirm ──────────────────────────────────── */}
      <ConfirmDialog
        isOpen={!!confirmId}
        title="Eliminar lead"
        message="Esta acción es permanente y no se puede deshacer. ¿Querés continuar?"
        confirmLabel="Sí, eliminar"
        onConfirm={confirmDelete}
        onCancel={() => setConfirmId(null)}
        loading={deleteLoading}
      />

      {/* ── Add Lead Modal ──────────────────────────────────── */}
      {showAddModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onMouseDown={(e) => { if (e.target === e.currentTarget) setShowAddModal(false); }}
        >
          <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
            <h2 className="mb-4 text-lg font-bold">Agregar lead manualmente</h2>
            <form onSubmit={addLead} className="space-y-3">
              {([
                ['nombre', 'Nombre *', 'text', true],
                ['edad', 'Edad', 'number', false],
                ['ciudad', 'Ciudad', 'text', false],
                ['email', 'Email *', 'email', true],
                ['telefono', 'Teléfono *', 'tel', true],
              ] as [keyof typeof addForm, string, string, boolean][]).map(([field, label, type, req]) => (
                <div key={field}>
                  <label className="mb-1 block text-xs font-medium text-gray-700">{label}</label>
                  <input
                    type={type} required={req} value={addForm[field]}
                    onChange={(e) => setAddForm({ ...addForm, [field]: e.target.value })}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                  />
                </div>
              ))}
              <div>
                <label className="mb-1 block text-xs font-medium text-gray-700">Mensaje</label>
                <textarea rows={3} value={addForm.mensaje}
                  onChange={(e) => setAddForm({ ...addForm, mensaje: e.target.value })}
                  className="w-full resize-none rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                />
              </div>
              <div className="flex gap-3 pt-2">
                <button type="button" onClick={() => setShowAddModal(false)}
                  className="flex-1 rounded-lg border border-gray-300 py-2 text-sm hover:bg-gray-50">
                  Cancelar
                </button>
                <button type="submit" disabled={addLoading}
                  className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-blue-600 py-2 text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-60">
                  {addLoading ? <><Loader2 className="h-4 w-4 animate-spin" /> Guardando…</> : 'Guardar'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <ToastContainer toasts={toasts} dismiss={dismiss} />
    </div>
  );
}
