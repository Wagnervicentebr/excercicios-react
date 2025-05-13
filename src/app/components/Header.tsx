"use client"

import { House, HouseSimple, ShoppingCart } from "@phosphor-icons/react";
import { Button } from "./ui/Button";
import Link from "next/link";
import { useShoppingCart } from "../hooks/useShoppingCart";
import { useEffect } from "react";

interface HeaderProps {
    title: string,
    showHomeButton?: boolean
}
export function Header({ title, showHomeButton }: HeaderProps) {
    const { cartTotalItemAdded } = useShoppingCart();

    useEffect(() => {
    }, [cartTotalItemAdded])

    return (
        <div className="flex justify-between items-center">
            <h1 className="font-heading text-3xl font-bold text-white">{ title }</h1>

            <Button className="relative">
                
                {showHomeButton ? 
                    <Link href="/">
                        <House className="text-white" size={24} />
                    </Link> 
                    : 
                    <div>
                        <div className="absolute flex justify-center items-center h-6 w-6 rounded-full bg-yellow-200 -top-3 -right-2">
                            <span className="font-heading text-sm font-bold text-white">{ cartTotalItemAdded }</span>
                        </div>
                        <Link href="/cart">
                            <ShoppingCart className="text-white" size={24} />
                        </Link>
                    </div>
                }
              
            </Button>
        </div>
    )
}