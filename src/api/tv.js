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

export async function getPopularTvShows() {
  const { data } = await api.get("/tv/popular", { params: { page: 1 } });
  if (!data || !data.results) return [];
  return data.results.map((tv) => ({
    ...tv,
    release_year: tv.first_air_date
      ? new Date(tv.first_air_date).getFullYear()
      : "unknown",
  }));
}

export async function getTopRatedTvShows() {
  const { data } = await api.get("/tv/top_rated", { params: { page: 1 } });
  if (!data || !data.results) return [];
  return data.results.map((tv) => ({
    ...tv,
    release_year: tv.first_air_date
      ? new Date(tv.first_air_date).getFullYear()
      : "unknown",
  }));
}

export async function getTvDetail(id) {
  const { data } = await api.get(`/tv/${id}`);
  return {
    ...data,
    release_year: data.first_air_date
      ? new Date(data.first_air_date).getFullYear()
      : "unknown",
  };
}
