import { ComponentProps } from "react";

interface InputCustomProps extends ComponentProps<'input'> {}

export function InputCustom(props: InputCustomProps) {
    return (
        <input className="w-full bg-white rounded-sm p-2" {...props} />
    )
}