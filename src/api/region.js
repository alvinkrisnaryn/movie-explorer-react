import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = import.meta.env.VITE_TMDB_API_BASE_URL;

/**
 * Discover Movies by Original Language
 * @param {string} langCode - kode bahasa (contoh: "id", "ko", "ja")
 * @param {string} sortBy - parameter urutan TMDB (default: popularity.desc)
 */
export async function getMoviesByLanguage(
  langCode,
  sortBy = "popularity.desc"
) {
  const res = await axios.get(
    `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_original_language=${langCode}&sort_by=${sortBy}&certification_country=US&certification.lte=PG-13`
  );
  return res.data.results || [];
}

/**
 * Discover TV Shows by Original Language
 * @param {string} langCode - kode bahasa (contoh: "id", "ko", "ja")
 * @param {string} sortBy - parameter urutan TMDB (default: popularity.desc)
 */
export async function getTvByLanguage(langCode, sortBy = "popularity.desc") {
  const res = await axios.get(
    `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_original_language=${langCode}&sort_by=${sortBy}`
  );
  return res.data.results || [];
}
