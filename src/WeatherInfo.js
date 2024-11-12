import React from "react";
import FormattedDate from "./FormattedDate";

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
          <div className="weather-app-temperature jersey-10-regular">
            {Math.round(props.data.temperature)}
          </div>
          <div className="weather-app-unit jersey-10-regular">°C</div>
        </div>
      </div>

      <div className="weather-forecast"></div>
    </main>
  );
}
