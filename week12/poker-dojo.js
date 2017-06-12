'use strict';

var CreateValidator = function(black, white) {
const blackHand = black.split(' ');
const whiteHand = white.split(' ');

  const getLength = function() {
    if (blackHand.length === 5 && whiteHand.length === 5) {
      return true
    }
  };
  return {
    getLength
  }
}

module.exports = CreateValidator;
