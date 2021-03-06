const express = require("express");
const router = express.Router();
const sensorData = require("../models/sensors");

/* GET home page. */
router.get("/", async (req, res, next) => {
  try {
    const data = await sensorData.find({});
    res.render("index", { title: "Express", data });
  } catch (err) {
    res.redirect("/");
  }
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
  await sensorData.deleteMany({ temperature: "" });
  await sensorData.deleteMany({ humidity: "" });
  await sensorData.deleteMany({ o3: "" });
  const { temperature, humidity, o3 } = req.query;
  const data = new sensorData({ temperature, humidity, o3 });
  await data.save();
  res.json(data);
});

module.exports = router;
