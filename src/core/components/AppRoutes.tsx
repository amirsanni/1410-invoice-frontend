import App from '@/App';
import AuthLayout from '@/modules/auth/components/AuthLayout';
import Login from '@/modules/auth/components/login/Login';
import Register from '@/modules/auth/components/register/Register';
import InvoiceCreate from '@/modules/invoice/components/InvoiceCreate';
import InvoiceList from '@/modules/invoice/components/InvoiceList';
import Profile from '@/modules/profile/components/Profile';
import { AppRoutesData } from '@core/constants/app-routes.constants';
import { BrowserRouter, Route, Routes } from 'react-router';
import DashboardLayout from './DashboardLayout';
import InvoiceDetail from '@/modules/invoice/components/InvoiceDetail';
import InvoiceUpdate from '@/modules/invoice/components/InvoiceUpdate';
import ProductList from '@/modules/product/components/ProductList';
import ProductCreate from '@/modules/product/components/ProductCreate';
import ProductDetail from '@/modules/product/components/ProductDetail';
import ProductUpdate from '@/modules/product/components/ProductUpdate';
import Setting from '@/modules/setting/components/Setting';
import Dashboard from '@/modules/Dashboard/components/Dashboard';

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={AppRoutesData.root} element={<App />}></Route>

                <Route element={<AuthLayout />}>
                    <Route path={AppRoutesData.auth.login} element={<Login />}></Route>
                    <Route path={AppRoutesData.auth.register} element={<Register />}></Route>
                </Route>

                <Route element={<DashboardLayout />}>
                    <Route path={AppRoutesData.dashboard} element={<Dashboard />}></Route>
                    <Route path={AppRoutesData.invoices.root}>
                        <Route index={true} element={<InvoiceList />}></Route>
                        <Route path={AppRoutesData.invoices.create} element={<InvoiceCreate />}></Route>
                        <Route path={AppRoutesData.invoices.details} element={<InvoiceDetail />}></Route>
                        <Route path={AppRoutesData.invoices.edit} element={<InvoiceUpdate />}></Route>
                    </Route>
                    <Route path={AppRoutesData.products.root}>
                        <Route index={true} element={<ProductList />}></Route>
                        <Route path={AppRoutesData.products.create} element={<ProductCreate />}></Route>
                        <Route path={AppRoutesData.products.details} element={<ProductDetail />}></Route>
                        <Route path={AppRoutesData.products.edit} element={<ProductUpdate />}></Route>
                    </Route>
                    <Route path={AppRoutesData.profile} element={<Profile />}></Route>
                    <Route path={AppRoutesData.settings} element={<Setting />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
