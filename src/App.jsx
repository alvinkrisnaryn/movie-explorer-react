import { useState, useEffect } from "react";
import AppRouter from "./router/AppRouter";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center z-[9999] justify-center h-screen bg-black/98">
        <div className="flex flex-col items-center">
          <img
            src="/favicon-netflix.png"
            alt="Netflix Logo"
            className="w-24 h-24 animate-pulse animation: scalePulse 2s infinite"
          />
        </div>
      </div>
    );
  }

  return (
    <div>
      <main>
        <AppRouter searchTerm={searchTerm} onSearch={setSearchTerm} />
      </main>
    </div>
  );
}

export default App;
