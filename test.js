import test from 'ava';
import toFastProperties from './index.js';

const toSlowProperties = object => {
	for (let i = 0; i < 1000; i++) {
		object[`foo${i}`] = 'foo';
	}

	return object;
};

test('main', t => {
	const object = toSlowProperties({});
	object.foo = 'foo';
	t.assert(!%HasFastProperties(object), 'object has slow properties');

	toFastProperties(object);
	t.assert(%HasFastProperties(object), 'object has fast properties');
	t.assert(object.foo === 'foo', 'object has the same keys');

	t.end();
});
