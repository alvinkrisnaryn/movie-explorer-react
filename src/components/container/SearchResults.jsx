import MediaCard from "../media/MediaCard";

function SearchResults({ searchTerm, results }) {
  return (
    <section className="min-h-screen bg-black text-white py-15 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Search Results for{" "}
          <span className="text-red-600">"{searchTerm}"</span>
        </h1>

        {results.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <p className="text-gray-400 text-lg">
              No Movies or Tv shows found.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Try another keyword or check trending content!
            </p>
          </div>
        ) : (
          <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {results.map((media) => (
              <MediaCard key={media.id} media={media} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default SearchResults;
