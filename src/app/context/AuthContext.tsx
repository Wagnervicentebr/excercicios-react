'use client'

import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";
import { useToast } from "../hooks/useToast";
import { Login, UserLogin } from "../api/auth";
import { destroyCookie, parseCookies } from "nookies";
import path from "path";

export interface User {
    email: string,
    name: string,
}

type AuthContextType = {
    user: User | null,
    isAuthenticated: boolean,
    signIn: (user: UserLogin) => void
    signOut: () => void
}

interface AuthContextProviderProps {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider({ children } : AuthContextProviderProps) {
    const [user, setUser] = useState<User | null>(null);
    const { ToastError } = useToast();

    useEffect(() => {
        const { accessToken } = parseCookies();
        const storedUser = localStorage.getItem('user');

        if (accessToken && storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, [])

    const signIn = async (userLogin : UserLogin) => {
        try {
            const userResponse = await Login(userLogin)

            setUser({ email: userResponse.email, name: userResponse.name });
            localStorage.setItem('user', JSON.stringify(userResponse))

        } catch (error) {
            ToastError(String(error))
        }
    }

    const signOut = async () => {
        setUser(null);

        destroyCookie({}, 'accessToken', {path: '/'})
        localStorage.removeItem('user');
    }

    const isAuthenticated = !!user

    return (
        <AuthContext.Provider value={{ user, signIn, isAuthenticated, signOut}}>
            {children}
        </AuthContext.Provider>
    )
}

