const fetch = require("isomorphic-fetch");
const { writeFile } = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "./downloads");

writeFile(filePath, data, (err) => {
  if (err) return console.error(err);
});

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
  });
