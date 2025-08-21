import { useState } from "react";
import Navbar from "../src/components/layout/Navbar";
import AppRouter from "./router/AppRouter";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <div>
        <Navbar onSearch={setSearchTerm} />
        <main>
          <AppRouter searchTerm={searchTerm} />
        </main>
      </div>
    </>
  );
}

export default App;
