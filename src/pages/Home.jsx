import { useEffect, useState } from "react";
import { MoviesApi, SearchApi, TvApi } from "../api";
import MovieCard from "../components/MovieCard";

function Home({ searchTerm }) {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [popularTv, setPopularTv] = useState([]);
  const [topRatedTv, setTopRatedTv] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        if (searchTerm) {
          const result = await SearchApi.searchMovies(searchTerm);
          setSearchResults(result);
        } else {
          const [
            popularMoviesRes,
            topRatedMoviesRes,
            popularTvRes,
            topRatedTvRes,
          ] = await Promise.all([
            MoviesApi.getPopularMovies(),
            MoviesApi.getTopRatedMovies(),
            TvApi.getPopularTvShows(),
            TvApi.getTopRatedTvShows(),
          ]);
          setPopularMovies(popularMoviesRes);
          setTopRatedMovies(topRatedMoviesRes);
          setPopularTv(popularTvRes);
          setTopRatedTv(topRatedTvRes);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [searchTerm]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  if (searchTerm) {
    return (
      <>
        <h1 className="text-4xl font-bold p-4 text-center">
          Search results for "{searchTerm}"
        </h1>
        {searchResults.length === 0 ? (
          <p className="text-center text-gray-500">No movies found.</p>
        ) : (
          <div className="grid gap-1 [grid-template-columns:repeat(auto-fill,minmax(200px,1fr))] lg:grid-cols-5">
            {searchResults.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </>
    );
  }

  return (
    <>
      <h1 className="text-4xl font-bold p-4 text-center">
        Welcome to Movie Explorer
      </h1>

      <section>
        <h2 className="text-2xl font-bold p-4">Top Popular Movies</h2>
        <div className="grid gap-1 [grid-template-columns:repeat(auto-fill,minmax(200px,1fr))] lg:grid-cols-5">
          {popularMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold p-4">Top Rated Movies</h2>
        <div className="grid gap-1 [grid-template-columns:repeat(auto-fill,minmax(200px,1fr))] lg:grid-cols-5">
          {topRatedMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold p-4">Popular Tv Shows</h2>
        <div className="grid gap-1 [grid-template-columns:repeat(auto-fill,minmax(200px,1fr))] lg:grid-cols-5">
          {popularTv.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold p-4">Top Rated TV Shows </h2>
        <div className="grid gap-1 [grid-template-columns:repeat(auto-fill,minmax(200px,1fr))] lg:grid-cols-5">
          {topRatedTv.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
