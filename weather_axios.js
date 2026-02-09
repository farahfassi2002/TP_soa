const axios = require("axios");

const API_KEY = "1aa3b3a2a30479c44d2b14e77bed9a07";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

function getWeatherData(city) {
  const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric&lang=fr`;

  axios.get(url)
    .then(response => {
      const data = response.data;
      console.log("Description :", data.weather[0].description);
      console.log("Température :", data.main.temp, "°C");
      console.log("Humidité :", data.main.humidity, "%");
    })
    .catch(error => {
      console.error("Erreur :", error.message);
    });
}

getWeatherData("Sousse");
