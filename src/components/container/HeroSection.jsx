import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaStar, FaPlay, FaPlus, FaCheck } from "react-icons/fa";
import useFavorites from "../../context/useFavorites";

function HeroSection({ media, rating }) {
  const [showFull, setShowFull] = useState(false);
  const navigate = useNavigate();

  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const isFavorite = favorites.some((item) => item.id === media.id);

  if (!media) return null;

  const title = media.title || media.name;
  const description = media.overview;
  const ratingValue = parseFloat(media.vote_average).toFixed(1);

  const handleWatch = () => {
    if (media.title) {
      navigate(`/movie/${media.id}`);
    } else if (media.name) {
      navigate(`/tv/${media.id}`);
    }
  };

  const handleToggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(media.id);
    } else {
      addFavorite(media);
    }
  };

  return (
    <section className="font-nunito relative w-full h-screen text-white">
      <img
        src={`https://image.tmdb.org/t/p/original${media.backdrop_path}`}
        alt={title}
        className="absolute inset-0 w-full h-[80vh] md:h-screen object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

      <div className="relative z-10 max-w-2xl px-6 top-1/3 ml-10">
        {rating && (
          <span className="inline-block mb-5 bg-amber-500 px-4 py-1 rounded-[5px] text-xs font-bold uppercase tracking-wide">
            {rating}
          </span>
        )}
        <p className="text-lg font-bold mb-4 flex gap-4 items-center">
          <FaStar size={20} className="text-red-600" />
          <span>{ratingValue} </span>
          <span className="text-white-300">•</span>
          <span>
            {media.release_date?.slice(0, 4) ||
              media.first_air_date?.slice(0, 4)}
          </span>
        </p>
        <h1 className="text-5xl font-bold mb-4 drop-shadow-xl tracking-wide">
          {title}
        </h1>
        <div className="relative mb-6">
          <p
            className={`text-base md:text-base text-gray-200 font-bold ${
              showFull ? "" : "line-clamp-2"
            }`}
          >
            {description}
          </p>

          {!showFull && description?.length > 150 && (
            <div className="absolute bottom-0 left-0 right-0 h-6 pointer-events-none"></div>
          )}

          {description?.length > 150 && (
            <button
              onClick={() => setShowFull(!showFull)}
              className="mt-2 text-sm text-gray-300 hover:text-white relative z-10"
            >
              {showFull ? "Show less" : "Show more"}
            </button>
          )}
        </div>

        <div className="flex gap-8 text-base">
          <button
            onClick={handleWatch}
            className="flex items-center gap-3 bg-red-600 px-8 py-2.5 rounded-full font-extrabold hover:bg-red-700 transition cursor-pointer"
          >
            <FaPlay size={16} className="text-white" /> Watch
          </button>
          <button
            onClick={handleToggleFavorite}
            className="flex items-center gap-3 bg-gray-700/70 px-8 py-2.5 rounded-full font-extrabold hover:bg-gray-600 transition cursor-pointer"
          >
            {isFavorite ? <FaCheck /> : <FaPlus />}
            {isFavorite ? "Added" : "Add to List"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
