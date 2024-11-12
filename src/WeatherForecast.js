import React from "react";

export default function WeatherForecast() {
  return (
    <div className="weather-forecast">
      <div className="row">
        <div className="weather-forecast-date ">Tue</div>
        <img
          className="weather-forecast-icon"
          src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
        ></img>

        <div className="weather-forecast-temperature">
          <span className="weather-forecast-temperature-max">
            <strong>11º</strong>
          </span>
          <span className="weather-forecast-temperature-min">6º</span>
        </div>
      </div>
    </div>
  );
}
