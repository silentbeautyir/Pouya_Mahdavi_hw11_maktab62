const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => res.send("Welcome!"));


router.get("/index1", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/index1.html"));
});
router.get("/index2", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/index2.html"));
});
router.get("/index3", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/index3.html"));
});
router.get("/index4", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/index4.html"));
});
router.get("/index5", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/index5.html"));
});

module.exports = router;
