'use strict';
var test = require('ava');
var toFastProperties = require('./');

var toSlowProperties = function (obj) {
	for (var i = 0; i < 1000; ++i) {
		obj['foo' + i] = 'foo';
	}
	return obj;
};

test(function (t) {
	var obj = toSlowProperties({});
	obj.foo = 'foo';
	t.assert(!%HasFastProperties(obj), 'obj has slow properties');

	toFastProperties(obj);
	t.assert(%HasFastProperties(obj), 'obj has fast properties');
	t.assert(obj.foo === 'foo', 'obj has the same keys');

	t.end();
});
