import React, { useState } from "react";

interface SearchBarProps {
  setWeatherData: (data: any) => void;
  setLoading: (loading: boolean) => void;
  updateSearchHistory: (city: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ setWeatherData, setLoading, updateSearchHistory }) => {
  const [city, setCity] = useState("");

  const fetchWeather = async () => {
    if (!city.trim()) return; // Prevent empty searches

    setLoading(true);
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=473db6c6392f454fa31112302250303&q=${city}&days=5`
      );
      const data = await response.json();
      setWeatherData({
        city: data.location.name,
        temperature: data.current.temp_c,
        feelsLike: data.current.feelslike_c,
        description: data.current.condition.text,
        humidity: data.current.humidity,
        windSpeed: data.current.wind_kph,
        windDirection: data.current.wind_degree,
        localTime: data.location.localtime,
        isDayTime: data.current.is_day === 1,
        forecast: data.forecast.forecastday.map((day: any) => ({
          date: day.date,
          temp: day.day.avgtemp_c,
          description: day.day.condition.text,
        })),
      });

      updateSearchHistory(city); // ✅ Now `updateSearchHistory` is used correctly
    } catch (error) {
      console.error("Error fetching weather:", error);
    }
    setLoading(false);
  };

  // ✅ Press "Enter" to fetch weather
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      fetchWeather();
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={handleKeyPress} // ✅ Handle Enter key
        placeholder="Enter city name"
        className="search-input"
      />
      <button onClick={fetchWeather} className="search-button">
        Get Weather
      </button>
    </div>
  );
};

export default SearchBar;
