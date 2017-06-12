'use strict';

var test = require('tape');
const validator = require('./poker-dojo.js');

test('enough cards', function(t) {
  var actual = validator();
  var expected = true;
  t.equal(actual.getLength(), expected);
  t.end();
});
