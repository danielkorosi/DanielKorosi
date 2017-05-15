'use strict';

var test = require('tape');
var count = require('./count-letters.js')

test('if space between caharacters', function(t) {
  var testString = 'zz top';
  var actual = count(testString);
  var expected = {o: 1, p: 1, t: 1, z: 2};

  t.deepEqual(actual, expected);
  t.end();
});

test('uppercase', function(t) {
  var testString = 'Zz top';
  var actual = count(testString);
  var expected = {o: 1, p: 1, t: 1, z: 2};

  t.deepEqual(actual, expected);
  t.end();
});
