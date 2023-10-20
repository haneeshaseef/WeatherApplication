import React, { useState } from "react";

const SearchForm = ({ setCity,fetchWeather}) => {
  const [newCity, setNewCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(newCity);
    fetchWeather()
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
          <div className="w-full md:w-64">
            <label htmlFor="city" className="sr-only">Enter city name</label>
            <input
              id="city"
              type="text"
              placeholder="Enter city name"
              className="w-full px-5 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              value={newCity}
              onChange={(e) => setNewCity(e.target.value)}
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-blue-500 focus:ring-offset-2"
            >
              Search weather
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
