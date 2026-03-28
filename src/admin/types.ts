import type { Timestamp } from 'firebase/firestore';

/** Dynamic, user-defined status — stored as a string ID in leads */
export type LeadStatus = string;

export interface StatusConfig {
  id: string;
  label: string;
  color: string; // hex, e.g. "#3b82f6"
}

export interface LeadNote {
  text: string;
  createdAt: Timestamp;
}

export interface Lead {
  id: string;
  nombre: string;
  edad: string;
  ciudad: string;
  email: string;
  telefono: string;
  mensaje: string;
  createdAt: Timestamp;
  status: LeadStatus;
  notes: LeadNote[];
  isNew: boolean;
  source: 'form' | 'manual' | 'invite';
  inviteToken?: string;
}

export interface Invite {
  id: string;
  token: string;
  label: string;
  createdAt: Timestamp;
  expiresAt: Timestamp;
  isUsed: boolean;
  usedAt?: Timestamp;
  usedBy?: string;
}

export interface SiteSettings {
  successTitle: string;
  successMessage: string;
}
