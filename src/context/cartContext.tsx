import { ReactNode, createContext, useContext, useState } from 'react'

const ShoppingCartContext = createContext({} as ShoppingCartContext)

type CartItem = {
    id: string;
    quantity: number;
}


type ShoppingCartContext = {
    getItemQuantity: (id: string) => number;
    increaseCartQuantity: (id: string) => void;
    decreaseCartQuantity: (id: string) => void;
    removeFromCart: (id: string) => void;
}
export function shoppingCart() {
    return useContext(ShoppingCartContext)
}

type ShoppingCartProviderProps = {
    children: ReactNode
}
export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
    const [cartItems, setCartItems] = useState<CartItem[]>([])

    function getItemQuantity(id: string) {
        return cartItems.find((item) => item.id === id)?.quantity || 0;
    }
    function increaseCartQuantity(id: string) {
        setCartItems(currItems => {
            if (currItems.find((item) => item.id === id) === undefined) {
                return [...currItems, { id, quantity: 1 }]
            } else {
                return currItems.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item;
                    }
                })
            }
        })
    }
    function decreaseCartQuantity(id: string) {
        setCartItems(currItems => {
            if (currItems.find((item) => item.id === id)?.quantity === 1) {
                return currItems.filter((item) => item.id !== id)
            } else {
                return currItems.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return item;
                    }
                })
            }
        })
    }
    function removeFromCart(id: string) {
        setCartItems(currItems => {
            return currItems.filter((item) => item.id !== id)
        })
    }


    return (
        <ShoppingCartContext.Provider value={{ getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}