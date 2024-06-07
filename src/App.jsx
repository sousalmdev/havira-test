import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from "./components/heroSec";
import HomePage from "./components/homePage";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <Router basename=''>
      <div className="bg-default min-h-screen text-white" style={{ fontFamily: 'Clash Grotesk' }}>
        {loading ? (
          <LoadingScreen />
        ) : (
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/home" element={<HomePage />} />
          </Routes>
        )}

      </div>
    </Router>
  );
}

export default App;
