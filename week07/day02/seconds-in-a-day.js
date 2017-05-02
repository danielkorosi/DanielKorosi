'use strict';

var currentHours = 14;
var currentMinutes = 34;
var currentSeconds = 42;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

var dayInSeconds = 24 * 60 * 60;
var currentInSeconds = 14 * 60 * 60 + 34 * 60 + 42;

var remainingInSeconds = dayInSeconds - currentInSeconds;

console.log(remainingInSeconds);
