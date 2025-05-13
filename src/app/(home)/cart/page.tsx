'use client'
import Image from "next/image";
import fone from '../../../../public/fone.png'
import { useShoppingCart } from "@/app/hooks/useShoppingCart";
import { Button } from "@/app/components/ui/Button";
import { Trash } from "@phosphor-icons/react";
import { formatterCurrency } from "@/app/utils/formatter";
import { Header } from "@/app/components/Header";
import { QuantityInput } from "@/app/components/ui/QuantityInput";
import { useEffect } from "react";
import { Summary } from "@/app/components/Summary";

export default function Cart() {
    const { allCartProductsAdded, addorIncrementProductCart, decrementProduct, removeItem, getSummary } = useShoppingCart();

    return (
        <>
            <Header title="Carrinho de compras" showHomeButton />
            <Summary 
                cartProducts={allCartProductsAdded}
                totalItem={getSummary().totalItems}
                totalPrice={getSummary().totalPrice}
                onIncrement={addorIncrementProductCart}
                onDecrement={decrementProduct}
                onRemove={removeItem}
            />
        </>

    );  
}