const express = require("express");
const router = express.Router();
const sensorData = require("../models/sensors");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/clearDB", async (req, res) => {
  try {
    await sensorData.deleteMany({});
    res.status(200).redirect("/");
  } catch (err) {
    res.redirect("/");
  }
});

router.get("/dht11", async (req, res) => {
  const { temperature, humidity, o3 } = req.query;
  const data = new sensorData({ temperature, humidity, o3 });
  await data.save();
  res.json(data);
});

module.exports = router;
