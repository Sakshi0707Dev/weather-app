import React from "react";
import { WeatherData } from "../api";

interface WeatherCardProps {
  data: WeatherData;
  showMore: boolean;
  setShowMore: (show: boolean) => void;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ data, showMore, setShowMore }) => {
  return (
    <div className="weather-card">
      <h2>{data.city}</h2>
      <img src={data.icon} alt={data.description} />
      <p>{data.description}</p>
      <p>🌡 Temperature: {data.temperature}°C</p>
      <p>🌬 Wind: {data.windSpeed} km/h</p>
      <button onClick={() => setShowMore(!showMore)}>
        {showMore ? "Show Less" : "Show More"}
      </button>

      {showMore && (
        <div className="extra-info">
          <p>🌅 Sunrise: {data.sunrise}</p>
          <p>🌇 Sunset: {data.sunset}</p>
          <p>💧 Humidity: {data.humidity}%</p>
        </div>
      )}
    </div>
  );
};

export default WeatherCard;
