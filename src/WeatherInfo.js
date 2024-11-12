import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <main>
      <div className="weather-app-data">
        <div>
          <h1 className="jersey-10-regular weather-app-city">
            {props.data.city}
          </h1>
          <p className="weather-app-details">
            <span>
              {" "}
              <FormattedDate date={props.data.date} />
            </span>{" "}
            <span>{props.data.description}</span>
            <br />
            Humidity: <strong> {props.data.humidity}%</strong>, Wind:
            <strong>{props.data.wind} km/h</strong>
          </p>
        </div>
        <div className="weather-app-temperature-container">
          <div>
            <img src={props.data.iconUrl} alt={props.data.description} />
          </div>
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
      </div>
    </main>
  );
}
