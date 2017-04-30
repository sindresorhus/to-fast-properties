'use strict';
const test = require('ava');
const toFastProperties = require('.');

const toSlowProperties = obj => {
	for (let i = 0; i < 1000; i++) {
		obj[`foo${i}`] = 'foo';
	}

	return obj;
};

test(t => {
	const obj = toSlowProperties({});
	obj.foo = 'foo';
	t.assert(!%HasFastProperties(obj), 'obj has slow properties');

	toFastProperties(obj);
	t.assert(%HasFastProperties(obj), 'obj has fast properties');
	t.assert(obj.foo === 'foo', 'obj has the same keys');

	t.end();
});
