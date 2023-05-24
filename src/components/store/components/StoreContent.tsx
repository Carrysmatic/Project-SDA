import { useState } from 'react';
import StoreCategory from './StoreCategory'
import StoreGrid from './StoreGrid'
import { useQuery } from '@tanstack/react-query';
import { set } from 'mongoose';


interface SearchStringProps {
    title: string,
    description: string
}



export default function StoreContent() {

    const [activeCategory, setActiveCategory] = useState<string>("");
    const [activeTitle, setActiveTitle] = useState<string>("");
    const [activeDescription, setActiveDescription] = useState<string>("");


    const categoriesQuery = useQuery({
        queryKey: ['store', 'categories'],
        queryFn: async () => {
            const response = await fetch(`http://localhost:3000/api/books/categories`)
            return response.json();
        }
    });

    const categories = categoriesQuery.data?.categories || [];

    // search based on title, description, category using query params
    const booksQuery = useQuery({
        queryKey: ['store', activeCategory, activeTitle, activeDescription],
        queryFn: async () => {
            const filters: {
                category?: string;
                title?: string;
                description?: string;
            } = {};
            if (activeCategory) {
                filters.category = activeCategory;
            }

            if (activeTitle) {
                filters.title = activeTitle;
            }
            if (activeDescription) {
                filters.description = activeDescription;
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

    // const handleTitleChange = (title: string, description: string) => {
    //     setActiveTitle(title);
    //     setActiveDescription(description);
    // };

    const handleSearchChange = (title: string, description: string) => {
        setActiveTitle(title);
        setActiveDescription(description);
    };

    return (
        <div>
            {(booksQuery.isLoading || categoriesQuery.isLoading) && <span>Loading...</span>}
            {(booksQuery.isError || categoriesQuery.isError) && <span>There was an error</span>}

            <StoreCategory categories={categories} onSearchChange={handleSearchChange} onCategoryChange={handleFilterChange} />
            <StoreGrid books={books} />
        </div>
    )
}