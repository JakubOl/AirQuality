const express = require("express");
const router = express.Router();
const sensorData = require("../models/sensors");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/dht11", async (req, res) => {
  const { temperature, humidity } = req.query;
  const data = new sensorData({ temperature, humidity });
  await data.save();
  console.log(data);
  res.json(data);
});

module.exports = router;
