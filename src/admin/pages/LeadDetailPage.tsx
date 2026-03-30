import { useState, useEffect } from 'react';
import {
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
  Timestamp,
  arrayUnion,
} from 'firebase/firestore';
import { useParams, useNavigate } from 'react-router';
import { Loader2 } from 'lucide-react';
import { db } from '../../lib/firebase';
import type { Lead, LeadStatus } from '../types';
import { StatusBadge } from '../components/StatusBadge';
import { ConfirmDialog } from '../components/ConfirmDialog';
import { useToast, ToastContainer } from '../components/Toast';
import { useStatuses } from '../hooks/useStatuses';
import { useAuth } from '../hooks/useAuth';

const FIELDS: { key: keyof Lead; label: string; type?: string }[] = [
  { key: 'nombre',   label: 'Nombre',   type: 'text' },
  { key: 'edad',     label: 'Edad',     type: 'number' },
  { key: 'ciudad',   label: 'Ciudad',   type: 'text' },
  { key: 'email',    label: 'Email',    type: 'email' },
  { key: 'telefono', label: 'Teléfono', type: 'tel' },
];

export function LeadDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [lead, setLead] = useState<Lead | null>(null);
  const [form, setForm] = useState<Partial<Lead>>({});
  const [saving, setSaving] = useState(false);
  const [noteText, setNoteText] = useState('');
  const [addingNote, setAddingNote] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const { toasts, showToast, dismiss } = useToast();
  const { statuses, find: findStatus } = useStatuses();
  const { isRoot } = useAuth();

  useEffect(() => {
    if (!id) return;
    getDoc(doc(db, 'leads', id)).then((snap) => {
      if (!snap.exists()) { navigate('/admin/leads'); return; }
      const data = { id: snap.id, ...snap.data() } as Lead;
      setLead(data);
      setForm(data);
    });
  }, [id, navigate]);

  const save = async () => {
    if (!id || !lead) return;
    setSaving(true);
    try {
      const { id: _id, notes, createdAt, ...editable } = form as Lead;
      await updateDoc(doc(db, 'leads', id), editable);
      setLead((prev) => prev ? { ...prev, ...editable } : prev);
      showToast('Cambios guardados');
    } catch {
      showToast('Error al guardar', 'error');
    } finally {
      setSaving(false);
    }
  };

  const addNote = async () => {
    if (!id || !noteText.trim()) return;
    setAddingNote(true);
    try {
      const note = { text: noteText.trim(), createdAt: Timestamp.now() };
      await updateDoc(doc(db, 'leads', id), { notes: arrayUnion(note) });
      setLead((prev) => prev ? { ...prev, notes: [...(prev.notes ?? []), note] } : prev);
      setNoteText('');
      showToast('Nota agregada');
    } catch {
      showToast('Error al agregar nota', 'error');
    } finally {
      setAddingNote(false);
    }
  };

  const confirmDelete = async () => {
    if (!id) return;
    setDeleteLoading(true);
    try {
      await deleteDoc(doc(db, 'leads', id));
      navigate('/admin/leads');
    } catch {
      showToast('Error al eliminar', 'error');
      setDeleteLoading(false);
      setShowDeleteConfirm(false);
    }
  };

  const fmt = (ts: Timestamp | undefined) =>
    ts?.toDate?.().toLocaleString('es-AR', {
      day: '2-digit', month: '2-digit', year: '2-digit',
      hour: '2-digit', minute: '2-digit',
    }) ?? '—';

  if (!lead) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
      </div>
    );
  }

  const currentStatusCfg = findStatus(lead.status);

  return (
    <div className="mx-auto max-w-3xl p-4 lg:p-8">
      <button onClick={() => navigate('/admin/leads')}
        className="mb-6 flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900">
        ← Volver a Leads
      </button>

      {/* Header */}
      <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{lead.nombre || '(sin nombre)'}</h1>
          <p className="mt-0.5 text-xs text-gray-400">
            Registrado el {fmt(lead.createdAt)} · vía {lead.source ?? 'form'}
          </p>
        </div>
        <StatusBadge status={lead.status} config={currentStatusCfg} />
      </div>

      <div className="space-y-6">
        {/* Edit form */}
        <section className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-500">Datos</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {FIELDS.map(({ key, label, type }) => (
              <div key={key}>
                <label className="mb-1 block text-xs font-medium text-gray-700">{label}</label>
                <input
                  type={type ?? 'text'}
                  value={(form[key] as string) ?? ''}
                  onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            ))}

            {/* Status */}
            <div className="sm:col-span-2">
              <label className="mb-1 block text-xs font-medium text-gray-700">Estado</label>
              <div className="flex flex-wrap items-center gap-2">
                {statuses.map((s) => {
                  const active = (form.status ?? lead.status) === s.id;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setForm({ ...form, status: s.id as LeadStatus })}
                      className="rounded-full border-2 px-3 py-1.5 text-xs font-semibold transition-all"
                      style={{
                        backgroundColor: active ? s.color : 'transparent',
                        borderColor: s.color,
                        color: active ? 'white' : s.color,
                      }}
                    >
                      {s.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="sm:col-span-2">
              <label className="mb-1 block text-xs font-medium text-gray-700">Mensaje</label>
              <textarea
                rows={3}
                value={(form.mensaje as string) ?? ''}
                onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                className="w-full resize-none rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="mt-4">
            <button onClick={save} disabled={saving}
              className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-60">
              {saving ? <><Loader2 className="h-4 w-4 animate-spin" /> Guardando…</> : 'Guardar cambios'}
            </button>
          </div>
        </section>

        {/* Notes */}
        <section className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-500">
            Notas internas ({lead.notes?.length ?? 0})
          </h2>
          <div className="mb-4 space-y-3">
            {(lead.notes ?? []).length === 0 && (
              <p className="text-sm text-gray-400">Sin notas aún.</p>
            )}
            {[...(lead.notes ?? [])].reverse().map((note, i) => (
              <div key={i} className="rounded-lg bg-amber-50 px-4 py-3">
                <p className="text-sm text-gray-800 whitespace-pre-wrap">{note.text}</p>
                <p className="mt-1 text-xs text-gray-400">{fmt(note.createdAt)}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-2 sm:flex-row sm:gap-3">
            <textarea
              rows={2}
              placeholder="Agregar una nota…"
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
              className="flex-1 resize-none rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
            />
            <button onClick={addNote} disabled={addingNote || !noteText.trim()}
              className="flex items-center justify-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-700 disabled:opacity-40 sm:self-end">
              {addingNote ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Agregar'}
            </button>
          </div>
        </section>

        {/* Danger zone — root only */}
        {isRoot && (
          <section className="rounded-xl border border-red-200 bg-white p-5">
            <h2 className="mb-1 text-sm font-semibold uppercase tracking-wide text-red-500">Zona de peligro</h2>
            <p className="mb-4 text-xs text-gray-400">Esta acción es permanente y no se puede deshacer.</p>
            <button onClick={() => setShowDeleteConfirm(true)}
              className="rounded-lg border border-red-300 px-4 py-2 text-sm font-semibold text-red-600 transition-colors hover:bg-red-50">
              Eliminar lead permanentemente
            </button>
          </section>
        )}
      </div>

      <ConfirmDialog
        isOpen={showDeleteConfirm}
        title="Eliminar lead"
        message={`¿Querés eliminar a "${lead.nombre || 'este lead'}"? Esta acción no se puede deshacer.`}
        confirmLabel="Sí, eliminar"
        onConfirm={confirmDelete}
        onCancel={() => setShowDeleteConfirm(false)}
        loading={deleteLoading}
      />

      <ToastContainer toasts={toasts} dismiss={dismiss} />
    </div>
  );
}
