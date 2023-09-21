import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const contoller = new AbortController();

    apiClient
      .get<FetchResponse<T>>(endpoint, { signal: contoller.signal })
      .then((res) => {
        console.log(res.data.results);
        setData(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });

    return () => contoller.abort();
  }, [endpoint]);

  return { data, error, isLoading };
};

export default useData;
