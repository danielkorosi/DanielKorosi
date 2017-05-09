function Animal(hunger = 50, thirst = 50) {
  this.hunger = hunger;
  this.thirst = thirst;
  this.eat = function() {
    this.hunger -= 1;
  };
  this.drink = function() {
    this.thirst -= 1;
  };
  this.play = function() {
    this.hunger += 1;
    this.thirst += 1;
  };
}

function Farm() {
  this.slots = [];
  this.freePlaces = 5;
  this.breed = function() {
    if  (this.freePlaces > 0) {
      var animal = new Animal();
      this.slots.push(animal);
      this.freePlaces -= 1;
  } else {
      console.log("no free places");
    }
  }
}

var farm = new Farm ();
farm.breed()
farm.breed()
farm.breed()
farm.breed()
console.log(farm);
farm.breed()
console.log(farm);
farm.breed()
console.log();



//console.log(farm);
