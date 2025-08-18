# 🎬 Movie Explorer

Movie Explorer adalah aplikasi berbasis React untuk menampilkan informasi film menggunakan The Movie Database (TMDB) API. Proyek ini dibangun sebagai latihan setelah menyelesaikan kelas fundamental React, serta menggunakan Tailwind CSS untuk styling.

---

## 🚀 Fitur Utama

- Menampilkan daftar **film populer**
- **Search bar** untuk mencari film berdasarkan judul
- Halaman **detail film** dengan informasi lengkap
- Tambah / Hapus **film favorit**
- **Halaman Favorites** untuk menyimpan film pilihan user
- Data favorit tersimpan di **localStorage**
- Routing menggunakan **React Router DOM**
- Styling menggunakan **Tailwind CSS**

---

## 🛠️ Teknologi yang Digunakan

- [React (Vite)](https://vitejs.dev/)
- [React Router DOM](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TMDB API](https://www.themoviedb.org/documentation/api)
- Context API untuk global state management


## 📂 Struktur Folder

public/             # Assets (images, dll.)
src/
  api/              # File API handler (fetch data TMDB)
      movieAPI.jsx
  components/       # Reusable components (Navbar, MovieCard, dll.)
      MovieCard.jsx
      MovieList.jsx
      Navbar.jsx
  context/          # Context API (FavoriteContext, useFavorites)
      FavoriteContext.jsx
      useFavorites.jsx
  pages/            # Halaman utama (Home, Detail, Favorites, About, NotFound)
      About.jsx
      Detail.jsx
      Favorites.jsx
      Home.jsx
      NotFound.jsx
   router/          # Routing
      router.jsx
  App.jsx           # Root component
  index.css         # Global styling
  main.jsx          # Entry point aplikasi
.gitignore
eslint.config.js
index.html
package.json
README.md
vite.config.js
yarn.lock
```

---

## 📝 Catatan

- Dibuat untuk latihan React + Vita + Tailwind
- API disediakan oleh [The Movie Database (TMDB)](https://www.themoviedb.org/)

