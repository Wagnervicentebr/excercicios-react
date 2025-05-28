import { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ComponentProps<'button'> {
    children: ReactNode
}

export function Button({ children, className, ...props}: ButtonProps) {
    return (
        <button className={twMerge('w-full rounded-sm text-white bg-purple-300 p-3 cursor-pointer hover:bg-purple-200 transition-colors duration-300', className)} {...props} >
            { children }
        </button>
    )
}