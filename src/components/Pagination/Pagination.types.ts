export interface PaginationProps {
    nextUrl: string | null;
    previousUrl: string | null;
    handleNextPage: () => void;
    handlePreviousPage: () => void;
}