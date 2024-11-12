import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="weather-app-temperature-container">
        <div className="weather-app-temperature jersey-10-regular">
          {Math.round(props.celsius)}
        </div>
        <div className="weather-app-unit jersey-10-regular">
          °C |{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>{" "}
        </div>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="weather-app-temperature-container">
        <div className="weather-app-temperature jersey-10-regular">
          {Math.round(fahrenheit)}
        </div>
        <div className="weather-app-unit jersey-10-regular">
          <a href="/" onClick={showCelsius}>
            °C
          </a>{" "}
          | °F
        </div>
      </div>
    );
  }
}
