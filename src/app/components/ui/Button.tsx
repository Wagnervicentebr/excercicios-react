"use client"

import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

interface ButtonProps extends ComponentProps<'button'> {}

export function Button({ className, ...props }: ButtonProps) {
    return (
        <button className={twMerge(`flex items-center p-2 bg-purple-300 rounded-md cursor-pointer hover:bg-purple-200 transition-colors duration-300 text-white`, className)} {...props}></button>
    )
}