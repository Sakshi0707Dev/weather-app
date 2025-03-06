import React from "react";

interface ForecastProps {
  forecast: { day: string; temp: number; icon: string }[];
}

const Forecast: React.FC<ForecastProps> = ({ forecast }) => {
  return (
    <div className="forecast-container">
      <h3>3-Day Forecast</h3>
      <div className="forecast">
        {forecast.map((item, index) => (
          <div key={index} className="forecast-item">
            <p>{item.day}</p>
            <img src={`https://openweathermap.org/img/wn/${item.icon}.png`} alt="Weather icon" />
            <p>{item.temp}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
