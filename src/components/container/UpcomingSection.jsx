import { useEffect, useState } from "react";
import { MoviesApi } from "../../api";
import GridMediaList from "../media/GridMediaList";

function UpcomingSection() {
  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    async function fetchUpcoming() {
      try {
        const res = await MoviesApi.getUpcomingMovies();
        const today = new Date();

        const upcomingFiltered = res.filter((m) => {
          return m.release_date && new Date(m.release_date) > today;
        });

        setUpcoming(upcomingFiltered);
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
