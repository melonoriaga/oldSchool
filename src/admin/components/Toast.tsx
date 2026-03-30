import { useState, useCallback, useEffect } from 'react';
import { CheckCircle, XCircle, X } from 'lucide-react';

export type ToastType = 'success' | 'error';

export interface ToastItem {
  id: string;
  type: ToastType;
  message: string;
}

export function useToast() {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const showToast = useCallback((message: string, type: ToastType = 'success') => {
    const id = Math.random().toString(36).slice(2);
    setToasts((prev) => [...prev, { id, type, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3500);
  }, []);

  const dismiss = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return { toasts, showToast, dismiss };
}

interface ToastContainerProps {
  toasts: ToastItem[];
  dismiss: (id: string) => void;
}

export function ToastContainer({ toasts, dismiss }: ToastContainerProps) {
  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-4 right-3 z-[90] flex w-[min(calc(100vw-1.5rem),20rem)] flex-col gap-2">
      {toasts.map((toast) => (
        <ToastCard key={toast.id} toast={toast} onDismiss={() => dismiss(toast.id)} />
      ))}
    </div>
  );
}

function ToastCard({ toast, onDismiss }: { toast: ToastItem; onDismiss: () => void }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Trigger enter animation
    const t = setTimeout(() => setVisible(true), 10);
    return () => clearTimeout(t);
  }, []);

  const isSuccess = toast.type === 'success';

  return (
    <div
      className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3 shadow-lg transition-all duration-300 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
      } ${
        isSuccess
          ? 'border-green-200 bg-white'
          : 'border-red-200 bg-white'
      }`}
    >
      {isSuccess
        ? <CheckCircle className="h-5 w-5 shrink-0 text-green-500" strokeWidth={2} />
        : <XCircle    className="h-5 w-5 shrink-0 text-red-500"   strokeWidth={2} />
      }
      <p className="flex-1 text-sm font-semibold text-gray-800">{toast.message}</p>
      <button
        onClick={onDismiss}
        className="shrink-0 text-gray-400 transition-colors hover:text-gray-600"
        aria-label="Cerrar"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
