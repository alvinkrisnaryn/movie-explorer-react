import { useEffect, useState } from "react";
import { MoviesApi } from "../../api";
import GridMediaList from "../media/GridMediaList";

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
      <GridMediaList items={upcoming} limit={10} />
    </section>
  );
}

export default UpcomingSection;
