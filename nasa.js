const axios = require("axios");

axios.get("https://openlibrary.org/search.json?q=harry+potter")
  .then(response => {
    const book = response.data.docs[0];
    console.log("Titre :", book.title);
    console.log("Auteur :", book.author_name[0]);
    console.log("Année :", book.first_publish_year);
  })
  .catch(error => {
    console.error("Erreur :", error.message);
  });
