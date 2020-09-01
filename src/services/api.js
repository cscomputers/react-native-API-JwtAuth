import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.b7web.com.br/devbarber/api'
})

export default {
    checkToken: async (token) => {
        const response = await api.post('/auth/refresh', {
            token
        });

        return response.data;
    },
    signIn: async (email, password) => {
        const response = await api.post('/auth/login', {
            email,
            password
        });

        return response.data;
    },
    signUp: async (name, email, password) => {
        const response = await api.post('/user', {
            name,
            email,
            password
        });

        return response.data;
    }
}