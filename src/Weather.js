import React from "react";

function Weather({ data }) {
  const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  return (
    <div className="Weather mt-4">
      <h2 className="text-center">Weather in {data.name}</h2>
      <div className="text-center">
        <img src={iconUrl} alt={data.weather[0].description} />
      </div>
      <p className="text-center">Temperature: {data.main.temp} °C</p>
      <p className="text-center">Weather: {data.weather[0].description}</p>
    </div>
  );
}

export default Weather;
