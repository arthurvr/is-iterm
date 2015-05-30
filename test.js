'use strict';
var assert = require('assert');
var isIterm = require('./');
var isTravis = require('is-travis');

it('checks if the terminal is running in iTerm', function () {
	assert.equal(typeof isIterm, 'boolean');

	if (isTravis) {
		assert(!isIterm);
	}

	if (/iTerm/.test(process.env.TERM_PROGRAM)) {
		assert(isIterm);
	} else {
		assert(!isIterm);
	}
});
