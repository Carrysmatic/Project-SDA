import { Navbar } from '@/components/navbar/navbar';
import StoreContent from '@/components/store/storeContent';
import { useQuery, useQueryClient } from '@tanstack/react-query';

export default function Store() {
    return (
        <>
            <Navbar />
            <StoreContent />
        </>
    )
}