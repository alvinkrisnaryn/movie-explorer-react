import { NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { FaSearch, FaUserCircle, FaTimes, FaBell } from "react-icons/fa";

function Navbar({ onSearch }) {
  const [isSearching, setIsSearching] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);
  const debounceRef = useRef(null);

  useEffect(() => {
    if (isSearching && inputRef.current) {
      inputRef.current.focus();
    }
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isSearching]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      onSearch(query);
      setIsSearching(false);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      if (value.trim() === "") {
        onSearch("");
      } else {
        onSearch(value);
      }
    }, 500);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-600 ${
        isScrolled
          ? "bg-black text-white"
          : "bg-gradient-to-b from-black/50 to-transparent text-white"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center">
          <img
            src="/logo-netflix.png"
            alt="Netflix Logo"
            className="h-6 md:h-7"
          />
          <div className="hidden md:flex gap-15 mx-40 text-base">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `group relative pb-1 ${
                  isActive
                    ? "text-white font-bold"
                    : "text-gray-300 hover:text-white font-bold"
                }`
              }
            >
              Home
              <span className="absolute left-1/2 -translate-x-1/2 -bottom-4 h-[3px] w-14 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </NavLink>
            <NavLink
              to="/movie"
              className={({ isActive }) =>
                `group relative pb-1 ${
                  isActive
                    ? "text-white font-bold"
                    : "text-gray-300 hover:text-white font-bold"
                }`
              }
            >
              Movies
              <span className="absolute left-1/2 -translate-x-1/2 -bottom-4 h-[3px] w-22 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </NavLink>
            <NavLink
              to="/tv"
              className={({ isActive }) =>
                `group relative pb-1 ${
                  isActive
                    ? "text-white font-bold"
                    : "text-gray-300 hover:text-white font-bold"
                }`
              }
            >
              Tv Shows
              <span className="absolute left-1/2 -translate-x-1/2 -bottom-4 h-[3px] w-16 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </NavLink>
            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                `group relative pb-1 ${
                  isActive
                    ? "text-white font-bold"
                    : "text-gray-300 hover:text-white font-bold"
                }`
              }
            >
              My List
              <span className="absolute left-1/2 -translate-x-1/2 -bottom-4 h-[3px] w-18 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `group relative pb-1 ${
                  isActive
                    ? "text-white font-bold"
                    : "text-gray-300 hover:text-white font-bold"
                }`
              }
            >
              About
              <span className="absolute left-1/2 -translate-x-1/2 -bottom-4 h-[3px] w-16 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </NavLink>
          </div>
        </div>

        <div className="flex items-center text-white relative gap-10">
          {!isSearching ? (
            <FaSearch
              size={18}
              className="cursor-pointer hover:text-red-600 transition-colors"
              onClick={() => setIsSearching(true)}
            />
          ) : (
            <form onSubmit={handleSubmit} className="flex items-center">
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="Search..."
                className="bg-black/80 text-white placeholder-gray-400 rounded-xl focus:outline-none px-3 py-1 w-0 sm:w-48"
                style={{ width: isSearching ? "12rem" : "0" }}
              />
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  onSearch("");
                  setIsSearching(false);
                }}
              >
                <FaTimes
                  size={18}
                  className="ml-2 cursor-pointer hover:text-red-600"
                />
              </button>
            </form>
          )}
          <FaBell size={18} className="cursor-pointer hover:text-gray-400" />
          <FaUserCircle
            size={30}
            className="cursor-pointer hover:text-gray-400"
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
