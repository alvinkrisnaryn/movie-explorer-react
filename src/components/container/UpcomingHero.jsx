import { useEffect, useState } from "react";
import { MoviesApi } from "../../api";
import { FaPlay, FaPlus, FaCheck } from "react-icons/fa";
import useFavorites from "../../context/useFavorites";

function UpcomingHero() {
  const [media, setMedia] = useState(null);
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const isFavorite = favorites.some((item) => item.id === media?.id);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(media.id);
    } else {
      addFavorite(media);
    }
  };

  useEffect(() => {
    async function fetchUpcoming() {
      try {
        const res = await MoviesApi.getUpcomingMovies();
        const today = new Date();

        const upcomingFiltered = res.filter((m) => {
          return m.release_date && new Date(m.release_date) > today;
        });
        // console.log("Upcoming Movies API response:", upcomingFiltered);
        if (upcomingFiltered.length > 0) {
          const first = upcomingFiltered[1];
          setMedia({
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

  if (!media) return null;

  return (
    <section className="font-nunito relative w-[88%] mx-auto h-[400px] md:h-[600px] py-6 text-white ">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${media.backdrop})` }}
      >
        <div className="relative z-10 max-w-full md:max-w-3xl px-4 md:px-6 top-1/4 md:top-1/3 text-left md:text-left">
          <h1 className="text-2xl md:text-5xl font-bold mb-3 md:mb-4">
            {media.title}
          </h1>
          <p className="text-sm md:text-base font-medium mb-6 md:mb-8 line-clamp-3 md:line-clamp-none">
            {media.overview}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm md:text-base">
            <button className="flex items-center justify-center gap-2 bg-red-600 px-6 md:px-8 py-2.5 rounded-full font-extrabold hover:bg-red-700 transition cursor-pointer">
              <FaPlay /> Watch
            </button>
            <button
              onClick={handleToggleFavorite}
              className="flex items-center justify-center gap-2 bg-gray-700 px-6 md:px-8 py-2.5 rounded-full font-extrabold hover:bg-gray-800 transition cursor-pointer"
            >
              {isFavorite ? <FaCheck /> : <FaPlus />}
              {isFavorite ? "Added" : "Add to List"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UpcomingHero;
