import styles from '@/styles/Home.module.css'
import { useState } from 'react';

interface StoreCategoryProps {
    categories: Array<string>;
    onCategoryChange: (category: string) => void;
    onSearchChange: (title: string, description: string) => void;
}
export default function StoreCategory(props: StoreCategoryProps) {
    const [selectValue, setSelectValue] = useState<string>("");
    return (
        <div>
            <div>
                <input type="text" placeholder="Search book here"
                    onChange={(e) => {
                        props.onSearchChange(e.target.value, e.target.value)
                    }
                    }
                />
            </div>
            <select name="category" value={selectValue} id="category"
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