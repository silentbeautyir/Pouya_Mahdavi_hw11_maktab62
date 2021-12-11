const express = require("express");
const path = require("path");

const app = express();
const port = 5000;

app.use(express.static(path.join(__dirname, "public")));

app.use((req, res) => {
  res.status(404).send("page not founded");
});

app.listen(port);
console.log(`Server is running on http//localhost:${port}`);
