import { createContext, ReactNode, useCallback, useState } from "react";
import { api } from "../lib/axios";
import { Products } from "../components/Products";

export interface ProductsCart extends Products {
    quantity: number
}

interface ShoppingCartContextType {
    products: ProductsCart[],
    addProductCart: (product: Products) => void,
    decrementProductCart: (product: ProductsCart) => void
    removeProductCart: (product: ProductsCart) => void
}

export const ShoppingCartContext = createContext({} as ShoppingCartContextType); 

interface CartProviderProps {
    children: ReactNode
}

export function ShoppingCartProvider({ children }: CartProviderProps) {
    const [products, setProducts] = useState<ProductsCart[] >([]);

    const addProductCart = (product: Products) => {
         setProducts(prev => { 
            const productAlreadyAdded = prev.find(item => item.id === product.id);

            if (productAlreadyAdded) {
                return prev.map(item => item.id === product.id ? {...item, quantity: item.quantity + 1, price:  (item.price / item.quantity) * (item.quantity + 1)} : item)
            }

            return [...prev, {...product , quantity: 1 }]
        })
    }

    const decrementProductCart = (product: ProductsCart) => {
        setProducts(prev => { 
            return prev.map(item => item.id === product.id ? {...item, quantity: item.quantity - 1, price:  (item.price / product.quantity) * (product.quantity - 1)} : item)
        })
    }

    const removeProductCart = (product: ProductsCart) => {
        setProducts(prev => { 
            return prev.filter(item => item.id != product.id)
        })
    }

    return (
        <ShoppingCartContext.Provider value={{ products, addProductCart, decrementProductCart, removeProductCart }}>
            { children }
        </ShoppingCartContext.Provider>
    )
} 