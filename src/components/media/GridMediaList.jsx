import MediaCard from "./MediaCard";

function GridMediaList({ items, limit = 10 }) {
  return (
    <div className="grid gap-4 gris-cols-2 sm:grid-cols-3 lg:grid-cols-5 bg-black/98 px-15 py-5">
      {items.slice(0, limit).map((media) => (
        <MediaCard key={media.id} media={media} />
      ))}
    </div>
  );
}

export default GridMediaList;
