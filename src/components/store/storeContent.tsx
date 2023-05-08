import styles from '@/styles/Home.module.css'
import StoreCategory from './components/storeCategory'
import StoreGrid from './components/storeGrid'
import { useQuery, useQueryClient } from '@tanstack/react-query';

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
    // OVER HERE WEHAVE DATA
    console.log(query.data)
    return (
        <div className={styles.storeContent}>
            <StoreCategory />
            <StoreGrid />
        </div>
    )
}