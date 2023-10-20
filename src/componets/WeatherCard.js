import React from "react";

const WeatherCard = ({ weather, formatDate }) => {
  if (weather) {
    return (
      <div className="bg-white p-12 rounded-lg shadow-md max-w-3xl text-center mx-auto my-4 ">
        <div className="flex flex-inline mb-4 gap-32">
        <h2 className="text-3xl font-bold mb-3">{weather.name}</h2>
        <p className="text-4xl font-bold">{`${((weather.main.temp - 32) / 1.8).toFixed(1)}°C`}</p> 
        </div>
        <p className="text-xl text-start mb-3">{formatDate(weather.dt)}</p>
        <div className="flex gap-8 mt-2 mb-2">
          <p className="text-xl">{weather.weather[0].main}</p>
          <p className="text-lg">
            Feels like {`${((weather.main.feels_like - 32) / 1.8).toFixed(1)}°C`}
          </p>
          <p className="text-lg mb-2">Humidity {weather.main.humidity} %</p>
          <p className="text-lg mb-2">Wind {weather.wind.speed} m/s</p>
        </div>
      </div>
    );
  } else {
    return <p>Loading...</p>;
  }
};

export default WeatherCard;
