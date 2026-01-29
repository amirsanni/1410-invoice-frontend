import '@/index.css';
import AppRoutes from '@/routes.tsx';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AuthProvider } from './modules/auth/providers/AuthProvider';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <AuthProvider>
            <AppRoutes />
        </AuthProvider>
    </StrictMode>
);
