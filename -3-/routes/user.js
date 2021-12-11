// modules
const express = require("express");

const router = express.Router();

router.get("/", function (req, res) {
  res.send("users");
});
router.get("/create", function (req, res) {
  res.send("user created successfully.");
  console.log("created successfully");
});
router.get("/update", function (req, res) {
  res.send("user updated successfully.");
  console.log("updated successfully");
});
router.get("/delete", function (req, res) {
  res.send("user deleted successfully.");
  console.log("deleted successfully");
});

module.exports = router;
