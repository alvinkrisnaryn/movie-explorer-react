import { useState } from "react";
import Navbar from "./components/Navbar"
import AppRouter from "./router/AppRouter";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <div>
        <Navbar onSearch={setSearchTerm} />
        <main className="pt-20">
          <AppRouter searchTerm={searchTerm} />
        </main>
      </div>
    </>
  );
}

export default App;
