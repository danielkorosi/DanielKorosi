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
  this.slaughter = function() {
    var leastHunger = 20000;
    this.slots.forEach(function(el) {
      if (leastHunger > el.hunger) {
        leastHunger = el.hunger;
      }
    });
    //this.slots.forEach(function(x) {
      //if (leastHunger === x.hunger) {
        //delete x;
      // }
    this.slots.splice(leastHunger, 1)
    console.log(this.slots);

  }
}

var farm = new Farm ();

farm.breed();
farm.breed();
farm.breed();
farm.breed();
//console.log(farm);
farm.breed();
//console.log(farm);
farm.breed();
//console.log();
farm.slots[1].eat();
farm.slaughter()


//console.log(farm);
