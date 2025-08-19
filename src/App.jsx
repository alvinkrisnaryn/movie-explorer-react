import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import MovieDetail from "./pages/MovieDetail";
import TvDetail from "./pages/TvDetail";
import Favorites from "./pages/Favorites";
import NotFound from "./pages/NotFound";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <div>
        <Navbar onSearch={setSearchTerm} />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home searchTerm={searchTerm} />} />
            <Route path="/about" element={<About />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
            <Route path="/tv/:id" element={<TvDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
