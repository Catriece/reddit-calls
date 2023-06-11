const path = require("path");
const { writeFile, readFile } = require("fs");

const chirps = [
  {
    user: "Catriece Gilbert",
    content: "Hello",
  },
  {
    user: "Joseph Gilbert",
    content: "Hey there",
  },
  {
    user: "Steve Jobs",
    content: "Howsit going",
  },
  {
    user: "Chris Lamb",
    content: "Hola friend",
  },
  {
    user: "Chelsea Woods",
    content: "Hey girl",
  },
];

const filePath = path.join(__dirname, "chirps.json");

writeFile(filePath, JSON.stringify(chirps), (err) => {
  if (err) {
    return console.error(err);
  } else {
    console.log("Chirps chirpped");
  }
});

readFile("chirps.json", (err) => {
  if (err) {
    console.error(err);
  } else {
    for (let i = 0; i < chirps.length; i++) {
      console.log(chirps[i]);
    }
  }
});
