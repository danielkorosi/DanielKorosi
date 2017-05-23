'use strict';

// Create a constructor for creating Animals.
// it should take one parameter: what the animal says
// Every animal should have a method called say() that prints what the animal says

function Animal1(noise) {
  this.say = function(noise) {
    console.log(noise);
  }
};

var cat = new Animal1();

cat.say('meeuw')
