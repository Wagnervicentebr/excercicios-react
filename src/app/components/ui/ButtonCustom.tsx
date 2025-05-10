import { ComponentProps } from "react";

interface ButtomCustomProps extends ComponentProps<'button'> {}

export function ButtomCustom(props : ButtomCustomProps) {
    return (
        <button className="bg-purple-200 text-white border border-purple-300 p-2 rounded-md" {...props}/>
    )
}
