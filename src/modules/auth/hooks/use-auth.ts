import { AuthContext } from '@/modules/auth/contexts/AuthContext';
import { useContext } from 'react';

export const useAuth = () => useContext(AuthContext);
