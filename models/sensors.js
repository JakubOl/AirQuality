const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SensorSchema = mongoose.Schema(
  {
    temperature: { type: String },
    humidity: { type: String },
  },
  { timestamps: true }
);
SensorSchema.virtual("formated_date").get(function () {
  return this.createdAt.toLocaleString("en-GB");
});

module.exports = mongoose.model("sensors", SensorSchema);
