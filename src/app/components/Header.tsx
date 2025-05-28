
import { SignOut } from "@phosphor-icons/react";
import { Button } from "./ui/Button";
import { useAuth } from "../hooks/useAuth";
import { useRouter } from "next/navigation";

interface HeaderProps  {
    pageTitle: string
}
export function Header({ pageTitle }: HeaderProps) {
    const { signOut } = useAuth();
    const route = useRouter()

    const handleSignout = async () => {
        await signOut();
        route.push('/auth/sign-in')
    }

    return (
        <div className="flex justify-between items-center p-5 bg-purple-300">
            <h1 className="text-white font-heading font-bold text-2xl">{ pageTitle }</h1>
            <Button onClick={handleSignout} className="w-[50px] bg-stone">
                <SignOut size={22}/>
            </Button>
        </div>
    )
}