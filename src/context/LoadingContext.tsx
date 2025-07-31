import type { FC, ReactNode } from 'react';
import { useState } from 'react';
import Loading from '../components/Loading';
import { LoadingContext } from '../hooks/useLoading';

interface LoadingProviderProps {
    children: ReactNode;
}

export const LoadingProvider: FC<LoadingProviderProps> = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);

    const showLoading = () => setIsLoading(true);
    const hideLoading = () => setIsLoading(false);

    return (
        <LoadingContext.Provider value={{ isLoading, showLoading, hideLoading }}>
            {children}
            {isLoading && <Loading />}
        </LoadingContext.Provider>
    );
};