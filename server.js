const path = require("node:path");
const express = require("express");

const PORT = 3000;

const app = express();

app.get("/secret", (req, res) => {
  return res.send("Your secret number is 18");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
