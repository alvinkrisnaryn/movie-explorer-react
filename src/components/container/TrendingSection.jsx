import { useState, useEffect } from "react";
import SliderMediaList from "../media/SliderMediaList";
import { getTrendingMovies } from "../../api/movies";
import { getTrendingTv } from "../../api/tv";

function TrendingSection({ timeWindow = "day" }) {
  const [movies, setMovies] = useState([]);
  const [tvShows, setTvShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchTrending() {
      try {
        setLoading(true);
        const [moviesData, tvData] = await Promise.all([
          getTrendingMovies(timeWindow),
          getTrendingTv(timeWindow),
        ]);
        setMovies(moviesData);
        setTvShows(tvData);
      } catch (err) {
        setError(err.message || "Failed to fetch trending data");
      } finally {
        setLoading(false);
      }
    }
    fetchTrending();
  }, [timeWindow]);

  if (loading) return <p className="text-white p-4">Loaind trending...</p>;
  if (error) return <p className="">Error: {error}</p>;

  return (
    <div className="bg-black">
      {movies.length > 0 && (
        <>
          <h2 className="text-white text-2xl font-bold px-8 pt-8">
            Trending Now
          </h2>
          <SliderMediaList items={movies} />
        </>
      )}

      {tvShows.length > 0 && (
        <>
          <h2 className="text-white text-2xl font-bold px-8">
            Most Popular Series
          </h2>
          <SliderMediaList items={tvShows} />
        </>
      )}
    </div>
  );
}

export default TrendingSection;
