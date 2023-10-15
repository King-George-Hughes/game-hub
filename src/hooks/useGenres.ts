import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient from "../services/api-client";
import ms from "ms";

const apiClient = new APIClient<Genre>("/genres");
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24"), // 24hr
    initialData: genres,
    // staleTime: 24 * 60 * 60 * 1000, // 24hr
    // initialData: { count: genres.length, results: genres, next: null },
  });

export default useGenres;
