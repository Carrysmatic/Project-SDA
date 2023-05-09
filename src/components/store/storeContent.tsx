import styles from '@/styles/Home.module.css'
import StoreCategory from './components/storeCategory'
import StoreGrid from './components/storeGrid'
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Book } from '@/models/books';
import { useState } from 'react';

export default function StoreContent() {
    const queryClient = useQueryClient();
    const query = useQuery({
        queryKey: ['store'],
        queryFn: () => fetch('http://localhost:3000/api/books').then(res => res.json())
    })
    if (query.isLoading) {
        return (<span>Loading...</span>)
    }
    if (query.isError) {
        return (<span>There was an error </span>)
    }
    // OVER HERE WE HAVE DATA
    console.log(query.data)
    // const [data, setData] = useState<Book[]>([query.data])

    const books = query.data.books
    return (

        <div className={styles.storeContent}>
            <StoreCategory />
            <StoreGrid books={...books} />
        </div>
    )
}