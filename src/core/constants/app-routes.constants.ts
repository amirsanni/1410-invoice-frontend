export const AppRoutesData = {
    root: '/',
    auth: {
        login: '/auth/login',
        register: '/auth/register',
    },
    dashboard: '/dashboard',
    invoices: {
        root: '/invoices',
        create: '/create',
        details: '/:invoiceId',
        edit: '/:invoiceId/edit',
    },
    products: {
        root: '/products',
        create: '/create',
        details: '/:productId',
        edit: '/:productId/edit',
    },
    profile: '/profile',
    settings: '/settings'
};
