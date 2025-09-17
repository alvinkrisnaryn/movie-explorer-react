import { useState, useEffect, useRef } from "react";
import useFavorites from "../../context/useFavorites";
import GridMediaList from "../../components/media/GridMediaList";
import { FaChevronDown } from "react-icons/fa";

export default function FavoritesPage() {
  const { favorites } = useFavorites();
  const [filter, setFilter] = useState("all");
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const filteredFavorites = favorites.filter((f) => {
    if (filter === "all") return true;
    if (filter === "movies") return f.mediaType === "movie";
    if (filter === "tv") return f.mediaType === "tv";
    return true;
  });

  const handleSelect = (value) => {
    setFilter(value);
    setOpen(false);
  };

  return (
    <div className="p-6 text-white min-h-screen py-20 bg-black">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold">My List</h1>

        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setOpen(!open)}
            className="bg-gray-800 px-4 py-2 rounded-md border border-gray-600 flex items-center gap-2 hover:bg-gray-700 transition"
          >
            {filter === "all"
              ? "All"
              : filter === "movies"
              ? "Movies"
              : "Tv Shows"}
            <FaChevronDown
              className={`transform transition-transform ${
                open ? "rotate-180" : ""
              }`}
            />
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-40 bg-gray-900 border border-gray-700 rounded-mg shadow-lg animate-fadeIn z-20">
              <ul className="py-1">
                <li>
                  <button
                    onClick={() => handleSelect("all")}
                    className={`block w-full text-left px-4 py-2 hover:bg-gray-700 transition${
                      filter === "all" ? "bg-gray-700" : ""
                    }`}
                  >
                    All
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleSelect("movies")}
                    className={`block w-full text-left px-4 py-2 hover:bg-gray-700 transition${
                      filter === "movies" ? "bg-gray-700" : ""
                    }`}
                  >
                    Movies
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleSelect("tv")}
                    className={`block w-full text-left px-4 py-2 hover:bg-gray-700 transition${
                      filter === "tv" ? "bg-gray-700" : ""
                    }`}
                  >
                    Tv Shows
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {filteredFavorites.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-20 text-gray-400">
          <p className="text-xl font-semibold mb-2">No Favorites yet</p>
          <p className="text-sm font-semibold">
            Start adding Movies and Tv Shows to build your collection
          </p>
        </div>
      ) : (
        <GridMediaList items={filteredFavorites} limit={50} />
      )}
    </div>
  );
}
