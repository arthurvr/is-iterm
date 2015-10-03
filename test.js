import test from 'ava';
import isIterm from './';
import isTravis from 'is-travis';

test('checks if the terminal is running in iTerm', t => {
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
