import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaStar, FaPlay, FaPlus, FaCheck } from "react-icons/fa";
import useFavorites from "../../context/useFavorites";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

function HeroSection({ medias, ratingMap = {} }) {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [showFull, setShowFull] = useState(false);
  const navigate = useNavigate();

  const validMedias = (medias || []).filter((m) => m.backdrop_path);

  const sorted = [...validMedias].sort((a, b) => b.popularity - a.popularity);
  const topMedias = sorted.slice(0, 10);

  const hero = topMedias[currentHeroIndex] || null;

  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const isFavorite = hero
    ? favorites.some((item) => item.id === hero.id)
    : false;

  useEffect(() => {
    if (topMedias.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % topMedias.length);
      setShowFull(false);
    }, 20000);

    return () => clearInterval(interval);
  }, [topMedias]);

  if (!hero) return null;

  const title = hero.title || hero.name;
  const description = hero.overview;
  const ratingValue = parseFloat(hero.vote_average).toFixed(1);
  const certification = ratingMap[hero.id] || "unknown";

  const handleWatch = () => {
    if (hero.title) {
      navigate(`/movie/${hero.id}`);
    } else if (hero.name) {
      navigate(`/tv/${hero.id}`);
    }
  };

  const handleToggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(hero.id);
    } else {
      addFavorite(hero);
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden text-white bg-black">
      <AnimatePresence mode="wait">
        <motion.section
          key={hero.id}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.9, ease: "linear" }}
          className="font-nunito absolute inset-0 w-full h-full"
        >
          <img
            src={`https://image.tmdb.org/t/p/original${hero.backdrop_path}`}
            alt={title}
            className="absolute inset-0 w-full h-[80vh] md:h-screen object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

          <div className="relative z-10 max-w-3xl px-6 top-1/3 ml-10">
            {certification && (
              <span className="inline-block mb-5 bg-amber-500 px-4 py-1 rounded-[5px] text-xs font-bold uppercase tracking-wide">
                {certification}
              </span>
            )}
            <p className="text-lg font-bold mb-4 flex gap-4 items-center">
              <FaStar size={20} className="text-red-600" />
              <span>{ratingValue} </span>
              <span className="text-white-300">•</span>
              <span>
                {hero.release_date?.slice(0, 4) ||
                  hero.first_air_date?.slice(0, 4)}
              </span>
            </p>
            <h1 className="text-5xl font-bold mb-4 drop-shadow-xl tracking-wide">
              {title}
            </h1>
            <div className="relative mb-4">
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
                  className="mt-1 text-sm text-gray-300 hover:text-white relative z-10"
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
                className="flex items-center gap-3 bg-gray-700 px-8 py-2.5 rounded-full font-extrabold hover:bg-gray-800 transition cursor-pointer"
              >
                {isFavorite ? <FaCheck /> : <FaPlus />}
                {isFavorite ? "Added" : "Add to List"}
              </button>
            </div>
          </div>
        </motion.section>
      </AnimatePresence>
    </div>
  );
}

export default HeroSection;
