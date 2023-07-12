import { Book } from "@/models/books";
import styles from "@/styles/Home.module.css";
import { shoppingCart } from "@/context/cartContext";

interface StoreGridProps {
    books: Array<Book>;
}

export default function StoreGrid(props: StoreGridProps) {

    const { addToCart, removeFromCart, isInCart, cartItems } = shoppingCart();

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
                            <button className={styles.button57} role="button"><span>Hover me</span><span>To see more</span></button>

                        </div>
                        <div className={styles.storeGridItemAdd2Cart}>
                            {!isInCart(book._id) ? (
                                <button className={styles.button51} onClick={() => addToCart(book)}>
                                    Add
                                </button>) : (
                                <button className={styles.button51} onClick={() => removeFromCart(book._id)}>
                                    Remove
                                </button>)
                            }
                        </div>

                    </div>
                </div>
            ))}

        </div>
    );
}
