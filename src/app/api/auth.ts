import { setCookie } from "nookies";
import { api } from "../lib/axios";

export interface UserLogin {
    email: string,
    password?: string
}

export async function Login({ email, password }: UserLogin) {
    const response = await api.post('/login', { email, password })

    const {user, accessToken } = response.data;

    setCookie(null, 'accessToken', accessToken, {
        maxAge: 60 * 60 * 24 * 7,
        path: '/',
    })
    
    return user;
}