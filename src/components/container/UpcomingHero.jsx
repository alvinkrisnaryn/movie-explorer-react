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
          const first = upcomingFiltered[5];
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
    <section className="font-nunito relative max-w-[90%] mx-auto h-screen py-3 text-white ">
      <div
        className="w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${media.backdrop})` }}
      >
        <div className="relative z-10 max-w-xl px-10 py-30">
          <div className="flex items-center font-bold mb-8">
            <span>{media.release_year}</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">{media.title}</h1>
          <p className="font-bold mb-6 max-w-xl">{media.overview}</p>

          <div className="flex gap-8 text-base">
            <button className="flex items-center gap-3 bg-red-600 px-8 py-2.5 rounded-full font-extrabold hover:bg-red-700 transition cursor-pointer">
              <FaPlay /> Watch
            </button>
            <button
              onClick={handleToggleFavorite}
              className="flex items-center gap-3 bg-gray-700 px-8 py-2.5 rounded-full font-extrabold hover:bg-gray-800 transition cursor-pointer"
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
