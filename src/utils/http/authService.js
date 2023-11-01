import $api from './authHttpInterceptors.js';

export class AuthService {
    static async login( email, password ) {
    return $api.post('/auth/login', { email, password })
}

    static async registration(email, password, name) {
        return $api.post('/auth/registration', { email, password, name })
    }

    static async logout() {
        return $api.post('/auth/logout')
    }

    static async getAllUsers() {
        return $api.get('/auth/allClients')
    }
}
