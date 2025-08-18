import MovieCard from "../components/MovieCard";
import useFavorites from "../context/useFavorites";

export default function Favorites(){
  const { favorites } = useFavorites();
  
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">My Favorite Movies</h1>
      {favorites.length === 0 ? (
        <p>You have no favorite movies yet.</p>
      ) : (
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-4 md:grid-cols-5">
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  )
}