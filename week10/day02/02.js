'use strict';

// Create a constructor for creating Rectangles.
// it should take two parameters: the sides of the rectangle
// Every rectangle should have a method called getArea() that returns its area
// Every rectangle should have a method called getCircumference() that returns its circumference

function Rectangles(a, b) {
  this.a = a;
  this.b = b;
}
Rectangles.prototype.getArea = function() {
  return this.a * this.b
}
Rectangles.prototype.getCircumference = function() {
  return 2 * (this.a + this.b)
}

var rect = new Rectangles(3, 5);
console.log(rect.getArea());
console.log(rect.getCircumference());


function Rectangles1(a, b) {
  this.a = a;
  this.b = b;
  this.getArea = function() {
    return this.a * this.b
  }
  this.getCircumference = function() {
    return 2 * (this.a+this.b)
  }
}

var rect1 = new Rectangles1(2, 3);
console.log(rect1.getArea());
console.log(rect1.getCircumference());


class Rectanglez {
  constructor(a, b) {
    this.a = a;
    this.b = b;
    this.getArea = function() {
      return this.a * this.b
    }
    this.getCircumference = function() {
      return 2 * (this.a+this.b)
    }
  }
}

var rect2 = new Rectanglez(4,5)
console.log(rect2.getArea());
console.log(rect2.getCircumference());


class Rectanglezzz {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  getArea() {
    return this.a * this.b
  }
  getCircumference() {
    return 2 * (this.a+this.b)
  }
}

var rect3 = new Rectanglezzz(4,5)
console.log(rect3.getArea());
console.log(rect3.getCircumference());
