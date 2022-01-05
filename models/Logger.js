const mongoose = require("mongoose");

const LoggerSchema = new mongoose.Schema({
  msg: String,
});

module.exports = mongoose.model("Logger", LoggerSchema);
