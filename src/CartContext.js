// /* eslint-disable no-unused-expressions */
import { createContext, useState } from "react";
import { productArray, getProductData } from "./productStore";

export const CartContext = createContext({
    items: [],
    getProductQuantity: () => { },
    addOneToCart: () => { },
    removeOneFromeCart: () => { },
    deleteFromCart: () => { },
    getTotalCost: () => { },
});

export function CartProvider({ children }) {
    const [cartProducts, setCartProducts] = useState([])

    // cart will contain [{ id: 1, quantity: 2 }]

    function getProductQuantity(id) {
        const quantity = cartProducts.find(product => product.id === id)?.quantity;

        if (quantity === undefined) return 0;

        return quantity;
    }

    function addOneToCart(id) {
        const quantity = getProductQuantity(id);

        if (quantity === 0) { // product is not in cart
            setCartProducts(
                [
                    ...cartProducts,
                    {
                        id,
                        quantity: 1
                    }
                ]
            )
        } else { // product is in cart
            setCartProducts(
                cartProducts.map(
                    product =>
                        product.id === id
                            ? { ...product, quantity: product.quantity + 1 }
                            : product
                )
            )
        }
    }

    function removeOneFromeCart(id) {
        const quantity = getProductQuantity(id);

        if (quantity === 1) {
            deleteFromCart(id);
        } else {
            setCartProducts(
                cartProducts.map(
                    product =>
                        product.id === id
                            ? { ...product, quantity: product.quantity - 1 }
                            : product
                )
            )
        }
    }

    function deleteFromCart(id) {
        setCartProducts(
            cartProducts.filter(currentProduct => {
                return currentProduct.id !== id;
            })
        )
    }

    function getTotalCost() {
        let totalCost = 0;

        cartProducts.map(cartItem => {
            const productData = getProductData(cartItem.id);
            totalCost += (productData.price * cartItem.quantity)
        })
    }

    const contextValue = {
        items: cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromeCart,
        deleteFromCart,
        getTotalCost
    }

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider