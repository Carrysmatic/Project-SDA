import { Book } from "@/models/books";
import styles from "@/styles/Home.module.css";
import Button from "@mui/material/Button";
import { shoppingCart } from "@/context/cartContext";

interface StoreGridProps {
    books: Array<Book>;
}

export default function StoreGrid(props: StoreGridProps) {

    const { addToCart, removeFromCart, isInCart, cartItems } = shoppingCart();

    console.log({ books: props.books })

    return (
        <div className={styles.storeGrid}>
            {props.books.map((book, index) => (
                <div className={styles.storeGridItem} key={index}>
                    <div className={styles.storeGridItemImg}>
                        <img src={""} alt={""} />
                    </div>
                    <div className={styles.storeGridItemTitle}>Title: {book.title}</div>
                    <div className={styles.storeGridItemAuthor}>
                        Author: {book.author}
                    </div>
                    <div className={styles.storeGridItemRelease_date}>
                        Release Date: {new Date(book.release_date).toLocaleDateString()}
                    </div>
                    <div className={styles.storeGridItemDescription}>
                        Description: {book.description}
                    </div>
                    <div className={styles.storeGridItemQuantity}>
                        Quantity: {book.quantity}
                    </div>
                    <div className={styles.storeGridItemPrice}>Price: {book.price}</div>
                    <div className={styles.storeGridButtons}>
                        <div className={styles.storeGridItemSeeMore}>
                            <Button variant="outlined" color="inherit">
                                See more
                            </Button>
                        </div>
                        <div className={styles.storeGridItemAdd2Cart}>
                            {!isInCart(book._id) ? (
                                <Button variant="outlined" color="inherit" onClick={() => addToCart(book)}>
                                    Add
                                </Button>) : (
                                <Button variant="outlined" color="inherit" onClick={() => removeFromCart(book._id)}>
                                    Remove
                                </Button>)
                            }
                        </div>

                    </div>
                </div>
            ))}

        </div>
    );
}
