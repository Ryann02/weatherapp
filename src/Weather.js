import React from "react";

function Weather({ data }) {
  return (
    <div className="Weather">
      <h2>Weather in {data.name}</h2>
      <p>Temperature: {data.main.temp} °C</p>
      <p>Weather: {data.weather[0].description}</p>
    </div>
  );
}

export default Weather;
