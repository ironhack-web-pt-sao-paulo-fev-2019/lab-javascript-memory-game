var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function () {
var j = 0; 
var temp =0;
for (var i = this.cards.length-1; i>=0 ; i--){
  j = Math.floor(Math.random() * i+1);
  temp = this.cards[j];
  this.cards[j]=this.cards[i];
  this.cards[i]=temp;
}
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  if (firstCard===secondCard){
    this.pairsGuessed += 1;
    this.pairsClicked += 1;
    return true;
  }
  else{
    this.pairsClicked += 1;
    return false;
  }
}

MemoryGame.prototype.isFinished = function () {
  if (this.pairsGuessed==(this.cards.length/2)){
    return true;
  }
  else {
    return false;
  }
};