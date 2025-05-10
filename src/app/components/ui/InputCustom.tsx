import { clsx } from "clsx";
import { ComponentProps } from "react";
import { twMerge } from 'tailwind-merge'

interface InputCustomProps extends ComponentProps<'input'> {}

export function InputCustom({className, ...props} : InputCustomProps) {
    return (
        <input className={twMerge(clsx('bg-white border border-purple-200 p-2 rounded-sm', className))} {...props}/>
    )
}
