const cardController = require("../controllers/card_controller.js");
module.exports = function(app) {
  app.get("/", cardController.rebuild_deck);
  app.get("/shuffleCard", cardController.shuffleCard);
  app.get("/dealCard", cardController.dealCard);
  app.get("/discardCard/:index", cardController.discardCard);
  app.get("/cutDeck/:index", cardController.cut_deck);
  app.get("/orderDeck", cardController.order_deck);
};
