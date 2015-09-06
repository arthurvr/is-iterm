'use strict';
var test = require('ava');
var isIterm = require('./');
var isTravis = require('is-travis');

test('checks if the terminal is running in iTerm', function (t) {
	t.is(typeof isIterm, 'boolean');

	if (isTravis) {
		t.false(isIterm);
	}

	if (/iTerm/.test(process.env.TERM_PROGRAM)) {
		t.true(isIterm);
	} else {
		t.false(isIterm);
	}

	t.end();
});
