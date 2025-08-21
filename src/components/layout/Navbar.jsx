import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaSearch, FaUserCircle } from "react-icons/fa";

function Navbar({ onSearch }) {
  const [query, setQuery] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black/70 to-transparent text-white">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-6">
          <h1 className="text-red-600 font-bold text-2xl">NaaFlix</h1>
          <div className="hidden md:flex gap-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-white"
                  : "text-gray-300 hover:text-white"
              }
            >
              Home
            </NavLink>
            <NavLink>Movies</NavLink>
            <NavLink>Tv Shows</NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-white"
                  : "text-gray-300 hover:text-white"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-white"
                  : "text-gray-300 hover:text-white"
              }
            >
              My List
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
