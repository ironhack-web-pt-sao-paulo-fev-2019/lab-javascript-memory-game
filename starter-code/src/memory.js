var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function () {
  var randomIndex;  
  for (i=0 ; i < this.cards.length ; i++) {
      randomIndex = Math.floor(Math.random()*this.cards.length)
      var storage = this.cards[i];
      this.cards[i] = this.cards[randomIndex]
      this.cards[randomIndex] = storage;
    }
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  if (firstCard == secondCard) {
    this.pairsClicked ++;
    this.pairsGuessed ++;
    return true;
  }
  this.pairsClicked ++;
  return false;
}

MemoryGame.prototype.isFinished = function () {
  if (this.pairsGuessed == (this.cards.length/2)) {
    return true;
  }
  return false;
};