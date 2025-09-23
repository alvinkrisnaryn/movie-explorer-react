import { useEffect, useState } from "react";
import { FaStar, FaPlay, FaPlus, FaCheck } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import useFavorites from "../../context/useFavorites";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import {
  getMovieTrailer,
  getMovieCertification,
  getMoviesByCompany,
} from "../../api/movies";

function MovieHeroSection({ companyId }) {
  const [movies, setMovies] = useState([]);
  const [current, setCurrent] = useState(0);
  const [trailerKey, setTrailerKey] = useState(null);
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);
  const [certification, setCertification] = useState("NR");
  const [showFull, setShowFull] = useState(false);

  const { favorites, addFavorite, removeFavorite } = useFavorites();

  useEffect(() => {
    async function fetchMovies() {
      try {
        const data = await getMoviesByCompany(companyId);
        const limited = data.slice(0, 10);
        setMovies(limited);

        if (limited.length > 0) {
          const cert = await getMovieCertification(limited[0].id);
          setCertification(cert || "NR");
        }
      } catch (error) {
        console.error("Error fetching populer movies:", error);
      }
    }
    fetchMovies();
  }, [companyId]);

  useEffect(() => {
    if (movies.length <= 1) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % movies.length);
      setShowFull(false);
    }, 30000);

    return () => clearInterval(interval);
  }, [movies]);

  useEffect(() => {
    async function fetchCert() {
      if (movies.length === 0) return;
      try {
        const cert = await getMovieCertification(movies[current].id);
        setCertification(cert || "NR");
      } catch (error) {
        console.error("Error fetching certification:", error);
        setCertification("NR");
      }
    }
    fetchCert();
  }, [current, movies]);

  if (movies.length === 0) return null;

  const hero = movies[current];
  const isFavorite = favorites.some((item) => item.id === hero.id);
  const ratingValue = hero.vote_average
    ? parseFloat(hero.vote_average).toFixed(1)
    : "-";

  const handleWatch = async () => {
    try {
      const key = await getMovieTrailer(hero.id);
      if (key) {
        setTrailerKey(key);
        setIsTrailerOpen(true);
      } else {
        alert("Trailer tidak tersedia.");
      }
    } catch (error) {
      console.error("Error fetching trailer:", error);
    }
  };

  const handleToogleFavorite = async () => {
    if (isFavorite) {
      removeFavorite(hero.id);
    } else {
      addFavorite(hero);
    }
  };

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden text-white bg-black">
      <AnimatePresence>
        <motion.section
          key={hero.id}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.9, ease: "linear" }}
          className="font-nunito absolute inset-0 w-full h-full "
        >
          <img
            src={`https://image.tmdb.org/t/p/original${hero.backdrop_path}`}
            alt={hero.title}
            className="absolute w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via/black/40 to-transparent"></div>

          <div className="relative z-10 max-w-full md:max-w-3xl px-4 md:px-6 top-1/4 md:top-1/3 text-left md:text-left">
            {certification !== "NR" && (
              <span className="inline-block mb-5 bg-amber-500 px-4 py-1 rounded-[5px] text-[10px] md:text-xs font-bold uppercase tracking-wide">
                {certification}
              </span>
            )}
            <p className="text-sm md:text-lg font-bold mb-3 md:mb-4 flex gap-2 md:gap-4 items-start justify-start md:justify-start">
              <FaStar size={20} className="text-red-600" />
              <span>{ratingValue}</span>
              <span className="text-white-300">•</span>
              <span>
                {hero.release_date?.slice(0, 4) ||
                  hero.first_air_date?.slice(0, 4)}
              </span>
            </p>
            <h1 className="text-2xl md:text-5xl font-bold md:3 md:mb-4 drop-shadow-xl tracking-wide">
              {hero.title}
            </h1>
            <div className="relative mb-3 md:mb-4">
              <p
                className={`text-sm md:text-base text-gray-200 font-medium ${
                  showFull ? "" : "line-clamp-2"
                }`}
              >
                {hero.overview}
              </p>
              {!showFull && hero.overview?.length > 150 && (
                <div className="absolute bottom-0 left-0 right-0 h-6 pointer-events-none"></div>
              )}

              {hero.overview?.length > 150 && (
                <button
                  onClick={() => setShowFull(!showFull)}
                  className="mt-1 text-sm md:text-sm text-gray-300 hover:text-white relative z-10 hover:cursor-pointer"
                >
                  {showFull ? "Show Less" : "Show More"}
                </button>
              )}
            </div>

            <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-row sm:gap-8 text-sm md:text-base mt-4">
              <button
                onClick={handleWatch}
                className="flex items-center justify-center md:gap-2 gap-3 bg-red-600 w-full md:w-auto px-6 md:px-8 py-2.5 rounded-full font-extrabold hover:bg-red-700 transition cursor-pointer"
              >
                <FaPlay size={16} className="text=white" /> Watch
              </button>
              <button
                onClick={handleToogleFavorite}
                className="flex items-center justify-center gap-2 md:gap-3 bg-gray-700 w-full md:w-auto px-6 md:px-8 py-2.5 rounded-full font-extrabold hover:bg-gray-800 transition cursor-pointer"
              >
                {isFavorite ? <FaCheck /> : <FaPlus />}
                {isFavorite ? "Added" : "Add to List"}
              </button>
            </div>
          </div>
        </motion.section>
      </AnimatePresence>

      {isTrailerOpen && (
        <div className="fixed inset-0 bg-black/98 z-[60] flex items-center justify-center">
          <div className="relative w-[95%] h-[80%]">
            <iframe
              src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}
              title="Trailer"
              allow="autoplay; encrypted-media"
              className="w-full h-full rounded-lg"
              allowFullScreen
            />
            <button
              onClick={() => setIsTrailerOpen(false)}
              className="absolute -top-10 right-0 text-white font-bold hover:cursor-pointer"
            >
              <AiOutlineClose size={30} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieHeroSection;
