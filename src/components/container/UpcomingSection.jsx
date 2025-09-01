import { useEffect, useState } from "react";
import { MoviesApi } from "../../api";
import MediaList from "../media/MediaList";

function UpcomingSection() {
  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    async function fetchUpcoming() {
      try {
        const res = await MoviesApi.getUpcomingMovies();
        setUpcoming(res);
      } catch (err) {
        console.error("Failed to fetch upcoming movies", err);
      }
    }
    fetchUpcoming();
  }, []);

  if (!upcoming.length) return null;

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4 text-white">Upcoming Movies</h2>
      <MediaList items={upcoming} limit={15} />
    </section>
  );
}

export default UpcomingSection;
