const express = require("express");

const app = express();
const port = 4000;

app.get("/hello", (req, res) => {
  res.send("Hello World");
});

app.use((req, res) => {
  res.status(404).send("page not founded");
});

app.listen(port);
console.log(`Server is running on http://localhost:${port}/hello`);
