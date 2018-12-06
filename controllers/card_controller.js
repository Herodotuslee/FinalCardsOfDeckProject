const Deck = require("../services/deck.js");

deck = new Deck();
module.exports = {
  rebuild_deck: function(req, res) {
    deck.rebuild_deck();
    res.json(deck.display_allCards());
  },
  shuffleCard: (req, res) => {
    deck.shuffleCard();
    res.json(deck.display_allCards());
  },
  dealCard: (req, res) => {
    deck.dealCard();
    res.json(deck.display_allCards());
  },
  discardCard: (req, res) => {
    deck.discardCard(req.params.index);
    res.json(deck.display_allCards());
  },
  cut_deck: (req, res) => {
    deck.cut_deck(req.params.index);
    res.json(deck.display_allCards());
  },
  order_deck: (req, res) => {
    deck.order_deck();
    res.json(deck.display_allCards());
  }
};
