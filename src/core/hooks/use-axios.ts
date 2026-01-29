import { useAuth } from '@/modules/auth/hooks/use-auth';
import axios from 'axios';

export const useAxios = () => {
    const { user, refreshToken } = useAuth();

    const axiosInstance = axios.create({
        baseURL: import.meta.env.VITE_API_BASE_URL,
        allowAbsoluteUrls: true,
        headers: {
            Authorization: `Bearer: ${user.accessToken}`,
        },
        withCredentials: true,
    });

    axiosInstance.interceptors.response.use(undefined, async (error) => {
        if (error.response?.status === 401) {
            await refreshToken();
            return axiosInstance(error.config); // Retry original request???
        }

        throw error;
    });

    return axiosInstance;
};
