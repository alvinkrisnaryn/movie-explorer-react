import MediaList from "../components/media/MediaList";

function MainTabContext({ mainTab, movies, tv_shows }) {
  if (mainTab === "movies") {
    return (
      <>
        <MediaList items={movies.popular} />
        <MediaList items={movies.topRated} />
      </>
    );
  }

  if (mainTab === "tv_shows") {
    return (
      <>
        <MediaList items={tv_shows.popular} />
        <MediaList items={tv_shows.topRated} />
      </>
    );
  }
}

export default MainTabContext;
