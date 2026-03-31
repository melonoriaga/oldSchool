import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import './app/gsapSetup';
import './app/revealSetup';
import App from './app/App';
import { UnderConstructionPage } from './app/UnderConstructionPage';
import './styles/index.css';
import 'remixicon/fonts/remixicon.css';

// Admin
import { AdminLayout } from './admin/components/AdminLayout';
import { LoginPage } from './admin/pages/LoginPage';
import { LeadsPage } from './admin/pages/LeadsPage';
import { LeadDetailPage } from './admin/pages/LeadDetailPage';
import { InvitesPage } from './admin/pages/InvitesPage';
import { SettingsPage } from './admin/pages/SettingsPage';
import { StatusesPage } from './admin/pages/StatusesPage';

// Public
import { RegisterPage } from './pages/RegisterPage';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/en-construccion/*" element={<UnderConstructionPage />} />

        {/* Landing */}
        <Route path="/" element={<App />} />

        {/* Invite-based registration */}
        <Route path="/r/:token" element={<RegisterPage />} />

        {/* Admin login (public) */}
        <Route path="/admin/login" element={<LoginPage />} />

        {/* Admin panel (auth-gated via AdminLayout) */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="leads" replace />} />
          <Route path="leads" element={<LeadsPage />} />
          <Route path="leads/:id" element={<LeadDetailPage />} />
          <Route path="invites" element={<InvitesPage />} />
          <Route path="statuses" element={<StatusesPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
