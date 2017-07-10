'use strict';

var CreateValidator = function(black, white) {
  const blackHand = black.split(' ');
  const whiteHand = white.split(' ');
  var result =[];
  const getLength = function() {
    if (blackHand.length === 5 && whiteHand.length === 5) {
      return true
      }
    };

  const getResult = function() {
    var blackCards =[];
    var whiteCards =[];

    blackHand.forEach(function(card){
      blackCards.push({number: card.split('')[0], suit: card.split('')[1]})
    })
    whiteHand.forEach(function(card){
      whiteCards.push({number: card.split('')[0], suit: card.split('')[1]})
    })

    var counter = 0;
    for (var i = 0, i < 5, i++) {
      if (blackCards[i].suit === blackCards[i+1].suit) {
        counter++
      }
      
    }

    return result
  }
    return {
      getLength,
      getResult
    }
}

var poker = CreateValidator('2H 3D 5S 9C KD','2C 3H 4S 8C AH')
console.log(poker.getResult());
module.exports = CreateValidator;
