import { useState, useEffect } from "react";
import ContentLoading from "../../components/common/ContentLoading";
import MovieHeroSection from "./MovieHeroSection";
import TrendingMovieByWeek from "./TrendingMovieByWeek";
import RegionalSection from "../../components/container/RegionalSection";
import MovieByCompany from "./MovieByCompany";
import MovieByKids from "./MovieByKids";
import Footer from "../../components/layout/Footer";

function Movies() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <ContentLoading />;
  }

  return (
    <>
      <MovieHeroSection companyId={3} />
      <TrendingMovieByWeek />
      <RegionalSection regions={["id"]} />
      <MovieByCompany companyId={420} title="Marvel Studio" />
      <MovieByKids />
      <MovieByCompany companyId={2251} title="Sony Pictures Animation" />
      <Footer />
    </>
  );
}
export default Movies;
