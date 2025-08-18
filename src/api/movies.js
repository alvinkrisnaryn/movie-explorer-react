import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = import.meta.env.VITE_TMDB_API_BASE_URL;

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: "en-US",
  },
});

export async function getPopularMovies() {
  const { data } = await api.get("/movie/popular", { params: { page: 1 } });
  if (!data || !data.results) return [];
  return data.results.map((movie) => ({
    ...movie,
    release_year: movie.release_date
      ? new Date(movie.release_date).getFullYear()
      : "unknown",
  }));
}

export async function getTopRatedMovies() {
  const { data } = await api.get("/movie/top_rated", { params: { page: 1 } });
  if (!data || !data.results) return [];
  return data.results.map((movie) => ({
    ...movie,
    release_year: movie.release_date
      ? new Date(movie.release_date).getFullYear()
      : "unknown",
  }));
}

export async function getMovieDetail(id) {
  const { data } = await api.get(`/movie/${id}`);
  return {
    ...data,
    release_year: data.release_date
      ? new Date(data.release_date).getFullYear()
      : "unknown",
  };
}
