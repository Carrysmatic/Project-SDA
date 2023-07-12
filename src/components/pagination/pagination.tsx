import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

interface PaginationProps {
    items: any[];
    pageSize: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}



export function Pagination({ items, pageSize, currentPage, onPageChange }: PaginationProps) {

    const pagesCount = Math.ceil(items.length / pageSize);
    if (pagesCount === 1) return null;
    const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);


    return (
        <div>
            <h1>Pagination</h1>
        </div>
    )
}