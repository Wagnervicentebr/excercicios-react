import { ReactNode } from "react";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react";

interface FormUserLoginPrps {
    children: ReactNode
    screenName: 'Login' | 'Resetar Senha',
    subtitleAcion: string,
    buttonActionText: string
    loading: boolean
    onSubmit: () => void,
}

export function FormUserLogin({ 
        children, screenName, 
        subtitleAcion, 
        buttonActionText, 
        loading, 
        onSubmit
    }: FormUserLoginPrps) {
    return (
        <form onSubmit={onSubmit} className="flex flex-col w-full max-w-md bg-white rounded-md my-auto mx-auto gap-8 p-10">
            <div className="flex items-center gap-2">
                { screenName != "Login" && 
                    <Link href={'/auth/sign-in'}>
                        <ArrowLeft className="font-heading font-bold text-base-title" size={26} />
                    </Link>
                }
                <h1 className="text-base-title font-heading text-4xl">{ screenName }</h1>
            </div>
            <span className="text-base-subtitle text-sm">{ subtitleAcion }</span>
            
            <div className="flex flex-col gap-5">
                { children }
            </div>

            { screenName == "Login" && <span className="text-sm text-base-subtitle cursor-pointer"><u><Link href={'/auth/forgot-password'}>Esqueci minha senha</Link></u></span>}

            <Button type="submit" disabled={loading} className="disabled:bg-gray-400 disabled:cursor-no-drop" >{ buttonActionText }</Button>
        </form>
    )
}