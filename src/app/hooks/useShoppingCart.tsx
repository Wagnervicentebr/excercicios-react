import { useContext, useEffect, useState } from "react"
import { ProductsCart, ShoppingCartContext } from "../contexts/ShoppingCartContext"
import { Products } from "../components/Products";

export function useShoppingCart() {
    const [shoppingCart, setShoppingCart] = useState<ProductsCart[]>([]);
    const { products, addProductCart, decrementProductCart, removeProductCart } = useContext(ShoppingCartContext);

    const cartTotalItemAdded = shoppingCart?.length;
    const allCartProductsAdded = shoppingCart;

    const decrementQuantity = () => {}

    const addorIncrementProductCart = (product : Products) => {
        addProductCart(product);
    }

    const decrementProduct = (product : ProductsCart) => {
        if (product.quantity === 1) return;
        decrementProductCart(product);
    }

    const removeItem = (product: ProductsCart) => {
        removeProductCart(product);
    }

    const getSummary = () => {
        return shoppingCart.reduce((acc, item) => {
            acc.totalPrice += item.price;
            acc.totalItems += item.quantity;

            return acc;
        }, {totalPrice: 0, totalItems: 0})
    }

    useEffect(() => {
        setShoppingCart(products)
    }, [products])
         
    return { 
        cartTotalItemAdded,
        allCartProductsAdded,
        addorIncrementProductCart,
        decrementProduct,
        removeItem,
        getSummary
    }
}