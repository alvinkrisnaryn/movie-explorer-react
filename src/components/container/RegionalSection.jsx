import { useEffect, useState } from "react";
import { getMoviesByLanguage } from "../../api/region";
import SliderMediaList from "../media/SliderMediaList";

function RegionalSection({ regions = ["id", "ko", "ja"] }) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fecthRegions() {
      try {
        setLoading(true);
        const results = {};

        for (const code of regions) {
          let name = code.toUpperCase();
          if (code === "id") name = "Indonesia Movies";
          if (code === "ko") name = "Korean Drama";
          if (code === "ja") name = "Japanese Anime";
          const movies = await getMoviesByLanguage(code);
          results[code] = { name, movies };
        }

        setData(results);
      } catch (error) {
        setError(error.message || "Failed to fetch regional movies");
      } finally {
        setLoading(false);
      }
    }
    fecthRegions();
  }, [regions]);

  if (loading) return <p>Loading regional movies</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="bg-black">
      {regions.map((code) => {
        const section = data[code];
        if (!section || !section.movies?.length) return null;

        return (
          <div key={code}>
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

export default RegionalSection;
