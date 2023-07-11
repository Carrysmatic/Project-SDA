import { shoppingCart } from "@/context/cartContext";
import styles from "@/styles/Home.module.css";
import Button from "@mui/material/Button";
import Link from "next/link";



export function CartShop() {

    const { cartItems, clearCart, increaseCart, decreaseCart } = shoppingCart();
    const numberFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    })

    return (
        <>
            <div className={styles.CartContainer}>
                {cartItems.map((book, index) => (
                    <div className={styles.CartUnique} key={index}>
                        <div className={styles.CartText}>
                            <div className={styles.CartTextChild}>Title: {book.title}</div>
                            <div className={styles.CartTextChild}>Author: {book.author}</div>
                        </div>
                        <div className={styles.CartText}>
                            <Button variant="outlined" color="inherit" onClick={() => decreaseCart(book._id)}> - </Button>
                            <div className={styles.CartTextChild}>{book.quantity}</div>
                            <Button variant="outlined" color="inherit" onClick={() => increaseCart(book._id)}> + </Button>
                            <div className={styles.CartTextChild}>Price: {numberFormatter.format(book.price)}</div>
                        </div>
                    </div>
                )
                )
                }
                <div className={styles.CartUnique} >
                    <div className={styles.CartTextChild}>Total Price: {numberFormatter.format(cartItems.reduce((acc, book) => acc + book.price * book.quantity, 0))}</div>
                    <Button variant="outlined" color="inherit">Checkout</Button>
                    {cartItems.length === 0 ? <div><Link href="/store">
                        Go to Store
                    </Link></div>
                        : <Button variant="outlined" color="inherit" onClick={() => clearCart()}>Clear Cart</Button>}
                </div>
                {/* map -> lista de carti , display title price Quant si edit 
         
         total price at the end
            */}
            </div>

        </>
    )
}