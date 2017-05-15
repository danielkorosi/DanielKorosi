'use strict';

var test = require('tape');
var fibonacci = require('./fibonacci.js')

test('if input is not a number', function(t) {
  var actual = fibonacci('string');
  var expected = 'input is not a number';
  t.equal(actual, expected);
  t.end();
});

test('negative number', function(t) {
  var actual = fibonacci(-2);
  var expected = 'no negative numbers allowed';
  t.equal(actual, expected);
  t.end();
});
