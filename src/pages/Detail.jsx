import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MoviesApi } from "../api";

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchMovie() {
      try {
        const data = await MoviesApi.getMovieDetail(id);
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie detail:", error);
      }
    }

    fetchMovie();
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="flex flex-col bg-gray-300/50 rounded-lg p-7 m-6 max-w-sm">
      <h1 className="text-2xl font-bold text-center">{movie.title}</h1>
      <p className="text-2xl font-bold mb-4 text-center">
        {movie.release_year}
      </p>  
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="mb-4"
      />
      <p>{movie.overview}</p>
    </div>
  );
}

export default MovieDetail;
