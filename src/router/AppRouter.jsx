import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import MovieDetail from "../pages/home/MovieDetail";
import TvDetail from "../pages/home/TvDetail";
import Favorites from "../pages/list/Favorites";
import NotFound from "../pages/NotFound";
import Movies from "../pages/movies/Movies";
import TvShows from "../pages/tv/TvShows";

function AppRouter({ searchTerm }) {
  return (
    <Routes>
      <Route path="/" element={<Home searchTerm={searchTerm} />} />
      <Route path="/movie" element={<Movies />} />
      <Route path="/tv" element={<TvShows />} />
      <Route path="/about" element={<About />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/movie/:id" element={<MovieDetail />} />
      <Route path="/tv/:id" element={<TvDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRouter;
