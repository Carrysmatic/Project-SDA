import { useState } from 'react';
import StoreCategory from './StoreCategory'
import StoreGrid from './StoreGrid'
import { useQuery } from '@tanstack/react-query';
import styles from '@/styles/Home.module.css'


export default function StoreContent() {

    const [activeCategory, setActiveCategory] = useState<string>("");
    const [activeSearch, setActiveSearch] = useState<string>("");
    const [pageNo, setPageNo] = useState<number>(0);

    const perPage = 5;
    const categoriesQuery = useQuery({
        queryKey: ['store', 'categories'],
        queryFn: async () => {
            const response = await fetch(`http://localhost:3000/api/books/categories`)
            return response.json();
        }
    });

    const categories = categoriesQuery.data?.categories || [];

    const booksQuery = useQuery({
        queryKey: ['store', activeCategory, activeSearch, pageNo],
        queryFn: async () => {
            const filters: {
                category?: string;
                search?: string;
                perPage?: string;
                pageNo?: string;
            } = {};
            if (activeCategory) {
                filters.category = activeCategory;
            }

            if (activeSearch) {
                filters.search = activeSearch;
            }

            filters.pageNo = String(pageNo);
            filters.perPage = String(perPage);

            const queryParams = new URLSearchParams(filters).toString();
            const response = await fetch(`http://localhost:3000/api/books?${queryParams}`)
            return response.json();
        }
    });

    const books = booksQuery.data?.books || [];
    const handleFilterChange = (category: string) => {
        setActiveCategory(category);
    };


    const handleSearchChange = (search: string) => {
        setActiveSearch(search);

    };

    const handleNextPage = () => {
        if (books.length < perPage) return;
        setPageNo((state) => state + 1);

    };

    const handlePrevPage = () => {
        if (pageNo === 0) return;
        setPageNo((state) => state - 1);
    };



    return (
        <div className={styles.storeContentGrid}>
            {(booksQuery.isLoading || categoriesQuery.isLoading) && <span>Loading...</span>}
            {(booksQuery.isError || categoriesQuery.isError) && <span>There was an error</span>}

            <StoreCategory categories={categories} onSearchChange={handleSearchChange} onCategoryChange={handleFilterChange} />
            <StoreGrid books={books} />
            <div className={styles.storeButtons}>
                <button className={styles.buttonPag}
                 onClick={handlePrevPage}>Prev</button>
                <div className={styles.pageNo}>{pageNo + 1}</div>
                <button className={styles.buttonPag}
                 onClick={handleNextPage}>Next</button>
            </div>

        </div>
    )
}