import { useEffect, useState } from "react";
import { getTrendingTvByWeek } from "../../api/tv";
import SliderMediaList from "../../components/media/SliderMediaList";

function TrendingTvByWeek() {
  const [tvByWeek, setTvByWeek] = useState([]);

  useEffect(() => {
    async function fetchTvShows() {
      try {
        const data = await getTrendingTvByWeek();
        setTvByWeek(data.results);
      } catch (error) {
        console.error("Error fetching trending tv shows:", error);
      }
    }
    fetchTvShows();
  }, []);

  if (tvByWeek.length === 0) return null;

  return (
    <div className="bg-black">
      <h2 className="text-white text-2xl font-bold px-8">Trending This Week</h2>
      <SliderMediaList items={tvByWeek} />
    </div>
  );
}

export default TrendingTvByWeek;
