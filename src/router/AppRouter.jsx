import { Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import DetailLayout from "../components/layout/DetailLayout";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import MovieDetail from "../pages/home/MovieDetail";
import TvDetail from "../pages/home/TvDetail";
import FavoritesPage from "../pages/favorite/FavoritesPage";
import NotFound from "../pages/NotFound";
import Movies from "../pages/movies/Movies";
import TvShows from "../pages/tv/TvShows";

function AppRouter({ searchTerm, onSearch }) {
  return (
    <Routes>
      <Route element={<MainLayout onSearch={onSearch} />}>
        <Route path="/" element={<Home searchTerm={searchTerm} />} />
        <Route path="/movie" element={<Movies />} />
        <Route path="/tv" element={<TvShows />} />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      <Route element={<DetailLayout />}>
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/tv/:id" element={<TvDetail />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
