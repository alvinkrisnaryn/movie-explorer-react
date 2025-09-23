import MediaCard from "./MediaCard";

function GridMediaList({ items, limit = 10 }) {
  return (
    <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 bg-black py-5 px-5 sm:px-6 md:px-10 lg:px-16 justify-items-center">
      {items.slice(0, limit).map((media) => (
        <MediaCard key={media.id} media={media} />
      ))}
    </div>
  );
}

export default GridMediaList;
