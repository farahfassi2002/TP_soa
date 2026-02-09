
const API_KEY = "1aa3b3a2a30479c44d2b14e77bed9a07";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

function getWeatherData(city, callback) {
  const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric&lang=fr`;

  fetch(url) 
    .then(res => res.json())
    .then(data => callback(null, data))
    .catch(err => callback(err, null));
}

getWeatherData("Sousse", (error, data) => {
  if (error) {
    console.error("Erreur :", error);
  } else {
    console.log("Description :", data.weather[0].description);
    console.log("Température :", data.main.temp, "°C");
    console.log("Humidité :", data.main.humidity, "%");
  }
});
