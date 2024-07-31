import React, { useState } from "react";
import axios from "axios";
import Weather from "./Weather";
import "./App.css";

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
    <div className="App">
      <h1>Weather App</h1>
      <input type="text" value={city} onChange={handleInputChange} placeholder="Enter city" />
      <button onClick={handleSearch}>Search</button>
      {weatherData && <Weather data={weatherData} />}
    </div>
  );
}

export default App;
