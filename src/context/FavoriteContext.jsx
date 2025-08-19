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

  const addFavorite = (item) => {
    const mediaType = item.title ? "movie" : "tv";
    const favoriteItem = { ...item, mediaType };

    if (!favorites.some((m) => m.id === item.id && m.mediaType === mediaType)) {
      setFavorites((prev) => [...prev, favoriteItem]);
    }
  };

  const removeFavorite = (id, mediaType) => {
    setFavorites((prev) =>
      prev.filter((m) => !(m.id === id && m.mediaType === mediaType))
    );
  };

  const isFavorite = (id, mediaType) =>
    favorites.some((m) => m.id === id && m.mediaType === mediaType);

  const value = { favorites, addFavorite, removeFavorite, isFavorite };
  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
}

export default FavoriteContext;
