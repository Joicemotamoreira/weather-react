import React, { useState, useEffect, useLayoutEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="weather-forecast">
        <div className="row">
          <WeatherForecastDay data={forecast[0]} />
        </div>
        <div className="row">
          <WeatherForecastDay data={forecast[1]} />
        </div>
        <div className="row">
          <WeatherForecastDay data={forecast[2]} />
        </div>
        <div className="row">
          <WeatherForecastDay data={forecast[3]} />
        </div>
        <div className="row">
          <WeatherForecastDay data={forecast[4]} />
        </div>
      </div>
    );
  } else {
    let apiKey = "b5f48bboa0a3000997064tb1d30c4a9f";
    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
