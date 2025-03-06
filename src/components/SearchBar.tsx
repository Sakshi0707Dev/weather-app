import React, { useState } from "react";
import { fetchWeather } from "../api";

interface SearchBarProps {
  setWeatherData: (data: any) => void;
  setLoading: (loading: boolean) => void;
  updateSearchHistory: (city: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ setWeatherData, setLoading, updateSearchHistory }) => {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!city.trim()) {
      setError("Please enter a city name");
      return;
    }

    setLoading(true);
    setError("");
    await fetchWeather(city, setWeatherData, setError);
    updateSearchHistory(city);
    setLoading(false);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Enter city name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>🔍 Search</button>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default SearchBar;
