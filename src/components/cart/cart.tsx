import { shoppingCart } from "@/context/cartContext";
import styles from "@/styles/Home.module.css";
import Button from "@mui/material/Button";
import Link from "next/link";
import { numberFormatter } from "@/utils/utils";



export function CartShop() {

    const { cartItems, clearCart, increaseCart, decreaseCart } = shoppingCart();


    return (
        <>
            <div className={styles.CartContainer}>
                {cartItems.map((book, index) => (
                    <div className={styles.CartUnique} key={index}>
                        <div className={styles.CartText}>
                            <div className={styles.CartTextChild}>{book.title}</div>
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
                    <Button className={styles.CartButton} variant="outlined" color="inherit">Checkout</Button>
                    {cartItems.length === 0 ? <div><Link href="/store">
                        Go to Store
                    </Link></div>
                        : <Button variant="outlined" color="inherit" onClick={() => clearCart()}>Clear Cart</Button>}
                </div>
             
            </div>

        </>
    )
}