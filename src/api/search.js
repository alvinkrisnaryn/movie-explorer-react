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

export async function searchMovies(query) {
  const { data } = await api.get("/search/movie", {
    params: {
      query,
      page: 1,
      include_adult: false,
    },
  });

  return data.results.map((movie) => ({
    ...movie,
    release_year: movie.release_date
      ? new Date(movie.release_date).getFullYear()
      : "unknown",
  }));
}
