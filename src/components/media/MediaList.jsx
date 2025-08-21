import MediaCard from "./MediaCard";

function MediaList({ title, items }) {
  if (!items || items.length === 0) return null;

  return (
    <section>
      <h2 className="text-2xl font-bold p-4">{title}</h2>
      <div className="grid gap-1 [grid-template-columns:repeat(auto-fill,minmax(200px,1fr))] lg:grid-cols-5">
        {items.map((media) => (
          <MediaCard key={media.id} media={media} />
        ))}
      </div>
    </section>
  );
}

export default MediaList;
