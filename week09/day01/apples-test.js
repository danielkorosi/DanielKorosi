'use strict';

var test = require('tape');
var apple = require('./apples.js');
//var getApple = require('./apples.js')

test('print apples', function(t) {
  var actual = apple.getApple();
  var expected = 'apple';

  t.equal(actual, expected);
  t.end();
})
