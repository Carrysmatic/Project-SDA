import { ReactNode, createContext, useContext, useState } from 'react'
import { Book } from '@/models/books';

const ShoppingCartContext = createContext({} as ShoppingCartContext)


type ShoppingCartContext = {
    cartItems: Book[];
    isInCart: (id: string) => boolean;
    addToCart: (item: Book) => void;
    removeFromCart: (id: string) => void;
    editCart: (id: string, quantity: number) => void;
    clearCart: () => void;
}
export function shoppingCart() {
    return useContext(ShoppingCartContext)
}

type ShoppingCartProviderProps = {
    children: ReactNode
}
export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
    const [cartItems, setCartItems] = useState<Book[]>([])


    function addToCart(item: Book) {
        setCartItems(cartItems => [...cartItems, item]);
    }

    function isInCart(id: string) {
        return cartItems.find(item => item._id === id) ? true : false;
    }

    function removeFromCart(id: string) {
        setCartItems(state => state.filter(item => item._id !== id));
    }

    function editCart(id: string, quantity: number) {
        setCartItems(cartItems => cartItems.map(item => item._id === id ? { ...item, quantity } : item));
    }

    function clearCart() {
        setCartItems([]);
    }
    // show id from cartItems
    console.log(cartItems)

    // add , remove , increase(edit), 


    return (
        <ShoppingCartContext.Provider value={{ cartItems, removeFromCart, editCart, isInCart, addToCart, clearCart }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}