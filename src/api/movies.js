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
const toDate = (s) => (s ? new Date(s) : new Date(0));

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

export async function getMovieReleaseDates(id) {
  const res = await axios.get(
    `${BASE_URL}/movie/${id}/release_dates?api_key=${API_KEY}`
  );
  return res.data;
}

export async function getMovieCertification(id, opts = {}) {
  const {
    preferredRegions = ["US", "ID", "GB", "AU", "CA"],
    typePriority = [3, 2, 4, 5, 1, 6],
  } = opts;

  const data = await getMovieReleaseDates(id);
  const buckets = Array.isArray(data?.results) ? data.results : [];

  const pickFromRegion = (code) => {
    const region = buckets.find((r) => r?.iso_3166_1 === code);
    if (!region || !Array.isArray(region.release_dates)) return null;

    const candidates = region.release_dates
      .filter((r) => isNonEmpty(r?.certification))
      .sort((a, b) => {
        const ap = typePriority.indexOf(a?.type ?? -1);
        const bp = typePriority.indexOf(b?.type ?? -1);
        if (ap !== bp) return (ap === -1 ? 999 : ap) - (bp === -1 ? 999 : bp);
        return toDate(b?.release_date) - toDate(a?.release_date);
      });
    return candidates[0]?.certification?.trim() ?? null;
  };

  for (const code of preferredRegions) {
    const cert = pickFromRegion(code);
    if (cert) return cert;
  }
  for (const region of buckets) {
    const cert = pickFromRegion(region?.iso_3166_1);
    if (cert) return cert;
  }
  return null;
}

export async function getMoviesByFilter({ year, sortBy, rating }) {
  let params = { page: 1 };

  if (year) params.primary_release_year = year;
  if (rating) params["vote_average.gte"] = rating;

  if (sortBy === "az") params.sort_by = "original_title.asc";
  else if (sortBy === "za") params.sort_by = "original_title.desc";
  else if (sortBy === "year") params.sort_by = "primary_release_date.desc";

  const { data } = await api.get("/discover/movie", { params });

  if (!data || !data.results) return [];
  return data.results.map((movie) => ({
    ...movie,
    release_year: movie.release_date
      ? new Date(movie.release_date).getFullYear()
      : "unknown",
  }));
}

export async function getUpcomingMovies({ page = 1, region = "US" } = {}) {
  const { data } = await api.get("/movie/upcoming", {
    params: { page, region },
  });
  if (!data || !data.results) return [];
  return data.results.map((movie) => ({
    ...movie,
    release_year: movie.release_date
      ? new Date(movie.release_date).getFullYear()
      : "unknown",
  }));
}

export async function getMovieTrailer(id) {
  try {
    console.log("Fetching Movie trailer for id:", id);
    const { data } = await api.get(`/movie/${id}/videos`);
    console.log("Raw Response:", data);

    if (!data || !data.results) {
      console.warn("No Results found");
      return null;
    }

    const trailer =
      data.results.find(
        (vid) => vid.type === "Trailer" && vid.site === "YouTube"
      ) || data.results.find((vid) => vid.site === "YouTube");

    console.log("Picked trailer:", trailer);
    return trailer ? trailer.key : null;
  } catch (error) {
    console.error("Error fetching movie trailer:", error);
    return null;
  }
}
