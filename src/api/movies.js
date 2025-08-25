import axios from "axios";
import { BiSolidCertification } from "react-icons/bi";

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

export async function getMovieReleaseDates(id) {
  const res = await axios.get(
    `${BASE_URL}/movie/${id}/release_dates?api_key=${API_KEY}`
  );
  return res.data;
}

export async function getMovieCertification(id) {
  const releaseData = await getMovieReleaseDates(id);

  let certification = null;
  const usRelease = releaseData.results.find((item) => item.iso_3166_1 === "US");
  if (usRelease) {
    certification =
      usRelease.release_dates.find((r) => r.certification)?.cerfitication ||
      null;
  }

  if (!certification) {
    const idRelease = releaseData.results.find(
      (item) => item.iso_3166_1 === "ID"
    );
    if (idRelease) {
      certification =
        idRelease.release_dates.find((r) => r.certification)?.certification ||
        null;
    }
  }

  if (!certification) {
    for (let region of releaseData.results) {
      const found = region.release_dates.find((r) => r.certification);
      if (found) {
        certification = found.certification;
        break;
      }
    }
  }

  return certification;
}
