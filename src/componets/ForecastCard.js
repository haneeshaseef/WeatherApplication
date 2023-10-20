import React from "react";

const ForecastCard = ({ forecast, formatDate }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md max-w-md text-center mx-auto my-4">
      <h3 className="text- font-bold mb-2">{formatDate(forecast.dt)}</h3>
      <p className="text-2xl font-bold mb-2">{`${((forecast.main.temp - 32) / 1.8).toFixed(1)}°C`}</p>
      <p className="text-lg mb-2">{forecast.weather[0].main}</p>
    </div>
  );
};

export default ForecastCard;
