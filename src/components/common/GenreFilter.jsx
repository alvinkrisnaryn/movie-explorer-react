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

function GenreFilter({ activeGenre, onChange }) {
  const handleGenreClick = (genre) => {
    if (onChange) onChange(genre);
  };

  return (
    <div className="w-full bg-black/90 backdrop-blur-sm px-4 md:px-6 py-5">
      <div className="flex justify-between gap-3 overflow-x-auto scrollbar-hide mx-3">
        {genres.map((genre) => (
          <button
            key={genre}
            onClick={() => handleGenreClick(genre)}
            className={`px-4.5 md:px-10 py-2 rounded-full text-xs md:text-sm font-semibold whitespace-nowrap transform transition-all ease-in-out duration-300 ${
              activeGenre === genre
                ? "bg-red-600 text-white shadow-lg"
                : "bg-[#333333] text-gray-300 hover:bg-[#444444] hover:shadow-md cursor-pointer"
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
