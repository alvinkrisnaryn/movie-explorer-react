import { useState } from "react";

const genres = [
  "Action",
  "Adventure",
  "Anime",
  "Biography",
  "Crime",
  "Comedy",
  "Documentary",
  "Drama",
];

function GenreFilter({ onChange }) {
  const [activeGenre, SetActiveGenre] = useState("Action");

  const handleGenreClick = (genre) => {
    SetActiveGenre(genre);
    if (onChange) onChange(genre);
  };

  return (
    <div className="w-full bg-black/90 backdrop-blur-sm px-6 py-7">
      <div className="flex justify-between gap-3 overflow-x-auto scrollbar-hide mx-10">
        {genres.map((genre) => (
          <button
            key={genre}
            onClick={() => handleGenreClick(genre)}
            className={`px-10 py-2 rounded-full text-sm font-semibold whitespace-nowrap transform transition-all ease-in-out duration-500 ${
              activeGenre === genre
                ? "bg-red-600 text-white shadow-lg"
                : "bg-[#333333] text-gray-300 hover:shadow-md cursor-pointer"
            }`}
          >
            {genre}
          </button>
        ))}
      </div>
    </div>
  );
}

export default GenreFilter;
