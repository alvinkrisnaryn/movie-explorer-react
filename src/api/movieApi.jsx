const API_KEY = "57e03c17e1d6a4b5acd7ca652f00e8f1";
const BASE_URL = "https://api.themoviedb.org/3";

export async function getPopularMovies() {
  const res = await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
  );
  if (!res.ok) throw new Error("Failed to fetch popular movies");
  const data = await res.json();

  const resultsWithYear = data.results.map((movie) => ({
    ...movie,
    release_year: movie.release_date
      ? new Date(movie.release_date).getFullYear()
      : "unknown",
  }));

  return resultsWithYear;
}

export async function getMovieDetail(id) {
  const res = await fetch(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  if (!res.ok) throw new Error("Failed to fecth movie detail");
  const data = await res.json();

  return {
    ...data,
    release_year: data.release_date
      ? new Date(data.release_date).getFullYear()
      : "unknown",
  };
}

export async function searchMovies(query) {
  const res = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(
      query
    )}&page=1&include_adult=false`
  );
  if (!res.ok) throw new Error("Failed to search movies");
  const data = await res.json();

  return data.results.map((movie) => ({
    ...movie,
    release_year: movie.release_date
      ? new Date(movie.release_date).getFullYear()
      : "unknown",
  }));
}
