import { useEffect, useState } from "react";
import { getMoviesByCompany } from "../../api/movies";
import SliderMediaList from "../../components/media/SliderMediaList";

function MovieByCompany({ companyId, title }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getMoviesByCompany(companyId);
        setMovies(data.slice(0, 20));
      } catch (error) {
        console.error(`Error fetching movies for ${title}:`, error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [companyId, title]);

  if (loading) return null;
  if (movies.length === 0) return null;

  return (
    <div className="bg-black">
      <h2 className="text-white text-2xl font-bold px-8">{title}</h2>
      <SliderMediaList items={movies} />
    </div>
  );
}

export default MovieByCompany;
