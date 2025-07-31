import { useState, useEffect } from 'react';
import useFetch from './useFetch';

interface PaginationResponse<T> {
  results: T[];
  next: string | null;
  previous: string | null;
}

interface PaginationState<T> {
  data: T[];
  loading: boolean;
  error: Error | null;
  nextUrl: string | null;
  previousUrl: string | null;
  handleNextPage: () => void;
  handlePreviousPage: () => void;
}

const usePagination = <T, U>(
  initialUrl: string,
  transformData: (item: T) => Promise<U>
): PaginationState<U> => {
  const { fetchData, loading, error } = useFetch<PaginationResponse<T>>();
  const [data, setData] = useState<U[]>([]);
  const [currentUrl, setCurrentUrl] = useState(initialUrl);
  const [nextUrl, setNextUrl] = useState<string | null>(null);
  const [previousUrl, setPreviousUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchPaginatedData = async () => {
      try {
        const response = await fetchData(currentUrl);
        setNextUrl(response.next);
        setPreviousUrl(response.previous);

        const transformedData = await Promise.all(
          response.results.map(async (item) => await transformData(item))
        );

        setData(transformedData);
      } catch (err) {
        // Error is already handled by useApi
      }
    };

    fetchPaginatedData();
  }, [currentUrl]);

  const handleNextPage = () => {
    if (nextUrl) setCurrentUrl(nextUrl);
  };

  const handlePreviousPage = () => {
    if (previousUrl) setCurrentUrl(previousUrl);
  };

  return {
    data,
    loading,
    error,
    nextUrl,
    previousUrl,
    handleNextPage,
    handlePreviousPage,
  };
};

export default usePagination;