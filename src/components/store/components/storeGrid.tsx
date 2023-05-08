import styles from '@/styles/Home.module.css'
import Button from '@mui/material/Button/index'


// props: { books: Book[] }

export default function StoreGrid() {

    //query.data.books - > storegrid -> map 
    return (

        <div className={styles.storeGrid}>
            <div className={styles.storeGridItem}>
                {/* flex-row - img / title / author / category /(see more + add2cart) */}
                <div className={styles.storeGridItemImg}>
                    <img src="https://via.placeholder.com/150" alt="book cover" />
                </div>
                <div className={styles.storeGridItemTitle}>Title</div>
                <div className={styles.storeGridItemAuthor}>Author</div>
                <div className={styles.storeGridItemCategory}>Category</div>
                <div className={styles.storeGridItemPrice}>Price</div>
                <div className={styles.storeGridButtons}>
                    <div className={styles.storeGridItemSeeMore}>
                        <Button variant="outlined" color="inherit">See more</Button>
                    </div>
                    <div className={styles.storeGridItemAdd2Cart}>
                        <Button variant="outlined" color="inherit">Add to cart</Button>
                    </div>
                </div>
            </div>

        </div>

    )
}