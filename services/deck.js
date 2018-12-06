module.exports = class Deck {
  constructor() {
    this.deck = [];
    this.dealt_cards = [];
    this.discarded_cards = [];
  }

  rebuild_deck() {
    this.deck = [];
    this.dealt_cards = [];
    this.discarded_cards = [];

    const faces = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "Jack",
      "Queen",
      "King",
      "Ace"
    ];
    const suits = ["Spades", "Hearts", "Clubs", "Diamonds"];

    for (let s = 0; s < suits.length; s++) {
      for (let f = 0; f < faces.length; f++) {
        this.deck.push(`${suits[s]} of ${[faces[f]]}`);
      }
    }
    console.log("Rebuid the deck");
  }

  shuffleCard() {
    let temp_val;
    let random_index;
    if (!this.deck.length) {
      console.log("Please generate the deck first");
    } else {
      for (let i = 0; i < this.deck.length; i++) {
        random_index = Math.floor(Math.random() * this.deck.length);
        temp_val = this.deck[i];
        this.deck[i] = this.deck[random_index];
        this.deck[random_index] = temp_val;
      }
      console.log("Shuffled the deck");
    }
  }

  dealCard() {
    if (this.deck.length === 0) {
      console.log("Run out of Cards in the Deck");
    } else {
      let dealt_card = this.deck.shift();
      this.dealt_cards.push(dealt_card);
      console.log("dealtCard", dealt_card);
    }
  }

  discardCard(index) {
    if (this.dealt_cards.length === 0) {
      console.log("Run out of the cards in the dealtCards ");
    } else {
      let discarded_card;
      if (index > -1 && index < this.dealt_cards.length) {
        discarded_card = this.dealt_cards.splice(index, 1).toString();
        this.discarded_cards.push(discarded_card);
        console.log("discarded", this.discarded_cards);
      } else {
        console.log("Invalid Index");
      }
    }
  }

  cut_deck(index) {
    if (this.deck.length === 0) {
      console.log("Run out of Cards in the Deck");
    } else {
      let top_half;
      let bottom_half;
      let newIndex = Number(index);
      console.log(newIndex);
      if (index < 52 || index >= 0) {
        console.log("hi");
        top_half = this.deck.slice(0, newIndex + 1);
        bottom_half = this.deck.slice(newIndex + 1);
        this.deck = [...bottom_half, ...top_half];
        return this.deck;
      } else {
        return "Invalid Index";
      }
    }
  }

  order_deck() {
    this.deck = [];
    const faces = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "Jack",
      "Queen",
      "King",
      "Ace"
    ];
    const suits = ["Spades", "Hearts", "Clubs", "Diamonds"];

    for (let s = 0; s < suits.length; s++) {
      for (let f = 0; f < faces.length; f++) {
        this.deck.push(`${suits[s]} of ${[faces[f]]}`);
      }
    }
    let not_deck = this.dealt_cards.concat(this.discarded_cards);

    this.deck = this.deck.filter(item => !not_deck.includes(item));

    console.log("Oredered the deck");
  }

  display_allCards() {
    return {
      deck: this.deck,
      dealt_cards: this.dealt_cards,
      discarded_cards: this.discarded_cards,
      numberOfCardInDeck: this.deck.length
    };
  }
};
