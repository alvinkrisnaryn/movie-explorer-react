function HeroSection({ media }) {
  if (!media) return null;

  const title = media.title || media.name;
  const description = media.overview;

  return (
    <section className="font-nunito relative w-full h-screen text-white">
      <img
        src={`https://image.tmdb.org/t/p/original${media.backdrop_path}`}
        alt={title}
        className="absolute inset-0 w-full h-[80vh] md:h-screen object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

      <div className="relative z-10 max-w-2xl px-6 top-1/3">
        <p className="text-sm text-gray-300 mb-2">
          ⭐ {media.vote_average} •{" "}
          {media.release_date?.slice(0, 4) || media.first_air_date?.slice(0, 4)}
        </p>
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="font-nunito font-bold mb-6 text-sm text-gray-200 line-clamp-3">{description}</p>

        <div className="flex gap-4">
          <button className="bg-red-600 px-6 py-2 rounded-md font-semibold hover:bg-red-700 transition">
            ▶ Watch
          </button>
          <button className="bg-gray-700/70 px-6 py-2 rounded-md font-semibold hover:bg-gray-600 transition">
            ＋ Add to List
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
