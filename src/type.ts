export interface WeatherData {
  city: string;
  country: string;
  temperature: number;
  description: string;
  icon: string;
  forecast: { day: string; temp: number; icon: string }[];
}
