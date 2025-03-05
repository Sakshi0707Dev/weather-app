import React from "react";

type WeatherCardProps = {
  data: {
    city: string;
    temperature: number;
    feelsLike: number;
    description: string;
    humidity: number;
    windSpeed: number;
    windDirection: number;
    localTime: string;
    isDayTime: boolean;
    forecast?: { date: string; temp: number; condition: string }[];
  };
  showMore: boolean;
  setShowMore: React.Dispatch<React.SetStateAction<boolean>>;
};

const WeatherCard: React.FC<WeatherCardProps> = ({ data, showMore, setShowMore }) => {
  return (
    <div className="weather-card">
      <h2>{data.city}</h2>
      <p className="weather-icon">{data.isDayTime ? "☀️" : "🌙"}</p>
      <p>🕒 Local Time: {data.localTime}</p>
      <p>🌡 Temperature: {data.temperature}°C</p>
      <p>🌡 Feels Like: {data.feelsLike}°C</p>
      <p>💧 Humidity: {data.humidity}%</p>
      <p>🌬 Wind Speed: {data.windSpeed} km/h</p>
      <p>🧭 Wind Direction: {data.windDirection}°</p>

      {/* ✅ Show Forecast */}
      <h3>📅 5-Day Forecast</h3>
      <div className="forecast-container">
        {data.forecast?.slice(0, showMore ? data.forecast.length : 1).map((day, index) => (
          <div key={index} className="forecast">
            <p>{day.date}: {day.temp}°C - {day.condition}</p>
          </div>
        ))}
      </div>

      {/* ✅ Show More / Show Less Button */}
      <button className="show-more-btn" onClick={() => setShowMore(!showMore)}>
        {showMore ? "Show Less ⬆" : "Show More ⬇"}
      </button>
    </div>
  );
};

export default WeatherCard;
