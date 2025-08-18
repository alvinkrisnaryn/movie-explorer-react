import { createContext, useState, useEffect } from "react";

const FavoriteContext = createContext();

export function FavoriteProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("favorites");
    if (stored) setFavorites(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (movie) => {
    if (!favorites.some((m) => m.id === movie.id)) {
      setFavorites((prev) => [...prev, movie]);
    }
  };

  const removeFavorite = (id) => {
    setFavorites((prev) => prev.filter((m) => m.id !== id));
  };

  const isFavorite = (id) => favorites.some((m) => m.id === id);

  const value = { favorites, addFavorite, removeFavorite, isFavorite };
  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
}

export default FavoriteContext;
