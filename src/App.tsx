import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import { WeatherData } from "./api";
import "./App.css";

const App: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [showMore, setShowMore] = useState<boolean>(false);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);

  useEffect(() => {
    const savedHistory = localStorage.getItem("recentSearches");
    if (savedHistory) setSearchHistory(JSON.parse(savedHistory));
  }, []);

  const updateSearchHistory = (city: string) => {
    if (!searchHistory.includes(city)) {
      const updatedHistory = [city, ...searchHistory.slice(0, 4)];
      setSearchHistory(updatedHistory);
      localStorage.setItem("recentSearches", JSON.stringify(updatedHistory));
    }
  };

  const clearSearchHistory = () => {
    setSearchHistory([]);
    localStorage.removeItem("recentSearches");
  };

  return (
    <div className={`app-container ${darkMode ? "dark-mode" : ""}`}>
      <h1>{loading ? "⌛ Loading..." : "🌤 Weather App"}</h1>

      <button className="dark-mode-toggle" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

      <SearchBar setWeatherData={setWeatherData} setLoading={setLoading} updateSearchHistory={updateSearchHistory} />

      {loading ? <div className="spinner"></div> : weatherData && <WeatherCard data={weatherData} showMore={showMore} setShowMore={setShowMore} />}

      <div className="history-container">
        <h3>Recent Searches</h3>
        <div className="recent-searches">
          {searchHistory.length > 0 ? searchHistory.map((city, index) => (
            <button key={index} className="search-history-btn">{city}</button>
          )) : <p>No recent searches</p>}
        </div>
        {searchHistory.length > 0 && <button className="clear-history-btn" onClick={clearSearchHistory}>Clear Searches</button>}
      </div>
    </div>
  );
};

export default App;
