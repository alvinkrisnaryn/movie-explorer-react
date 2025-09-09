import { useEffect, useState } from "react";
import { getMoviesByLanguage } from "../../api/region";
import SliderMediaList from "../media/SliderMediaList";

const REGIONS = [
  { code: "id", name: "Film Indonesia" },
  { code: "ko", name: "Drama Korea" },
  { code: "ja", name: "Anime Jepang" },
];

function RegionalSection() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fecthRegions() {
      try {
        setLoading(true);
        const results = {};
        for (const region of REGIONS) {
          const movies = await getMoviesByLanguage(region.code);
          results[region.code] = { name: region.name, movies };
        }
        setData(results);
      } catch (error) {
        setError(error.message || "Failed to fetch regional movies");
      } finally {
        setLoading(false);
      }
    }
    fecthRegions();
  }, []);

  if (loading) return <p>Loading regional movies</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="bg-black">
      {REGIONS.map((region) => {
        const section = data[region.code];
        if (!section || !section.movies?.length) return null;

        return (
          <div key={region.code}>
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
