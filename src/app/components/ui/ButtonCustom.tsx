import { ComponentProps } from "react";

interface ButtonCustomProps extends ComponentProps<'button'> {}

export function ButtonCustom(props: ButtonCustomProps) {
    return (
        <button className="w-full text-white bg-purple-200 rounded-md p-2 cursor-pointer" {...props}></button>
    )
}