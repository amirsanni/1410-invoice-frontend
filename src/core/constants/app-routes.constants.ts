export const AppRoutesData = {
    root: '/',
    auth: {
        login: '/auth/login',
        logout: '/auth/logout',
        register: '/auth/register',
    },
    dashboard: '/dashboard',
    invoice: {
        create: '/invoices/create',
        details: '/invoices/:invoiceId/create',
        edit: '/invoices/:invoiceId/edit',
        root: '/invoices',
    },
    products: {
        create: '/products/create',
        details: '/products/:productId/create',
        edit: '/products/:productId/edit',
        root: '/products',
    },
    profile: '/profile',
    settings: '/settings'
};
