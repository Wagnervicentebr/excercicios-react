import { useState, useContext, useEffect } from "react";
import { ShoppingCartContext } from "../contexts/ShoppingCartContext";
import { api } from "../lib/axios";
import { CardList } from "./CardList";
import { useShoppingCart } from "../hooks/useShoppingCart";

export interface Products {
    id: number,
    description: string,
    price: number,
    image: string
}


export function Products() {
    const [products, setProducts] = useState<Products[] | null>(null);
    const { addorIncrementProductCart } = useShoppingCart();

    async function getProducts() {
        const response = await api.get('/products');

        setProducts(response.data);
    }

    function handleAddProduct(product: Products) {
        addorIncrementProductCart(product);
    }

    useEffect(() => {
        getProducts();
    }, [])

    return (
        <CardList products={products} onAdd={handleAddProduct}/>
    )
}