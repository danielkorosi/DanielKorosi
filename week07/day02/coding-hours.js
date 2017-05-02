'use strict';

// An average Green Fox attendee codes 6 hours daily
// The semester is 17 weeks long
//
// Print how many hours is spent with coding in a semester by an attendee,
// if the attendee only codes on workdays.
//
// Print the percentage of the coding hours in the semester if the average
// work hours weekly is 52

var hoursDaily = 6;
var weeks = 17;
var days = weeks * 5;
var averageHoursWeekly = 52;

var totalCodingHours = days * hoursDaily;
var CodingPerWork = (hoursDaily*5 / averageHoursWeekly)*100;

console.log(totalCodingHours);
console.log(CodingPerWork);
