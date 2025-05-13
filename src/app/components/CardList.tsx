'use client'

import { Products } from "../(home)/page"
import { ProductCard } from "./ProductCard"

interface CardListProps { 
    products: Products[] | null;
    onAdd: (product: Products) => void;
}
export function CardList({ products, onAdd }: CardListProps) {
    return (
        <div className="grid grid-cols-4 py-5 gap-7">
            {products?.map((item) => (
                <ProductCard key={item.id} item={item} onAdd={onAdd} /> 
            ))}
        </div>
    )   
}