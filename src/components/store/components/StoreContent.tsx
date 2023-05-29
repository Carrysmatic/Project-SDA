import { useState } from 'react';
import StoreCategory from './StoreCategory'
import StoreGrid from './StoreGrid'
import { useQuery } from '@tanstack/react-query';
import styles from '@/styles/Home.module.css'


export default function StoreContent() {

    const [activeCategory, setActiveCategory] = useState<string>("");
    const [activeSearch, setActiveSearch] = useState<string>("");


    const categoriesQuery = useQuery({
        queryKey: ['store', 'categories'],
        queryFn: async () => {
            const response = await fetch(`http://localhost:3000/api/books/categories`)
            return response.json();
        }
    });

    const categories = categoriesQuery.data?.categories || [];



    const booksQuery = useQuery({
        queryKey: ['store', activeCategory, activeSearch],
        queryFn: async () => {
            const filters: {
                category?: string;
                // title?: string;
                search?: string;
                // description?: string;
            } = {};
            if (activeCategory) {
                filters.category = activeCategory;
            }

            if (activeSearch) {
                // filters.title = activeSearch;
                filters.search = activeSearch;
            }

            const queryParams = new URLSearchParams(filters).toString();
            const response = await fetch(`http://localhost:3000/api/books?${queryParams}`)
            return response.json();
        }
    });
    const books = booksQuery.data?.books || [];

    // get serverside props - nextjs - getStaticProps
    const handleFilterChange = (category: string) => {
        setActiveCategory(category);
    };


    const handleSearchChange = (search: string) => {
        setActiveSearch(search);

    };

    return (
        <div className={styles.storeContentGrid}>
            {(booksQuery.isLoading || categoriesQuery.isLoading) && <span>Loading...</span>}
            {(booksQuery.isError || categoriesQuery.isError) && <span>There was an error</span>}

            <StoreCategory categories={categories} onSearchChange={handleSearchChange} onCategoryChange={handleFilterChange} />
            <StoreGrid books={books} />
        </div>
    )
}