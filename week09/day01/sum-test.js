'use strict'

var test = require('tape');
var sumObject =  require('./sum.js')

test('sum the list', function(t) {
  var numberList = [1,2,3,4,5]
  var actual = sumObject.sum(numberList);
  var expected = 15;

  t.equal(actual, expected);
  t.end();
});

test('empty list', function(t) {
  var numberList = [];
  var actual = sumObject.sum(numberList);
  var expected = 0;

  t.equal(actual, expected);
  t.end();
});

test('one element', function(t) {
  var numberList = [25];
  var actual = sumObject.sum(numberList);
  var expected = 25;

  t.equal(actual, expected);
  t.end();
});

test ('multiple elements', function(t) {
  var numberList = [2, 5, 6];
  var actual = sumObject.sum(numberList);
  var expected = 13;

  t.equal(actual, expected);
  t.end();
});

test ('null', function(t) {
  var numberList = [null];
  var actual = sumObject.sum(numberList);
  var expected = 'the list contains null';

  t.equal(actual, expected);
  t.end();
});

test ('string', function(t) {
  var numberList = ['string'];
  var actual = sumObject.sum(numberList);
  var expected = 'not a number';

  t.equal(actual, expected);
  t.end();
});
