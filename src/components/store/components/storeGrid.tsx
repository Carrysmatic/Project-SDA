import { GetBooksResponse } from '@/pages/api/books'
import styles from '@/styles/Home.module.css'
import Button from '@mui/material/Button'
import { useState, useEffect } from 'react'
import { Book } from '@/models/books'
// props: { books: Book[] }

export default function StoreGrid(props: GetBooksResponse) {

    //query.data.books - > storegrid -> map 
    const [state, setState] = useState<GetBooksResponse>(props)
    const [filterState, setFilterState] = useState<Book[]>([])
    const [searchState, setSearchState] = useState<string>('')
    useEffect(() => {
        setFilterState(state.books.filter((book) => book.title.toLowerCase().includes(searchState.toLowerCase())));
    }, [searchState])

    return (
        <>
            <input type="text" value={searchState} onChange={(e) => setSearchState(e.target.value)} />
            <div className={styles.storeGrid}>
                {filterState.length > 0 ? filterState.map((props, index) => (
                    <div className={styles.storeGridItem} key={index}>
                        <div className={styles.storeGridItemImg}>
                            <img src={props.image} alt={props.description} />
                        </div>
                        <div className={styles.storeGridItemTitle}>{props.title}</div>
                        <div className={styles.storeGridItemAuthor}>{props.author}</div>
                        <div className={styles.storeGridItemRelease_date}>
                            {new Date(props.release_date).toLocaleDateString()}
                        </div>
                        <div className={styles.storeGridItemDescription}>{props.description}</div>
                        <div className={styles.storeGridItemQuantity}>Quantity:{props.quantity}</div>
                        <div className={styles.storeGridItemPrice}>{props.price}</div>
                        <div className={styles.storeGridButtons}>
                            <div className={styles.storeGridItemSeeMore}>
                                <Button variant="outlined" color="inherit">See more</Button>
                            </div>
                            <div className={styles.storeGridItemAdd2Cart}>
                                <Button variant="outlined" color="inherit">Add to cart</Button>
                            </div>
                        </div>
                    </div>)) : state.books.map((props, index) => (
                        <div className={styles.storeGridItem} key={index}>
                            <div className={styles.storeGridItemImg}>
                                <img src={props.image} alt={props.description} />
                            </div>
                            <div className={styles.storeGridItemTitle}>{props.title}</div>
                            <div className={styles.storeGridItemAuthor}>{props.author}</div>
                            <div className={styles.storeGridItemRelease_date}>
                                {new Date(props.release_date).toLocaleDateString()}
                            </div>
                            <div className={styles.storeGridItemDescription}>{props.description}</div>
                            <div className={styles.storeGridItemQuantity}>Quantity:{props.quantity}</div>
                            <div className={styles.storeGridItemPrice}>{props.price}</div>
                            <div className={styles.storeGridButtons}>
                                <div className={styles.storeGridItemSeeMore}>
                                    <Button variant="outlined" color="inherit">See more</Button>
                                </div>
                                <div className={styles.storeGridItemAdd2Cart}>
                                    <Button variant="outlined" color="inherit">Add to cart</Button>
                                </div>
                            </div>
                        </div>))}


            </div>


        </>
    )
}