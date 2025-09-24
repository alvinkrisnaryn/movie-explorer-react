import { useState, useEffect } from "react";
import ContentLoading from "../../components/common/ContentLoading";
import TvHeroSection from "./TvHeroSection";
import TrendingTvByWeek from "./TrendingTvByWeek";
import TvShowsByKids from "./TvShowsByKids";
import TrendingTvByNetwork from "./TrendingTvByNetwork";

function TvShows() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <ContentLoading />;

  return (
    <>
      <TvHeroSection />
      <TrendingTvByWeek />
      <TrendingTvByNetwork networkId={2739} title="Series Disney" />
      <TvShowsByKids />
      <TrendingTvByNetwork networkId={56} title="Series Cartoon Network" />
      <TrendingTvByNetwork networkId={213} title="Netflix Originals" />
    </>
  );
}
export default TvShows;
