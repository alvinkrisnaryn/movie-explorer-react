import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = import.meta.env.VITE_TMDB_API_BASE_URL;

export async function getMovieGenres() {
  const res = await axios.get(
    `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`
  );
  return res.data.genres || [];
}


export async function getMoviesByGenre(genreId, sortBy = "popularity.desc") {
  const res = await axios.get(
    `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&sort_by=${sortBy}`
  );
  return res.data.results || [];
}

