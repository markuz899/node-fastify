const mongoose = require("mongoose");

const LoggerSchema = new mongoose.Schema({
  msg: String,
  created_at: Date,
});

module.exports = mongoose.model("Logger", LoggerSchema);
