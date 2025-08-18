import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Detail from "./pages/Detail";
import Favorites from "./pages/Favorites";
import NotFound from "./pages/NotFound";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <div>
        <Navbar onSearch={setSearchTerm} />
        <main>
          <Routes>
            <Route path="/" element={<Home searchTerm={searchTerm} />} />
            <Route path="/about" element={<About />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/movie/:id" element={<Detail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
