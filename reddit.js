const fetch = require("isomorphic-fetch");
const { writeFile } = require("fs");
const path = require("path");

const articles = [];
const filePath = path.join(__dirname, "popular-articles.json");

fetch("https://reddit.com/r/programmingHumor.json")
  .then((res) => res.json())
  .then((article) => {
    console.log(article);
    articles.push(article);
  });

writeFile(filePath, articles, (err) => {
  if (err) return console.log(err);
  else console.log("Articles added");
});
