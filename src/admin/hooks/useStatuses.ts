import { useState, useEffect, useCallback } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import type { StatusConfig } from '../types';

export const DEFAULT_STATUSES: StatusConfig[] = [
  { id: 'new',       label: 'Nuevo',      color: '#3b82f6' },
  { id: 'contacted', label: 'Contactado', color: '#eab308' },
  { id: 'qualified', label: 'Calificado', color: '#a855f7' },
  { id: 'confirmed', label: 'Confirmado', color: '#22c55e' },
  { id: 'rejected',  label: 'Descartado', color: '#ef4444' },
];

export const COLOR_PALETTE = [
  { hex: '#3b82f6', name: 'Azul' },
  { hex: '#0ea5e9', name: 'Celeste' },
  { hex: '#14b8a6', name: 'Teal' },
  { hex: '#22c55e', name: 'Verde' },
  { hex: '#84cc16', name: 'Lima' },
  { hex: '#eab308', name: 'Amarillo' },
  { hex: '#f97316', name: 'Naranja' },
  { hex: '#ef4444', name: 'Rojo' },
  { hex: '#ec4899', name: 'Rosa' },
  { hex: '#a855f7', name: 'Violeta' },
  { hex: '#6b7280', name: 'Gris' },
  { hex: '#1f2937', name: 'Negro' },
];

export function useStatuses() {
  const [statuses, setStatuses] = useState<StatusConfig[]>(DEFAULT_STATUSES);
  const [loading, setLoading] = useState(true);

  const fetch = useCallback(async () => {
    const snap = await getDoc(doc(db, 'settings', 'statuses'));
    if (snap.exists() && (snap.data().items as StatusConfig[])?.length > 0) {
      setStatuses(snap.data().items as StatusConfig[]);
    } else {
      await setDoc(doc(db, 'settings', 'statuses'), { items: DEFAULT_STATUSES });
    }
    setLoading(false);
  }, []);

  useEffect(() => { fetch(); }, [fetch]);

  const save = async (items: StatusConfig[]) => {
    await setDoc(doc(db, 'settings', 'statuses'), { items });
    setStatuses(items);
  };

  /** Find a status config by ID, with graceful fallback */
  const find = (id: string): StatusConfig =>
    statuses.find((s) => s.id === id) ?? { id, label: id, color: '#6b7280' };

  return { statuses, loading, save, find, refresh: fetch };
}
