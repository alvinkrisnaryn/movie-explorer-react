import { useEffect, useState } from "react";
import { MoviesApi, SearchApi, TvApi } from "../api";
import MediaList from "../components/media/MediaList";
import MediaCard from "../components/media/MediaCard";
import HeroSection from "../components/container/HeroSection";

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
            {searchResults.map((media) => (
              <MediaCard key={media.id} media={media} />
            ))}
          </div>
        )}
      </>
    );
  }

  return (
    <>
      <HeroSection media={popularMovies[6]}/>

      <MediaList title="Popular Movies" items={popularMovies} />
      <MediaList title="Top Rated Movies" items={topRatedMovies} />
      <MediaList title="Popular TV Shows" items={popularTv} />
      <MediaList title="Top Rated TV Shows" items={topRatedTv} />
    </>
  );
}

export default Home;
