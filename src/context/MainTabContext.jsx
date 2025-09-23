import GridMediaList from "../components/media/GridMediaList";

function MainTabContext({ mainTab, movies, tv_shows }) {
  if (mainTab === "movies") {
    return (
      <section className="bg-black">
        <GridMediaList items={movies.topRated} limit={15} />
      </section>
    );
  }

  if (mainTab === "tv_shows") {
    return (
      <section className="bg-black">
        <GridMediaList items={tv_shows.topRated} limit={15} />
      </section>
    );
  }
}

export default MainTabContext;
