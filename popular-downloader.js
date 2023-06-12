const fetch = require("isomorphic-fetch");
const { writeFile } = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "./downloads");

fetch("https://reddit.com/r/programmingHumor.json")
  .then((res) => res.json())
  .then(({ data: { children } }) => {
    console.log("children", children);

    for (let media of children) {
      if (
        media.data.url.endsWith(".jpg") ||
        media.data.url.endsWith(".png") ||
        media.data.url.endsWith(".gif")
      ) {
        writeFile(filePath, JSON.stringify(media), (err) => {
          if (err) return console.error(err);
          else console.log("New File Added to Downloads");
        });
      }
    }
  })
  .catch((err) => console.error(err));
