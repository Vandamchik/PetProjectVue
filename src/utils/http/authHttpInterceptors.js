import axios from "axios";

import { BASE_SERVER_URL } from '../.consts';


const $api = axios.create({
    withCredentials: true,
    baseURL: BASE_SERVER_URL
});

$api.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${ localStorage.getItem('authCrmToken') }`;
    return config
})

$api.interceptors.response.use(config => {
    return config;
}, async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401) {
        try {
            const response = await axios.get(`${BASE_SERVER_URL}/auth/refresh`, {
                withCredentials: true
            });
            localStorage.setItem('authCrmToken' , response.data?.accessToken);
            return $api.request(originalRequest);
        } catch (e) {
            console.log('User not authorized')
        }
    }
});

export default $api;
