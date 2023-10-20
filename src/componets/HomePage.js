import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherCard from "./WeatherCard";
import ForecastCard from "./ForecastCard";
import SearchForm from "./SearchForm";

const apiKey = "dead781318588baa42f9d3e388a95ed3";

const HomePage = () => {
  const [city, setCity] = useState("Colombo");
  const [weather, setWeather] = useState();
  const [forecast, setForecast] = useState();
  const [showForecast, setShowForecast] = useState(false);

  // Fetch the current weather data for the city
  const fetchWeather = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      )
      .then((res) => setWeather(res.data))
      .catch((error) => console.log(error.message));
  };

  // Fetch the forecast data for the city
  const fetchForecast = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`
      )
      .then((res) => setForecast(res.data))
      .catch((error) => console.log(error.message));
  };

  // Fetch the weather and forecast data when the city changes
  useEffect(() => {
    fetchWeather();
    fetchForecast();
  }, [city]);

  // Format the date and time from the unix timestamp
  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    });
  };

  // Toggle the showForecast state
  const handleShowForecast = () => {
    setShowForecast(!showForecast);
  };

  return (
    <div className="app flex flex-col items-center bg-gradient-to-r from-gray-200 to-gray-500 min-h-screen">
      <div className="flex  items-start gap-3">
        <h1 className="py-4 text-3xl mt-3">Weather App</h1>
        <div className="py-5 sm:flex-col ">
          <SearchForm
            city={city}
            setCity={setCity}
            fetchWeather={fetchWeather}
          />
        </div>
      </div>
      <WeatherCard weather={weather} formatDate={formatDate} />
      <div className="forecast mt-10 grid grid-cols-3 gap-6">
        {forecast &&
          forecast.list
            .filter((item) => item.dt_txt.includes("12:00:00"))
            .slice(1, 4)
            .map((item) => (
              <ForecastCard
                key={item.dt}
                forecast={item}
                formatDate={formatDate}
              />
            ))}
      </div>
      {showForecast && (
        <div className="full-forecast mt-10 grid grid-cols-3 gap-6">
          {forecast &&
            forecast.list
              .filter((item) => item.dt_txt.includes("12:00:00"))
              .map((item) => (
                <ForecastCard
                  key={item.dt}
                  forecast={item}
                  formatDate={formatDate}
                />
              ))}
        </div>
      )}
      <button
        onClick={handleShowForecast}
        className="mt-8 px-4 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-blue-500 focus:ring-offset-2"
      >
        {showForecast ? "View less" : "View more"}
      </button>
    </div>
  );
};

export default HomePage;
