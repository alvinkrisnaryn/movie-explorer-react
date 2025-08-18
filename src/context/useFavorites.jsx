import { useContext } from "react";
import FavoriteContext from "./FavoriteContext";

function useFavorites() {
  const ctx = useContext(FavoriteContext);
  if (!ctx) {
    throw new Error("useFavorite must be used within a FavoriteProvider");
  }
  return ctx;
}

export default useFavorites;
