import styles from '@/styles/Home.module.css'
import { useState } from 'react';

interface StoreCategoryProps {
    categories: Array<string>;
    onCategoryChange: (category: string) => void;
    //un parametry la onSearchChange
    onSearchChange: (search: string) => void;
}
export default function StoreCategory(props: StoreCategoryProps) {
    const [selectValue, setSelectValue] = useState<string>("");




    return (
        <div className={styles.storeCategory}>
            <div >
                <input type="text" placeholder="Search book here"
                className={styles.storeInput}
                    onChange={(e) => {
                        props.onSearchChange(
                            e.target.value
                        )
                    }
                    }
                />
            </div>
            <select name="category" value={selectValue} id="category"
            className={styles.storeSelect}
                onChange={(e) => {
                    e.preventDefault();
                    setSelectValue(e.target.value)
                    props.onCategoryChange(e.target.value)
                }
                } >
                <option value="">All</option>
                {props.categories.map((category) => (
                    <option value={category} key={category}>{category}</option>
                ))}
            </select>

        </div >
    )
}