import { shoppingCart } from "@/context/cartContext";

export default function Cart() {

    const { getItemQuantity, increaseCartQuantity, removeFromCart, decreaseCartQuantity } = shoppingCart();
    return (
        <>
            <h1>Cart</h1>
        </>
    )
}