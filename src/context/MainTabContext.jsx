import GridMediaList from "../components/media/GridMediaList";

function MainTabContext({ mainTab, movies, tv_shows }) {
  if (mainTab === "movies") {
    return (
      <div className="space-y-6">
        <GridMediaList items={movies.topRated} limit={15}/>
      </div>
    );
  }

  if (mainTab === "tv_shows") {
    return (
      <div className="space-y-6 bg-black/98">
        <GridMediaList items={tv_shows.topRated} limit={15} />
      </div>
    );
  }
}

export default MainTabContext;
