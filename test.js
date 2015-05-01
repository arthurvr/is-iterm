'use strict';
var assert = require('assert');
var isIterm = require('./');
var isTravis = require('is-travis');

it('checks if the terminal is running in iTerm', function () {
	if (isTravis) {
		// I can't run this everywhere, as I'm unable to know if the user is actually using iTerm.
		assert(!isIterm);
	}

	assert.equal(typeof isIterm, 'boolean');
});
