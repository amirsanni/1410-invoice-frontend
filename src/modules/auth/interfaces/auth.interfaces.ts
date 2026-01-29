export interface AuthProviderInterface {
    children: React.ReactNode;
}

export interface AuthenticatedUser {
    accessToken: string;
    email: string;
    id: number;
    name: string;
}

export interface AuthContextValueInterface {
    isLoading: boolean;
    user: AuthenticatedUser;
    clearSessionData: () => Promise<void>;
    refreshToken: () => Promise<void>;
    saveSessionData: (sd: AuthRefreshTokenResponseInterface) => void;
}

export interface AuthRefreshTokenResponseInterface {
    accessToken: string;
    user: {
        email: string;
        id: number;
        name: string;
    };
}
