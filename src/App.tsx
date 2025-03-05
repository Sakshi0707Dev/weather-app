import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import { WeatherData } from "./type";
import "./App.css";

const App: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [showMore, setShowMore] = useState<boolean>(false);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);

  // ✅ Load search history from localStorage
  useEffect(() => {
    const savedHistory = localStorage.getItem("recentSearches");
    if (savedHistory) {
      setSearchHistory(JSON.parse(savedHistory));
    }
  }, []);

  // ✅ Function to update search history
  const updateSearchHistory = (city: string) => {
    if (!searchHistory.includes(city)) {
      const updatedHistory = [city, ...searchHistory.slice(0, 4)];
      setSearchHistory(updatedHistory);
      localStorage.setItem("recentSearches", JSON.stringify(updatedHistory));
    }
  };

  // ✅ Clear Search History
  const clearSearchHistory = () => {
    setSearchHistory([]);
    localStorage.removeItem("recentSearches");
  };

  return (
    <div className={`app-container ${darkMode ? "dark-mode" : ""}`}>
      <h1 className="app-title">
        {loading
          ? "⌛ Loading..."
          : !weatherData
          ? "🌤 Weather App"
          : weatherData.isDayTime
          ? "☀️ Weather App"
          : "🌙 Weather App"}
      </h1>

      {/* ✅ Dark Mode Toggle */}
      <button className="dark-mode-toggle" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

      {/* ✅ Now passing `updateSearchHistory` to `SearchBar` */}
      <SearchBar setWeatherData={setWeatherData} setLoading={setLoading} updateSearchHistory={updateSearchHistory} />

      {loading ? (
        <div className="spinner"></div>
      ) : (
        weatherData && <WeatherCard data={weatherData} showMore={showMore} setShowMore={setShowMore} />
      )}

      {/* 📍 Recent Searches Section */}
      <div className="history-container">
        <h3>Recent Searches</h3>
        <div className="recent-searches">
          {searchHistory.length > 0 ? (
            searchHistory.map((city, index) => (
              <button key={index} className="search-history-btn">
                {city}
              </button>
            ))
          ) : (
            <p>No recent searches</p>
          )}
        </div>

        {/* ✅ Clear Search Button */}
        {searchHistory.length > 0 && (
          <button className="clear-history-btn" onClick={clearSearchHistory}>
            Clear Searches
          </button>
        )}
      </div>
    </div>
  );
};

export default App;
