const Item = require("../models").ItemModel;

module.exports = {
  all: () => {
    return Item.find();
  },

  find: id => {
    return Item.find({ _id: id });
  },

  create: data => {
    var item = new Item(data);
    return item.save();
  },

  update: (id, data) => {
    return Item.findOneAndUpdate(
      { _id: id },
      {
        $set: { ...data }
      }
    );
  },

  delete: id => {
    return Item.deleteOne({ _id: id });
  }
};
