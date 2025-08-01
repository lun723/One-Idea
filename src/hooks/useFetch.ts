import { useState } from 'react';
import axios from 'axios';
import type { AxiosRequestConfig, Method } from 'axios';
import { useLoading } from '../context/LoadingContext'; 

interface FetchOptions extends AxiosRequestConfig {
  method?: Method;
  body?: any;
  params?: Record<string, any>;
}

const useFetch = <T>(): {
  fetchData: (url: string, options?: FetchOptions) => Promise<T>;
  data: T | null;
  loading: boolean;
  error: Error | null;
} => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const { showLoading, hideLoading } = useLoading(); 

  const fetchData = async (url: string, options: FetchOptions = {}): Promise<T> => {
    try {
      setLoading(true);
      showLoading();
      setError(null);

      const config: AxiosRequestConfig = {
        url,
        method: options.method || 'GET',
        data: options.body,
        params: options.params,
        headers: options.headers || {},
        ...options,
      };

      const response = await axios(config);
      setData(response.data);
      return response.data;
    } catch (err) {
      const error = err instanceof Error ? err : new Error('An error occurred');
      setError(error);
      throw error;
    } finally {
      setLoading(false);
      hideLoading();
    }
  };

  return { fetchData, data, loading, error };
};

export default useFetch;