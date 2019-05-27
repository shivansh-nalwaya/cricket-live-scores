const ItemsController = require("../controllers/ItemsController.js");

module.exports = function(app) {
  app.get("/items", ItemsController.get);
  app.get("/items/:id", ItemsController.show);
  app.post("/items", ItemsController.create);
  app.put("/items/:id", ItemsController.update);
  app.delete("/items/:id", ItemsController.delete);
};
