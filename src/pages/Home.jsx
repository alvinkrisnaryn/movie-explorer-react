import { useEffect, useState } from "react";
import { getPopularMovies, searchMovies } from "../api/movieApi";
import MovieCard from "../components/MovieCard";

function Home({ searchTerm }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = "57e03c17e1d6a4b5acd7ca652f00e8f1";

  useEffect(() => {
    async function fetchData() {
      try {
        const data = searchTerm
          ? await searchMovies(searchTerm)
          : await getPopularMovies();
        setMovies(data);
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

  return (
    <>
      <h1 className="text-4xl font-bold p-4 text-center">
        {searchTerm
          ? `Search results for "${searchTerm}"`
          : "Welcome to Movie Explorer"}
      </h1>
      {movies.length === 0 ? (
        <p className="text-center text-gray-500">No movies found.</p>
      ) : (
        <div className="grid gap-1 [grid-template-columns:repeat(auto-fill,minmax(200px,1fr))] lg:grid-cols-5">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </>
  );
}

export default Home;
