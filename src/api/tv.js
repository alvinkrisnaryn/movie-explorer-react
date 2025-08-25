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

export async function getTvContentRatings(id) {
  const res = await axios.get(
    `${BASE_URL}/tv/${id}/release_dates?api_key=${API_KEY}`
  );
  return res.data;
}

export async function getTvCertification(id) {
  const ratingData = await getTvContentRatings(id);

  let rating = null;
  const usRating = ratingData.results.find((item) => item.iso_3166_1 === "US");
  rating = usRating?.rating || null;

  if (!rating) {
    const idRating = ratingData.results.find(
      (item) => item.iso_3166_1 === "ID"
    );
    rating = idRating?.rating || null;
  }

  if (!rating && ratingData.results.length > 0) {
    rating = ratingData.results[0].rating;
  }

  return rating;
}
