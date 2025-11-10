import axios from "axios";
import Cookies from "js-cookie";

export const request = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL
})

request.interceptors.request.use((config) => {
    const token = Cookies.get('token');

    config.headers.Authorization = `Bearer ${token}`
    return config
});

request.interceptors.response.use((response) => {
    return response
},
    (error) => {
        if (error.response.status == 401) {
            return Promise.reject(error)
        }
    }
)