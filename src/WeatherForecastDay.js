import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div>
      <div className="weather-forecast-date ">{day()}</div>
      <img
        className="weather-forecast-icon"
        src={props.data.condition.icon_url}
        alt="weather icon"
      ></img>

      <div className="weather-forecast-temperature">
        <span className="weather-forecast-temperature-max">
          <strong>{maxTemperature()}</strong>
        </span>{" "}
        <span className="weather-forecast-temperature-min">
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}
