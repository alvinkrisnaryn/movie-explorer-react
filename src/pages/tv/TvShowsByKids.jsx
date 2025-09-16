import { useEffect, useState } from "react";
import { getKidsTvSeries } from "../../api/tv";
import SliderMediaList from "../../components/media/SliderMediaList";

function TvShowsByKids() {
  const [kidsShows, setKidsShows] = useState([]);

  useEffect(() => {
    async function fetchKids() {
      try {
        const data = await getKidsTvSeries();
        setKidsShows(data.results);
      } catch (error) {
        console.error("Error fetching kids Tv Series:", error);
      }
    }
    fetchKids();
  }, []);

  if (kidsShows.length === 0) return null;

  return (
    <div className="bg-black">
      <h2 className="text-white text-2xl font-bold px-8">Kids Series</h2>
      <SliderMediaList items={kidsShows} />
    </div>
  );
}

export default TvShowsByKids;
