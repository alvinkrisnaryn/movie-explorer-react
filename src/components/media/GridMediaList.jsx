import MediaCard from "./MediaCard";

function GridMediaList({ items, limit = 10 }) {
  return (
    <div className="grid gap-10 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 bg-black py-5 px-16">
      {items.slice(0, limit).map((media) => (
        <MediaCard key={media.id} media={media} />
      ))}
    </div>
  );
}

export default GridMediaList;
