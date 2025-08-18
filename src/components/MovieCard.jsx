import { Link } from "react-router-dom";
import useFavorites from "../context/useFavorites";

function MovieCard({ movie }) {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  return (
    <div className="p-3">
      <Link to={`/movie/${movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-90 rounded-lg"
        />
        <h3 className="text-lg font-bold text-center pt-3">{movie.title}</h3>
        <p className="text-lg font-bold text-center">({movie.release_year})</p>
      </Link>
      <button
        onClick={() =>
          isFavorite(movie.id) ? removeFavorite(movie.id) : addFavorite(movie)
        }
        className={`mt-2 p-2 rounded-full w-10 h-10 flex items-center justify-center ${
          isFavorite(movie.id)
            ? "bg-red-500 text-white"
            : "bg-gray-200 text-black"
        }`}
      >
        {isFavorite(movie.id) ? "❤️" : "🤍"}
      </button>
    </div>
  );
}

export default MovieCard;
