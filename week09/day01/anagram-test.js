'use strict';

var test = require('tape');
var anagram = require('./anagram.js');

test('if anagram', function(t) {
  var actual = anagram('asdf', 'fdsa')
  var expected = true

  t.equal(actual, expected);
  t.end();
});
