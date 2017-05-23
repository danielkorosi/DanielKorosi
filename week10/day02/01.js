'use strict';

// Create a constructor for creating Animals.
// it should take one parameter: what the animal says
// Every animal should have a method called say() that prints what the animal says

function Animal(sound) {
    this.sound = sound;
}
Animal.prototype.say = function() {
  console.log(this.sound);
}

var cow = new Animal('buuuu')
cow.say()


function Animal1(sound) {
  this.sound = sound;
  this.say1 = function() {
    console.log(sound);
  }
};

var cat = new Animal1('meeuw');
cat.say1();


class Animal2 {
  constructor(sound) {
    this.sound = sound;
    this.say2 = function() {
      console.log(sound);
    }
  }
}

var dog = new Animal2('wah');
dog.say2();
