import { ComponentProps } from "react";
import { Button } from "./Button"

interface QuantityInputProps extends ComponentProps<'input'> {
    quantity: number,
    onIncrement: () => void;
    onDecrement: () => void;
}
export function QuantityInput({ quantity, onDecrement, onIncrement, ...pros } : QuantityInputProps) {
    return (
        <div className="flex justify-center items-center gap-3 bg-purple-200  rounded-md text-white font-bold">
            <Button onClick={onDecrement} className="hover:bg-zinc-800"> - </Button>
            <input className="w-full text-center" value={quantity} {...pros}/>
            <Button onClick={onIncrement} className="hover:bg-zinc-800"> + </Button>
        </div>
    )
}