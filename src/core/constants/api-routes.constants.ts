import { HTTP_METHODS } from "@core/enums/http-methods.enums";

export const ApiRoutesData = {
    auth: {
        login: {
            route: '/auth/login',
            httpMethod: HTTP_METHODS.POST
        },
        logout: {
            route: '/auth/logout',
            httpMethod: HTTP_METHODS.POST
        },
        refreshToken: {
            route: '/auth/refresh-token',
            httpMethod: HTTP_METHODS.POST,
        },
        register: {
            route: '/auth/register',
            httpMethod: HTTP_METHODS.POST
        },
    },
    invoice: {
        create: {
            route: '/invoices',
            httpMethod: HTTP_METHODS.POST
        },
        edit: {
            route: '/invoices',
            httpMethod: HTTP_METHODS.PATCH
        },
        get: {
            route: '/invoices',
            httpMethod: HTTP_METHODS.GET
        },
    },
    products: {
        create: {
            route: '/products',
            httpMethod: HTTP_METHODS.POST
        },
        edit: {
            route: '/products',
            httpMethod: HTTP_METHODS.PATCH
        },
        get: {
            route: '/products',
            httpMethod: HTTP_METHODS.GET
        },
    },
    profile: {
        get: {
            route: '/profile',
            httpMethod: HTTP_METHODS.GET
        },
        update: {
            route: '/profile',
            httpMethod: HTTP_METHODS.PATCH
        }
    },
    settings: {
        get: {
            route: '/settings',
            httpMethod: HTTP_METHODS.GET
        },
        update: {
            route: '/settings',
            httpMethod: HTTP_METHODS.PATCH
        }
    }
};
