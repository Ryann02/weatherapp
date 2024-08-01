import React, { useState } from "react";
import axios from "axios";
import Weather from "./Weather";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const API_KEY = "a08575a1805e3e3299c68b680e6a0160"; // Ganti dengan API key Anda

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = () => {
    if (!city) {
      alert("Please enter a city");
      return;
    }

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      )
      .then((response) => {
        console.log("API response:", response.data);
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching the weather data", error);
        alert("Error fetching the weather data");
      });
  };

  return (
    <div className="App d-flex justify-content-center align-items-center vh-100">
      <div className="weather-container p-5 rounded shadow-lg  text-black">
        <h1 className="text-center mb-4">Weather App</h1>
        <div className="form-group">
          <input
            type="text"
            value={city}
            onChange={handleInputChange}
            placeholder="Enter city"
            className="form-control mb-3"
          />
          <button onClick={handleSearch} className="btn btn-dark w-100">
            Search
          </button>
        </div>
        {weatherData && <Weather data={weatherData} />}
      </div>
    </div>
  );
}

export default App;
