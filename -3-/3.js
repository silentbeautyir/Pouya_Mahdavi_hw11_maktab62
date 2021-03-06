const express = require("express");
const userRouter = require("./routes/user");

const app = express();
const port = 1000;

app.get("/", (req, res) => {
  res.send("Hello World.");
});

app.use("/users", userRouter);

app.use((req, res) => {
  res.status(404).send("404, Not Found.");
});

app.listen(port);
console.log(`Server is running on http//localhost:${port}`);
