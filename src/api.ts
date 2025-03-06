export interface WeatherData {
  city: string;
  temperature: number;
  feelsLike: number;
  description: string;
  humidity: number;
  windSpeed: number;
  windDirection: number;
  sunrise: string;
  sunset: string;
  icon: string;
}

const API_KEY = "473db6c6392f454fa31112302250303";  // Ensure to keep it secure
const BASE_URL = "https://api.weatherapi.com/v1/forecast.json";

export const fetchWeather = async (
  city: string,
  setWeather: (data: WeatherData | null) => void,
  setError: (error: string) => void
) => {
  try {
    const response = await fetch(`${BASE_URL}?key=${API_KEY}&q=${city}&days=1&aqi=no&alerts=no`);
    if (!response.ok) throw new Error("Network response was not ok");

    const data = await response.json();
    if (!data || !data.location) {
      setError("City not found");
      setWeather(null);
      return;
    }

    const weatherData: WeatherData = {
      city: data.location.name,
      temperature: data.current.temp_c,
      feelsLike: data.current.feelslike_c,
      description: data.current.condition.text,
      humidity: data.current.humidity,
      windSpeed: data.current.wind_kph,
      windDirection: data.current.wind_degree,
      sunrise: data.forecast.forecastday[0].astro.sunrise,
      sunset: data.forecast.forecastday[0].astro.sunset,
      icon: `https:${data.current.condition.icon}`,
    };

    setWeather(weatherData);
    setError("");
  } catch (error) {
    setError(error instanceof Error ? error.message : "Failed to fetch weather data.");
    setWeather(null);
  }
};
