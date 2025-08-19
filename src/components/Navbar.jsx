import { NavLink } from "react-router-dom";
import { useState } from "react";
import {FaSearch} from "react-icons/fa";

function Navbar({ onSearch }) {
  const [query, setQuery] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-blue-500 text-white p-4 shadow">
      <div className="container mx-auto flex flex-col sm:flex-row gap-4 sm:items-center justify-between">
        <div className="flex gap-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-white-500 font-bold" : "text-white-500"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-white-500 font-bold" : "text-white-500"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              isActive ? "text-white-500 font-bold" : "text-white-500"
            }
          >
            Favorites
          </NavLink>
        </div>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            placeholder="Movie Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="px-4 py-2 border-2 border-gray-200"
          />
          <button
            type="submit"
            className="bg-blue-700 px-3 rounded-r hover:bg-blue-900"
          >
            <FaSearch/>
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
