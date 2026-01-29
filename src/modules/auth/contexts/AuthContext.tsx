import type { AuthContextValueInterface } from '@modules/auth/interfaces/auth.interfaces';
import { createContext } from 'react';

export const AuthContext = createContext({} as AuthContextValueInterface);
