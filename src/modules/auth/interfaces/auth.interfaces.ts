export interface AuthProviderInterface {
    children: React.ReactNode;
}

export interface AuthenticatedUser {
    id: number;
    name: string;
    token: string;
}

export interface AuthContextValueInterface {
    user: AuthenticatedUser;
    isLoading: boolean;
}

export interface AuthSessionValidationResponse {
    user: AuthenticatedUser;
}