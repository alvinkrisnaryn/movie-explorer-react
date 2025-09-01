import { useEffect, useState } from "react";
import { MoviesApi, SearchApi, TvApi } from "../api";
import { getMoviesByFilter } from "../api/movies";
import { getTvByFilter } from "../api/tv";
import MediaList from "../components/media/MediaList";
import MediaCard from "../components/media/MediaCard";
import HeroSection from "../components/container/HeroSection";
import CategoryTabs from "../components/common/CategoryTabs";
import GenreFilter from "../components/common/GenreFilter";
import MainTabs from "../components/common/MainTabs";
import MainTabContext from "../context/MainTabContext";
import SortFilter from "../components/common/SortFilter";
import RatingFilter from "../components/common/RatingFilter";
import YearFilter from "../components/common/YearFilter";
import UpcomingHero from "../components/container/UpcomingHero";
import UpcomingSection from "../components/container/UpcomingSection";

function Home({ searchTerm }) {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  // const [popularTv, setPopularTv] = useState([]);
  const [topRatedTv, setTopRatedTv] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [heroMovie, setHeroMovie] = useState(null);
  const [heroRating, setHeroRating] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [setActiveTab] = useState("trending");
  const [setActiveGenre] = useState("Action");
  const [mainTab, setMainTab] = useState("movies");
  const [year, setYear] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const [rating, setRating] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        if (searchTerm && searchTerm.trim() !== "") {
          const result = await SearchApi.searchMovies(searchTerm);
          setSearchResults(result);
        } else {
          const [popularMoviesRes, topRatedMoviesRes, topRatedTvRes] =
            await Promise.all([
              MoviesApi.getPopularMovies(),
              MoviesApi.getTopRatedMovies(),
              TvApi.getTopRatedTvShows(),
            ]);
          setPopularMovies(popularMoviesRes);
          setTopRatedMovies(topRatedMoviesRes);
          setTopRatedTv(topRatedTvRes);

          const hero = topRatedMoviesRes[12];
          setHeroMovie(hero);
          if (hero) {
            const certification = await MoviesApi.getMovieCertification(
              hero.id
            );
            setHeroRating(certification);
          }
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [searchTerm]);

  useEffect(() => {
    async function fetchFilteredData() {
      try {
        setLoading(true);
        if (mainTab === "movies") {
          const result = await getMoviesByFilter({ year, sortBy, rating });
          setTopRatedMovies(result);
        } else if (mainTab === "series") {
          const result = await getTvByFilter({ year, sortBy, rating });
          setTopRatedTv(result);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    if (year || sortBy || rating) {
      fetchFilteredData();
    }
  }, [mainTab, year, sortBy, rating]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  if (searchTerm) {
    return (
      <>
        <h1 className="text-4xl font-bold p-4 text-center">
          Search results for "{searchTerm}"
        </h1>
        {searchResults.length === 0 ? (
          <p className="text-center text-gray-500">No movies found.</p>
        ) : (
          <div className="grid gap-1 [grid-template-columns:repeat(auto-fill,minmax(200px,1fr))] lg:grid-cols-5">
            {searchResults.map((media) => (
              <MediaCard key={media.id} media={media} />
            ))}
          </div>
        )}
      </>
    );
  }

  return (
    <>
      <HeroSection media={heroMovie} rating={heroRating} />

      <CategoryTabs onChange={(tab) => setActiveTab(tab)} />
      <GenreFilter onChange={(genre) => setActiveGenre(genre)} />

      <MediaList items={popularMovies} />
      <MainTabs activeTab={mainTab} onChange={setMainTab} />

      <div className="flex items-center justify-between bg-black/98 p-5">
        <div className="flex space-x-5 mx-6">
          <YearFilter year={year} onChange={setYear} />
          <SortFilter sortBy={sortBy} onChange={setSortBy} />
        </div>
        <div className="mx-6">
          <RatingFilter rating={rating} onChange={setRating} />
        </div>
      </div>
      <MainTabContext
        mainTab={mainTab}
        movies={{ topRated: topRatedMovies }}
        tv_shows={{ topRated: topRatedTv }}
      />

      <UpcomingHero />
      <UpcomingSection />
    </>
  );
}

export default Home;
