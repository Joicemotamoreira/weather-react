import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [weatherData, setWeatherdata] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherdata({
      ready: true,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      city: response.data.city,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      iconUrl: response.data.condition.icon_url,
      date: "Friday",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="wrapper">
          <header>
            <form className="search-form">
              <input
                type="search"
                placeholder="Enter a city.."
                required
                className="search-form-input"
              />
              <input
                type="submit"
                value="Search"
                className="search-form-button"
              />
            </form>
          </header>

          <main>
            <div className="weather-app-data">
              <div>
                <h1 className="jersey-10-regular weather-app-city">
                  {weatherData.city}
                </h1>
                <p className="weather-app-details">
                  <span>{weatherData.date}</span>,{" "}
                  <span>{weatherData.description}</span>
                  <br />
                  Humidity: <strong> {weatherData.humidity}%</strong>, Wind:
                  <strong>{weatherData.wind} km/h</strong>
                </p>
              </div>
              <div className="weather-app-temperature-container">
                <div>
                  <img
                    src={weatherData.iconUrl}
                    alt={weatherData.description}
                  />
                </div>
                <div className="weather-app-temperature jersey-10-regular">
                  {Math.round(weatherData.temperature)}
                </div>
                <div className="weather-app-unit jersey-10-regular">°C</div>
              </div>
            </div>

            <div className="weather-forecast"></div>
          </main>

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
    const apiKey = "b5f48bboa0a3000997064tb1d30c4a9f";
    let city = "Dublin";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
