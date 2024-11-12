import React from "react";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "b5f48bboa0a3000997064tb1d30c4a9f";
  let longitude = props.coordinates.longitude;
  let latitude = props.coordinates.latitude;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}`;

  axios.get(apiUrl).then(handleResponse);

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
