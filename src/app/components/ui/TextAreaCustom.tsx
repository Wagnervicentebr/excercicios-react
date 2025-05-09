import { ComponentProps } from "react";

interface TextAreaCustomProps extends ComponentProps<'textarea'> {}

export function TextAreaCustom(props: TextAreaCustomProps) {
    return (
        <textarea className="w-full bg-white rounded-sm p-2" {...props} />
    )
}