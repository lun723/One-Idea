import { useState } from 'react';
import axios from 'axios';
import type { AxiosRequestConfig, Method } from 'axios';


interface FetchOptions extends AxiosRequestConfig {
  method?: Method; // HTTP 方法，如 'GET', 'POST', 'PUT', 'DELETE'
  body?: any; // 請求 body（用於 POST/PUT）
  params?: Record<string, any>; // 查詢參數，例如 { id: 1, name: 'John' }
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

  const fetchData = async (url: string, options: FetchOptions = {}): Promise<T> => {
    try {
      setLoading(true);
      setError(null);

      const config: AxiosRequestConfig = {
        url,
        method: options.method || 'GET', // 預設為 GET
        data: options.body, // 支援 POST/PUT 的 body
        params: options.params, // 支援查詢參數
        headers: options.headers || {}, // 自定義 headers
        ...options, // 允許其他 axios 配置
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
    }
  };

  return { fetchData, data, loading, error };
};

export default useFetch;