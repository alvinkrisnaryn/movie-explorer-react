import { useEffect, useState } from "react";
import { getTrendingMoviesWeek } from "../../api/movies";
import SliderMediaList from "../../components/media/SliderMediaList";

function TrendingMovieByWeek() {
  const [moviesByWeek, setMoviesByWeek] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const data = await getTrendingMoviesWeek();
        setMoviesByWeek(data.slice(0, 20));
      } catch (error) {
        console.error("Error fetching trending movies:", error);
      }
    }
    fetchMovies();
  }, []);

  if (moviesByWeek.length === 0) return null;

  return (
    <div className=" bg-black">
      <h2 className="text-white text-2xl font-bold px-8">Trending This Week</h2>
      <SliderMediaList items={moviesByWeek} />
    </div>
  );
}

export default TrendingMovieByWeek;
