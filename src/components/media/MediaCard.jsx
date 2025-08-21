import { Link } from "react-router-dom";
import useFavorites from "../../context/useFavorites";
import { FaHeart, FaRegHeart } from "react-icons/fa";

function MediaCard({ media }) {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const displayTitle = media.title || media.name;
  const mediaType = media.title ? "movie" : "tv";

  const toggleFav = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isFavorite(media.id, mediaType)) {
      removeFavorite(media.id, mediaType);
    } else {
      addFavorite({ ...media, mediaType });
    }
  };

  return (
    <div className="p-3">
      <div className="relative">
        <Link to={`/${mediaType}/${media.id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w300${media.poster_path}`}
            alt={displayTitle}
            className="w-full h-90 rounded-lg object-cover"
          />
        </Link>
        <button
          onClick={toggleFav}
          aria-label={
            isFavorite(media.id, mediaType)
              ? "Remove from favorites"
              : "Add to favorites"
          }
          className={`absolute top-2 right-2 p-2 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer transition-transform duration-200 ease-in-out transform hover:scale-115 ${
            isFavorite(media.id, mediaType)
              ? "bg-red-500 text-white"
              : "bg-gray-200 text-black"
          }
      opacity-100% group-hover:opacity-100 shadow`}
        >
          {isFavorite(media.id, mediaType) ? <FaHeart /> : <FaRegHeart />}
        </button>
      </div>
      <h3 className="text-lg font-bold text-center pt-3">{displayTitle}</h3>
      <p className="text-lg font-bold text-center">({media.release_year})</p>
    </div>
  );
}

export default MediaCard;
