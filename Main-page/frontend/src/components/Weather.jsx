import { useEffect, useState } from "react";

const Weather = ({ city }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
        );
        const data = await res.json();
        setWeather(data);
      } catch (err) {
        console.error("Weather error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city, API_KEY]);

  if (loading) return <p>Loading weather...</p>;
  if (!weather || weather.cod !== 200) return <p>Weather unavailable</p>;

  return (
    <div className="weather-box">
      <div>
        <strong>{weather.name}</strong>
        <p>{weather.weather[0].description}</p>
      </div>

      <div className="weather-temp">
        {Math.round(weather.main.temp)}°C
      </div>
    </div>
  );
};

export default Weather;
