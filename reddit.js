const fetch = require("isomorphic-fetch");
const { writeFile } = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "popular-articles.json");

fetch("https://reddit.com/r/programmingHumor.json")
  .then((res) => res.json())
  .then(({ data: { children } }) => {
    console.log(children);
    const articles = [];

    for (let article of children) {
      articles.push({
        url: article.data.url,
        title: article.data.title,
        author: article.data.author,
      });
    }

    writeFile(filePath, JSON.stringify(articles), (err) => {
      if (err) return console.log(err);
      else console.log("Articles added");
    });
  })
  .catch((err) => console.error(err));
