import { useEffect, useState } from "react";
import { getMoviesByGenre } from "../../api/genres";
import SliderMediaList from "../media/SliderMediaList";

const GENRES = [
  { id: 16, name: "Animation" },
  { id: 27, name: "Horror" },
  { id: 35, name: "Comedy" },
];

function GenreSection() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchGenres() {
      try {
        setLoading(true);
        const results = {};
        for (const g of GENRES) {
          const movies = await getMoviesByGenre(g.id);
          results[g.id] = { name: g.name, movies };
        }
        setData(results);
      } catch (error) {
        setError(error.message || "Failed to fetch genre movies");
      } finally {
        setLoading(false);
      }
    }
    fetchGenres();
  }, []);

  if (loading) return <p>Loading genres...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="bg-black">
      {GENRES.map((genre) => {
        const section = data[genre.id];
        if (!section || !section.movies?.length) return null;

        return (
          <div key={genre.id}>
            <h2 className="text-white text-2xl font-bold px-8">
              {section.name}
            </h2>
            <SliderMediaList items={section.movies} />
          </div>
        );
      })}
    </div>
  );
}

export default GenreSection;
