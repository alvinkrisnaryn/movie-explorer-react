import { useEffect, useState } from "react";
import { MoviesApi } from "../../api";

function UpcomingHero() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchUpcoming() {
      try {
        const res = await MoviesApi.getUpcomingMovies();
          console.log("Upcoming Movies API response:", res); // DEBUG
        if (res && res.length > 0) {
          const first = res[1];
          setMovie({
            ...first,
            backdrop: first.backdrop_path
              ? `https://image.tmdb.org/t/p/original${first.backdrop_path}`
              : first.poster_path
              ? `https://image.tmdb.org/t/p/original${first.poster_path}`
              : "null",
            release_year: first.release_date
              ? new Date(first.release_date).getFullYear()
              : "TBA",
          });
        }
      } catch (err) {
        console.error("failed to fetch upcoming movies", err);
      }
    }
    fetchUpcoming();
  }, []);

  if (!movie) return null;

  return (
    <section
      className="relative w-full h-[80vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${movie.backdrop})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

      <div className="relative z-10 max-w-4xl px-6 py-20 text-white">
        <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
        <p className="text-gray-300 mb-6 max-w-xl">{movie.overview}</p>

        <div className="flex items-center space-x-6 mb-6">
          <span>{movie.release_year}</span>
        </div>

        <div className="flex space-x-4">
          <button className="bg-red-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-700">
            ▶ Watch
          </button>
          <button className="bg-gray-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-700">
            ＋ Add to List
          </button>
        </div>
      </div>
    </section>
  );
}

export default UpcomingHero;
