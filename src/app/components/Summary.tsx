import { Trash } from "@phosphor-icons/react"
import { ProductsCart } from "../contexts/ShoppingCartContext"
import { formatterCurrency } from "../utils/formatter"
import { QuantityInput } from "./ui/QuantityInput"
import Image from "next/image"

interface SummaryProps {
    cartProducts: ProductsCart[],
    totalPrice: number,
    totalItem: number,
    onIncrement: (product: ProductsCart) => void,
    onDecrement: (product: ProductsCart) => void,
    onRemove: (product: ProductsCart) => void,
}

export function Summary({ cartProducts, totalPrice, totalItem, onIncrement, onDecrement, onRemove }: SummaryProps) {
    if (!cartProducts.length) {
        return (
            <div className="flex flex-col justify-center items-center p-10 gap-3 bg-base-hover w-full mt-10 rounded-md">
                <span className="font-heading font-bold text-3xl ">Carrinho vazio :(</span>
            </div>
        )
    }

    return (
        <div className="flex flex-col gap-3 bg-base-hover w-full px-10 mt-10 rounded-md">
            {cartProducts?.map((item, index) => (
                <div key={item.id} className="grid grid-cols-5 items-center justify-center text-center pt-5">
                    <Image width={80} height={80} className="p-2 rounded-2xl"  src={`/${item.image}.png`} alt="" />
                    <span>{ item.description }</span>
                    <div className="flex justify-center items-center gap-3 ">
                        <div className="w-[80px]">
                            <QuantityInput quantity={item.quantity} onIncrement={() => onIncrement(item)} onDecrement={() => onDecrement(item)} />
                        </div>
                    </div>
                    <span>{ formatterCurrency.format(item.price) } </span>
                    <span><Trash className="text-danger cursor-pointer" size={24} onClick={() => onRemove(item)} /></span>
                </div>
            ))}               


            <div className="grid grid-cols-1">
                <div className="col-start-1 gap-1 w-full my-5 rounded-md">
                    <div className="flex flex-col">
                            <h2 className="font-heading font-bold text-2xl text-base-title">Subtotal</h2>
                        <span className="text-md font-bold text-base-subtitle">total de itens: { totalItem }</span>
                        <span className="text-md font-bold text-base-subtitle">total: {formatterCurrency.format(totalPrice)}</span>
                    </div>
                </div> 
            </div>
        </div>
    )
}