import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherdata] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherdata({
      ready: true,
      coordinates: response.data.coordinates,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      city: response.data.city,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      iconUrl: response.data.condition.icon_url,
      date: new Date(response.data.time * 1000),
    });
  }

  function search() {
    const apiKey = "b5f48bboa0a3000997064tb1d30c4a9f";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="wrapper">
          <header>
            <form className="search-form" onSubmit={handleSubmit}>
              <input
                type="search"
                placeholder="Enter a city.."
                required
                className="search-form-input"
                autoFocus="on"
                onChange={handleCityChange}
              />
              <input
                type="submit"
                value="Search"
                className="search-form-button"
              />
            </form>
          </header>

          <WeatherInfo data={weatherData} />
          <WeatherForecast coordinates={weatherData.coordinates} />

          <footer>
            This project was coded by{" "}
            <a
              href="https://www.linkedin.com/in/joicemotamoreira/"
              target="_blank"
              rel="noreferrer"
            >
              Joice Mota
            </a>{" "}
            and is on{" "}
            <a
              href="https://github.com/Joicemotamoreira/weather-react"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>{" "}
            and is{" "}
            <a
              href="https://weather-react-app-byjoice.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              hosted on Netlify
            </a>
            .
          </footer>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
