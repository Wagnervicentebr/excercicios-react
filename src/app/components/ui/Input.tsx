import { ComponentProps } from "react";
import { FieldError } from "react-hook-form";
import { twMerge } from "tailwind-merge";

interface InputProps extends ComponentProps<'input'> {
    label: string,
    errors: FieldError | undefined
}

export function Input({label, className, errors, ...props}: InputProps) {
    return (
        <div className="flex flex-col gap-1">
            <label htmlFor={label} className="font-heading text-base-title">{ label }</label>
            <input name={label} className={twMerge('w-full border-2 border-gray-400 rounded-sm p-2 outline-none', className)} {...props}/>
            { errors?.message && <span className="text-xs text-danger font-bold p-1">{ errors.message }</span> }
        </div>
    )
}