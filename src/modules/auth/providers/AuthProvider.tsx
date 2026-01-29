import { AuthContext } from '@/modules/auth/contexts/AuthContext';
import type {
    AuthContextValueInterface,
    AuthenticatedUser,
    AuthProviderInterface,
    AuthSessionValidationResponse,
} from '@/modules/auth/interfaces/auth.interfaces';
import axios from 'axios';
import { useEffect, useEffectEvent, useState } from 'react';
import { useNavigate } from 'react-router';

export const AuthProvider = ({ children }: AuthProviderInterface) => {
    const navigate = useNavigate();
    const [user, setUser]: [AuthenticatedUser, React.Dispatch<React.SetStateAction<AuthenticatedUser>> | undefined] =
        useState(null);
    const [isLoading, setIsLoading]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState<boolean>(true);

    const handleNavigation = useEffectEvent((routeToNavigateTo: string) => {
        navigate(routeToNavigateTo);
    });

    useEffect(() => {
        // Validate the user's session
        const validateSession = async (sessionToken: string) => {
            try {
                setIsLoading(true);
                const response = await axios.post(
                    `${import.meta.env.VITE_API_BASE_URL}/auth/validate-session`,
                    undefined,
                    {
                        headers: { Authorization: `Bearer ${sessionToken}` },
                    }
                );

                const sessionData: AuthSessionValidationResponse = response.data;
                if (sessionData) {
                    setUser(sessionData.user);
                    setIsLoading(false);
                }
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        };

        /**
         * Check if the user token is in cookie.
         * If yes, use it to fetch the details of the user.
         *
         * If he is not logged in, navigate to log in page.
         */
        const sessionToken = '';
        if (!sessionToken) {
            handleNavigation('/auth/login');
        } else {
            validateSession(sessionToken);
        }
    }, []);

    const contextValue: AuthContextValueInterface = {
        user,
        isLoading,
    };

    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};
