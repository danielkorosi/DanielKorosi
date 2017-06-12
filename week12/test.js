'use strict';

var test = require('tape');
const validator = require('./poker-dojo.js');

test('correct number of cards', function(t) {
  var actual = validator('2H 3D 5S 9C KD','2C 3H 4S 8C AH');
  var expected = true;
  t.equal(actual.getLength(), expected);
  t.end();
});
