import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Dublin",
    temperature: 16,
    date: "Friday, 12:20",
    description: " overcast clouds",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
    humidity: 80,
    wind: 10,
  };
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
                <span>{weatherData.date}</span>,
                <span>{weatherData.description}</span>
                <br />
                Humidity: <strong>{weatherData.humidity}</strong>, Wind:
                <strong>{weatherData.wind}</strong>
              </p>
            </div>
            <div className="weather-app-temperature-container">
              <div>
                <img src={weatherData.imgUrl} alt={weatherData.description} />
              </div>
              <div className="weather-app-temperature jersey-10-regular">
                {weatherData.temperature}
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
}
