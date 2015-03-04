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
	t.assert(!%HasFastProperties(obj));

	toFastProperties(obj);
	t.assert(%HasFastProperties(obj));
	t.assert(obj.foo === 'foo');

	t.end();
});
