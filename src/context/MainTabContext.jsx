import GridMediaList from "../components/media/GridMediaList";

function MainTabContext({ mainTab, movies, tv_shows }) {
  if (mainTab === "movies") {
    return (
      <div className="space-y-6 px-14 bg-black">
        <GridMediaList items={movies.topRated} limit={15} />
      </div>
    );
  }

  if (mainTab === "tv_shows") {
    return (
      <div className="space-y-6 px-14 bg-black">
        <GridMediaList items={tv_shows.topRated} limit={15} />
      </div>
    );
  }
}

export default MainTabContext;
