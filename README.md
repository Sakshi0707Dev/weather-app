# Weather App

A simple weather application built with **React + TypeScript**, using the **WeatherAPI** to fetch real-time weather data.

## Features
- Search for any city and get current weather details.
- Displays temperature, humidity, wind speed, sunrise & sunset time.
- Fetches and displays weather icons dynamically.

## Tech Stack
- **React + TypeScript**
- **Vite**
- **WeatherAPI**

## Project Structure
- `src/components/` → UI components like `SearchBar.tsx`, `WeatherCard.tsx`, etc.
- `src/api.ts` → Handles API calls for fetching weather data.
- `src/type.ts` → Defines TypeScript interfaces for structured data.
- `public/` → Contains `index.html` and other public assets.

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/weather-app.git
   ```
2. Navigate into the project folder:
   ```sh
   cd weather-app
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Create a `.env` file and add your WeatherAPI key:
   ```sh
   VITE_API_KEY=your_api_key_here
   ```
5. Start the development server:
   ```sh
   npm run dev
   ```

## Deployment
This project is deployed on **Vercel**. Live demo:
[Weather App Live](https://weather-app-h2mc.vercel.app/)

## Contributing
Feel free to fork this project, make changes, and submit a pull request!

---
Made  by Sakshi

