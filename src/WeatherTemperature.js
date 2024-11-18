import React, { useState } from "react";

export default function WeatherTemperature(props) {
  return (
    <div className="weather-app-temperature-container">
      <div className="weather-app-temperature jersey-10-regular">
        {Math.round(props.celsius)}
      </div>
      <div className="weather-app-unit jersey-10-regular">°C</div>
    </div>
  );
}
