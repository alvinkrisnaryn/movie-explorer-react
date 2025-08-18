import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { FavoriteProvider } from "./context/FavoriteContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <FavoriteProvider>
        <App />
      </FavoriteProvider>
    </BrowserRouter>
  </React.StrictMode>
);
