import { useEffect, useState } from "react";
import { getKidsMovie } from "../../api/movies";
import SliderMediaList from "../../components/media/SliderMediaList";

function MovieByKids() {
  const [moviesKids, setMoviesKids] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getKidsMovie();
      setMoviesKids(data.slice(0, 20));
    }
    fetchData();
  }, []);

  if (moviesKids.length === 0) return null;

  return (
    <div className="bg-black">
      <h2 className="text-white text-2xl font-bold px-8">Kids Movie</h2>
      <SliderMediaList items={moviesKids} />
    </div>
  );
}

export default MovieByKids;
