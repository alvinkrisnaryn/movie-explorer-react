import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import logo from "../../../public/logo-netflix.png";

function Navbar({ onSearch }) {
  const [query, setQuery] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <nav className=" font-n fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black/70 to-transparent text-white">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-6">
          <img src={logo} alt="Netflix Logo" className="h-6 md:h-8" />
          <div className="hidden md:flex gap-20 mx-35 text-base">
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
              <span className="absolute left-1/2 -translate-x-1/2 -bottom-4 h-[3px] w-22 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
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

        <div className="flex items-center gap-4">
          <form onSubmit={handleSubmit} className="hidden md:flex">
            <input
              type="text"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="bg-gray-800 text-sm px-3 py-1 rounded-l-md focus:outline-none"
            />
            <button
              type="submit"
              className="bg-red-600 px-3 rounded-r-md hover:bg-red-700"
            >
              <FaSearch />
            </button>
          </form>
          <FaUserCircle className="text-2xl cursor-pointer hover:text-gray-400" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
