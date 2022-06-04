const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SensorSchema = mongoose.Schema(
  {
    temperature: { type: Number, required: true },
    humidity: { type: Number, required: true },
  },
  { timestamps: true }
);
SensorSchema.virtual("formated_date").get(function () {
  return this.createdAt.toLocaleString("en-GB");
});

module.exports = mongoose.model("sensors", SensorSchema);
