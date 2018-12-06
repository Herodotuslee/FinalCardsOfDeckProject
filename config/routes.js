const template = require("../controllers/template.js");
module.exports = function(app) {
  app.get("/", template.rebuild_deck);
  app.get("/shuffleCard", template.shuffleCard);
  app.get("/dealCard", template.dealCard);
  app.get("/discardCard/:index", template.discardCard);
  app.get("/cutDeck/:index", template.cut_deck);
  app.get("/orderDeck", template.order_deck);
};
