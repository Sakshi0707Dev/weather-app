export type WeatherData = {
  city: string;
  temperature: number;
  feelsLike: number;
  description: string;
  humidity: number;
  windSpeed: number;
  windDirection: number;
  localTime: string;
  isDayTime: boolean;
  forecast?: {
    date: string;
    temp: number;
    condition: string; // ✅ Fix: Use `condition` instead of `description`
  }[];
};
