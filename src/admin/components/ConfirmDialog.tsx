import { Loader2, TriangleAlert } from 'lucide-react';

interface ConfirmDialogProps {
  isOpen: boolean;
  title: string;
  message: string;
  confirmLabel?: string;
  onConfirm: () => void;
  onCancel: () => void;
  loading?: boolean;
  variant?: 'danger' | 'warning';
}

export function ConfirmDialog({
  isOpen,
  title,
  message,
  confirmLabel = 'Confirmar',
  onConfirm,
  onCancel,
  loading = false,
  variant = 'danger',
}: ConfirmDialogProps) {
  if (!isOpen) return null;

  const confirmClass =
    variant === 'danger'
      ? 'bg-red-600 hover:bg-red-700 text-white'
      : 'bg-yellow-500 hover:bg-yellow-600 text-white';

  const iconClass =
    variant === 'danger'
      ? 'bg-red-100 text-red-600'
      : 'bg-yellow-100 text-yellow-600';

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/50 p-4"
      onMouseDown={(e) => { if (e.target === e.currentTarget && !loading) onCancel(); }}
    >
      <div className="w-full max-w-sm rounded-2xl border border-gray-200 bg-white p-6 shadow-2xl">
        {/* Icon + title */}
        <div className="mb-4 flex items-start gap-3">
          <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${iconClass}`}>
            <TriangleAlert className="h-5 w-5" strokeWidth={2.5} />
          </span>
          <div>
            <h3 className="text-base font-bold text-gray-900">{title}</h3>
            <p className="mt-1 text-sm text-gray-500">{message}</p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            type="button"
            onClick={onCancel}
            disabled={loading}
            className="flex-1 rounded-xl border border-gray-300 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50 disabled:opacity-50"
          >
            Cancelar
          </button>
          <button
            type="button"
            onClick={onConfirm}
            disabled={loading}
            className={`flex flex-1 items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-semibold transition-colors disabled:opacity-60 ${confirmClass}`}
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Eliminando…
              </>
            ) : (
              confirmLabel
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
