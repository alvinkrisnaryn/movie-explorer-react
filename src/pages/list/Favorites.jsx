import MediaCard from "../../components/media/MediaCard";
import useFavorites from "../../context/useFavorites";

export default function Favorites() {
  const { favorites } = useFavorites();

  const favoriteMovies = favorites.filter((f) => f.mediaType === "movie");
  const favoriteTvShows = favorites.filter((f) => f.mediaType === "tv");

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold p-4 text-center">
        My Favorite Film and TV Show
      </h1>

      <section className="mb-10">
        <h2 className="text-2xl font-bold p-4">Movies Favorite</h2>
        {favoriteMovies.lenght === 0 ? (
          <p className="text-gray-500">No favorite movies yet.</p>
        ) : (
          <div className="grid gap-4 [grid-template-columns:repeat(auto-fill,minmax(200px,1fr))] lg:grid-cols-5">
            {favoriteMovies.map((movie) => (
              <MediaCard key={`movie-${movie.id}`} media={movie} />
            ))}
          </div>
        )}
      </section>

      <section>
        <h2 className="text-2xl font-bold p-4">Tv Shows Favorite</h2>
        {favoriteTvShows.lenght === 0 ? (
          <p className="text-gray-500">No favorite Tv Shows yet.</p>
        ) : (
          <div className="grid gap-4 [grid-template-columns:repeat(auto-fill,minmax(200px,1fr))] lg:grid-cols-5">
            {favoriteTvShows.map((tv) => (
              <MediaCard key={`tv-${tv.id}`} media={tv} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
