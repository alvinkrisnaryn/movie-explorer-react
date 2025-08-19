import { Link } from "react-router-dom";
import useFavorites from "../context/useFavorites";
import { FaHeart, FaRegHeart } from "react-icons/fa";

function MovieCard({ movie }) {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const displayTitle = movie.title || movie.name;
  const mediaType = movie.title ? "movie" : "tv";

  const toggleFav = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isFavorite(movie.id, mediaType)) {
      removeFavorite(movie.id, mediaType);
    } else {
      addFavorite({ ...movie, mediaType });
    }
  };

  return (
    <div className="p-3">
      <div className="relative">
        <Link to={`/${mediaType}/${movie.id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={displayTitle}
            className="w-full h-90 rounded-lg object-cover"
          />
        </Link>
        <button
          onClick={toggleFav}
          aria-label={
            isFavorite(movie.id, mediaType)
              ? "Remove from favorites"
              : "Add to favorites"
          }
          className={`absolute top-2 right-2 p-2 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer transition-transform duration-200 ease-in-out transform hover:scale-115 ${
            isFavorite(movie.id, mediaType)
              ? "bg-red-500 text-white"
              : "bg-gray-200 text-black"
          }
      opacity-100% group-hover:opacity-100 shadow`}
        >
          {isFavorite(movie.id, mediaType) ? <FaHeart /> : <FaRegHeart />}
        </button>
      </div>
      <h3 className="text-lg font-bold text-center pt-3">{displayTitle}</h3>
      <p className="text-lg font-bold text-center">({movie.release_year})</p>
    </div>
  );
}

export default MovieCard;
