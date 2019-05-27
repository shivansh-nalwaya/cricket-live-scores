const mongoose = require("mongoose");

const ItemModel = new mongoose.Schema({
  title: { type: String, required: true },
  created_at: { type: Date, default: new Date() }
});

module.exports = ItemModel;
