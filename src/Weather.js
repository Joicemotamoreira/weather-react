import React from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.city} is ${response.data.temperature.current} ºC.`
    );
  }
  let apiKey = "b5f48bboa0a3000997064tb1d30c4a9f";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=${apiKey}`;

  axios.get(apiUrl).then(handleResponse);

  return <ThreeDots height="50" width="50" color="orange" />;
}
