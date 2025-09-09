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

const isNonEmpty = (v) => typeof v === "string" && v.trim() !== "";

export async function getTrendingTv(timeWindow = "day") {
  const res = await axios.get(
    `${BASE_URL}/trending/tv/${timeWindow}?api_key=${API_KEY}`
  );
  return res.data.results || [];
}

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
    `${BASE_URL}/tv/${id}/content_ratings?api_key=${API_KEY}`
  );
  return res.data;
}

export async function getTvCertification(id, opts = {}) {
  const { preferredRegions = ["US", "ID", "GB", "AU", "CA"] } = opts;

  const data = await getTvContentRatings(id);
  const rows = Array.isArray(data?.results) ? data.results : [];

  const getFrom = (code) => {
    const hit = rows.find(
      (r) => r?.iso_3166_1 === code && isNonEmpty(r?.rating)
    );
    return hit?.rating?.trim() ?? null;
  };

  for (const code of preferredRegions) {
    const rating = getFrom(code);
    if (rating) return rating;
  }
  const any = rows.find((r) => isNonEmpty(r?.rating));
  return any?.rating?.trim() ?? null;
}

export async function getTvByFilter({ year, sortBy, rating }) {
  let params = { page: 1 };
  if (year) params.first_air_date_year = year;
  if (rating) params["vote_average.gte"] = rating;

  if (sortBy === "az") params.sort_by = "original_name.asc";
  else if (sortBy === "za") params.sort_by = "original_name.desc";
  else if (sortBy === "year") params.sort_by = "first_air_date.desc";

  const { data } = await api.get("/discover/tv", { params });

  if (!data || !data.results) return [];
  return data.results.map((tv) => ({
    ...tv,
    release_year: tv.first_air_date
      ? new Date(tv.first_air_date).getFullYear()
      : "unknown",
  }));
}

export async function getTvTrailer(id) {
  try {
    const { data } = await api.get(`/tv/${id}/videos`);

    if (!data || !data.results) {
      return null;
    }

    const trailer =
      data.results.find(
        (vid) => vid.type === "Trailer" && vid.site === "YouTube"
      ) || data.results.find((vid) => vid.site === "YouTube");

    return trailer ? trailer.key : null;
  } catch (error) {
    console.error("Error fetching TV trailer:", error);
    return null;
  }
}
