import { ReactNode, createContext, useContext, useState } from 'react'
import { Book } from '@/models/books';

const ShoppingCartContext = createContext({} as ShoppingCartContext)


type ShoppingCartContext = {
    cartItems: Book[];
    isInCart: (id: string) => boolean;
    addToCart: (item: Book) => void;
    removeFromCart: (id: string) => void;
    clearCart: () => void;
    increaseCart: (id: string) => void;
    decreaseCart: (id: string) => void;

}
export function shoppingCart() {
    return useContext(ShoppingCartContext)
}

type ShoppingCartProviderProps = {
    children: ReactNode
}

interface CartBook extends Book {
    maxQuantity: number;
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
    const [cartItems, setCartItems] = useState<CartBook[]>([])

    function addToCart(item: Book) {
        const newItem = { ...item, quantity: 1, maxQuantity: item.quantity };
        setCartItems(cartItems => [...cartItems, newItem]);
    }

    function isInCart(id: string) {
        return cartItems.find(item => item._id === id) ? true : false;
    }

    function removeFromCart(id: string) {
        setCartItems(state => state.filter(item => item._id !== id));
    }

    function increaseCart(id: string) {
        setCartItems(cartItems => cartItems.map(item =>
            item._id === id
                ? { ...item, quantity: item.quantity >= item.maxQuantity ? item.maxQuantity : item.quantity + 1 }
                : item
        ));
    }
    function decreaseCart(id: string) {
        setCartItems(cartItems => cartItems.map(item =>
            item._id === id
                ? { ...item, quantity: item.quantity <= 1 ? 1 : item.quantity - 1 }
                : item
        ));
    }

    function clearCart() {
        setCartItems([]);
    }
  
    console.log(cartItems)

    return (
        <ShoppingCartContext.Provider value={{ decreaseCart, increaseCart, cartItems, removeFromCart, isInCart, addToCart, clearCart }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}