import { NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { FaSearch, FaUserCircle, FaTimes, FaBell } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";

function Navbar({ onSearch }) {
  const [isSearching, setIsSearching] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
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
      <div className="flex items-center justify-between px-4 py-4">
        <div className="flex items-center">
          <img
            src="/logo-netflix.png"
            alt="Netflix Logo"
            className="h-6 sm:h-6 md:h-7 lg:h-8"
          />
          <div className="hidden md:flex gap-5 md:gap-8 md:mx-10 lg:mx-25 2xl:mx-70 lg:gap-15 xl:gap-20 text-sm md:text-base lg:text-lg">
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

        <div className="flex items-center relative gap-7 md:gap-5 lg:gap-10 2xl:gap-15">
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
                className="bg-black/80 text-white placeholder-gray-400 rounded-xl focus:outline-none px-3 sm:w-50 md:w-20 lg:w-40"
              />
              <FaTimes
                size={18}
                className="ml-2 cursor-pointer hover:text-red-600"
                onClick={() => {
                  setQuery("");
                  onSearch("");
                  setIsSearching(false);
                }}
              />
            </form>
          )}
          <FaBell
            size={18}
            className=" sm:block cursor-pointer hover:text-gray-400"
          />
          <FaUserCircle
            size={26}
            className="hidden sm:block cursor-pointer hover:text-gray-400"
          />

          <button
            className="md:hidden lg:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <HiMenu
              size={28}
              className={`transform transition-transform duration-300 ${
                isOpen ? "rotate-90 opacity-0" : "opacity-100"
              }`}
            />
            <FaTimes
              size={28}
              className={`absolute top-0 transform transition-transform duration-300 ${
                isOpen ? "opacity-100 rotate-0" : "opacity-0 rotate-90"
              }`}
            />
          </button>
        </div>
      </div>

      <div
        className={`bg-black/95 md:hidden fixed top-0 left-0 w-1/2 h-full backdrop-blur-lg transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } `}
      >
        <div className="flex flex-col gap-6 mt-20 px-6 text-lg font-bold">
          <NavLink to="/" onClick={() => setIsOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/movie" onClick={() => setIsOpen(false)}>
            Movies
          </NavLink>
          <NavLink to="/tv" onClick={() => setIsOpen(false)}>
            Tv Shows
          </NavLink>
          <NavLink to="/favorites" onClick={() => setIsOpen(false)}>
            My List
          </NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)}>
            About
          </NavLink>
          <hr className="bordey-gray-800 my-4" />
          <button
            className="bg-red-600 hover:bg-red-800 text-white px-5 py-2 rounded-lg font-bold transition-colors"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
