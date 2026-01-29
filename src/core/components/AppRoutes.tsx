import App from '@/App';
import AuthLayout from '@/modules/auth/components/AuthLayout';
import Login from '@/modules/auth/components/login/Login';
import Register from '@/modules/auth/components/register/Register';
import Profile from '@/modules/profile/components/Profile';
import { AppRoutesData } from '@core/constants/app-routes.constants';
import { BrowserRouter, Route, Routes } from 'react-router';
import DashboardLayout from './DashboardLayout';

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
                    <Route path={AppRoutesData.profile} element={<Profile />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
