import { useEffect, useState } from "react";
import { MoviesApi, SearchApi, TvApi } from "../api";
import { getMovieCertification, getMoviesByFilter } from "../api/movies";
import { getTvByFilter, getTvCertification } from "../api/tv";
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
import UpcomingMovie from "../components/common/UpcomingHeader";
import UpcomingHero from "../components/container/UpcomingHero";
import UpcomingSection from "../components/container/UpcomingSection";
import FaqSection from "../components/layout/FaqSection";
import EmailSignUp from "../components/layout/EmailSignUp";
import Footer from "../components/layout/Footer";

function Home({ searchTerm }) {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [topRatedTv, setTopRatedTv] = useState([]);
  const [certificationMap, setCertificationMap] = useState({});
  const [searchResults, setSearchResults] = useState([]);
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
      const start = Date.now();
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
        }
      } catch (error) {
        setError(error.message);
      } finally {
        const elapsed = Date.now() - start;
        const minTime = 3000;
        const remaining = Math.max(minTime - elapsed, 0);
        setTimeout(() => setLoading(false), remaining);
      }
    }
    fetchData();
  }, [searchTerm]);

  useEffect(() => {
    async function fetchCertifications() {
      const map = {};

      for (const movie of topRatedMovies) {
        try {
          const cert = await getMovieCertification(movie.id);
          if (cert) map[movie.id] = cert;
        } catch (error) {
          console.error("Movie cert error:", error);
        }
      }

      for (const tv of topRatedTv) {
        try {
          const cert = await getTvCertification(tv.id);
          if (cert) map[tv.id] = cert;
        } catch (error) {
          console.error("TV cert error:", error);
        }
      }

      setCertificationMap(map);
    }

    if (topRatedMovies.length || topRatedTv.length) {
      fetchCertifications();
    }
  }, [topRatedMovies, topRatedTv]);

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

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-black/98">
        <div className="flex flex-col items-center">
          <img
            src="favicon-netflix.png"
            alt="Netflix Logo"
            className="w-24 h-24 animate-pulse animation: scalePulse 2s infinite"
          />
        </div>
      </div>
    );
  }
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
      <HeroSection
        medias={[...topRatedMovies, ...topRatedTv]}
        ratingMap={certificationMap}
      />

      <CategoryTabs onChange={(tab) => setActiveTab(tab)} />
      <GenreFilter onChange={(genre) => setActiveGenre(genre)} />

      <MediaList items={popularMovies} />
      <MainTabs activeTab={mainTab} onChange={setMainTab} />

      <div className="flex items-center justify-between bg-black/98 py-8">
        <div className="flex space-x-5 px-15">
          <YearFilter year={year} onChange={setYear} />
          <SortFilter sortBy={sortBy} onChange={setSortBy} />
        </div>
        <div className="px-20">
          <RatingFilter rating={rating} onChange={setRating} />
        </div>
      </div>
      <MainTabContext
        mainTab={mainTab}
        movies={{ topRated: topRatedMovies }}
        tv_shows={{ topRated: topRatedTv }}
      />

      <UpcomingMovie />
      <div className="bg-black/98">
        <UpcomingHero />
      </div>
      <UpcomingSection />

      <FaqSection />
      <EmailSignUp />
      <Footer />
    </>
  );
}

export default Home;
