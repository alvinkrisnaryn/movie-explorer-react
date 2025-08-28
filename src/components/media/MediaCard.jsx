import { Link } from "react-router-dom";
import useFavorites from "../../context/useFavorites";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";

function MediaCard({ media }) {
  const { addFavorite, removeFavorite, favorites } = useFavorites()

  const mediaType = media.title ? "movie" : "tv";
  const displayTitle = media.title || media.name;
  const year = (media.release_date || media.first_air_date || "").slice(0, 4);
  const rating = media.vote_average ? media.vote_average.toFixed(1) : "N/A";
  const isFav = favorites?.some?.((f) => f.id === media.id);

  const toggleFav = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isFav) removeFavorite(media.id, mediaType);
    else addFavorite({ ...media, mediaType });
  };

  return (
    <div className="w-[160px] sm:w-[200px] md:w-[220px] flex-shrink-0 px-2">
      <Link to={`/${mediaType}/${media.id}`} className="block">
        <div className="relative group rounded-xl overflow-hidden">
          <img
            src={`https://image.tmdb.org/t/p/w300${media.poster_path}`}
            alt={displayTitle}
            className="w-full h-[240px] sm:h-[300px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 will-change-transform"
            loading="lazy"
          />
          <button
            onClick={toggleFav}
            className={`absolute top-2 right-2 w-9 h-9 rounded-full cursor-pointer flex items-center justify-center backdrop-blur-sm transition-colors duration-200 ${
              isFav
                ? "bg-red-600 text-white"
                : "bg-white/80 text-black hover:bg-red-500 hover:text-white"
            }`}
            aria-label={isFav ? "Remove from My List" : "Add to My List"}
          >
            {isFav ? <FaHeart /> : <FaRegHeart />}
          </button>
        </div>
      </Link>

      <h3 className="text-base font-bold mt-2 truncate text-white">
        {displayTitle}
      </h3>

      <div className="flex justify-between gap-3 text-xs text-gray-400 mt-1">
        <span className="text-sm font-bold">{year}</span>
        <span className="flex items-center gap-1 text-yellow-400 font-bold text-sm">
          <FaStar size={16}/>
          {rating}
        </span>
      </div>
    </div>
  );
}

export default MediaCard;
