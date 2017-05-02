'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000
var a = 10;
var b = 20;
var c = 40;

var surfaceArea = 2*(a * b + a * c + b * c);
var volume = a * b * c;

console.log('Surface Area: ' + surfaceArea);
console.log('Volume: ' + volume);
