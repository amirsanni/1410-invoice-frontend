import { ApiRoutesData } from '@/core/constants/api-routes.constants';
import { AppRoutesData } from '@/core/constants/app-routes.constants';
import { AuthContext } from '@/modules/auth/contexts/AuthContext';
import type {
    AuthContextValueInterface,
    AuthenticatedUser,
    AuthProviderInterface,
    AuthRefreshTokenResponseInterface,
} from '@/modules/auth/interfaces/auth.interfaces';
import axios from 'axios';
import { useEffect, useEffectEvent, useState } from 'react';

const apiBaseUrl: string = import.meta.env.VITE_API_BASE_URL;
export const AuthProvider = ({ children }: AuthProviderInterface) => {
    const [user, setUser]: [AuthenticatedUser, React.Dispatch<React.SetStateAction<AuthenticatedUser>>] = useState(
        {} as AuthenticatedUser
    );
    const [isLoading, setIsLoading]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState<boolean>(true);

    const authenticateUser = useEffectEvent(() => {
        refreshToken();
    });

    useEffect(() => {
        authenticateUser();
    }, []);

    const refreshToken = async () => {
        try {
            /**
             * Call refresh token endpoint
             * If successful, save the received access token in state.
             * If not successful, navigate to log in page.
             */
            setIsLoading(true);
            const response = await axios({
                url: `${apiBaseUrl}${ApiRoutesData.auth.refreshToken.route}`,
                method: ApiRoutesData.auth.refreshToken.httpMethod,
            });
            const sessionData: AuthRefreshTokenResponseInterface = response.data;
            setIsLoading(false);
            if (sessionData) {
                saveSessionData(sessionData);
            } else {
                location.assign(AppRoutesData.auth.login);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    const saveSessionData = (sessionData: AuthRefreshTokenResponseInterface) => {
        setUser({
            accessToken: sessionData.accessToken,
            name: sessionData.user?.name,
            email: sessionData.user?.email,
            id: sessionData.user?.id,
        });
    };

    const clearSessionData = async () => {
        await axios({
            url: `${apiBaseUrl}${ApiRoutesData.auth.logout.route}`,
            method: ApiRoutesData.auth.logout.httpMethod,
        });

        setUser({} as AuthenticatedUser);
        location.assign(AppRoutesData.auth.login);
    };

    const contextValue: AuthContextValueInterface = {
        user,
        isLoading,
        saveSessionData,
        clearSessionData,
        refreshToken,
    };

    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};
