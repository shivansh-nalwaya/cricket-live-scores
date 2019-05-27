const ItemModel = require("./ItemModel");
const mongoose = require("mongoose");

module.exports = {
  ItemModel: mongoose.model("item", ItemModel)
};
