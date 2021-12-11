const express = require("express");
const app = express();
const pages = require("./routes/pages");
const path = require("path");
const port = 5000;

app.use("/pages", pages);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/err.html"));
});

app.listen(port);
console.log(`server on port ${port}`);
