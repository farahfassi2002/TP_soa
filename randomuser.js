const axios = require("axios");

axios.get("https://randomuser.me/api/")
  .then(response => {
    const user = response.data.results[0];
    console.log("Nom :", user.name.first, user.name.last);
    console.log("Email :", user.email);
    console.log("Pays :", user.location.country);
  })
  .catch(error => {
    console.error("Erreur :", error.message);
  });
