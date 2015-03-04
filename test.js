'use strict';
var test = require('ava');
var toFastProperties = require('./');

test(function (t) {
	var obj = [];
	obj[-1] = 'foo';
	t.assert(!%HasFastProperties(obj));

	toFastProperties(obj);
	t.assert(obj[-1] === 'foo');
	t.assert(%HasFastProperties(obj));

	t.end();
});
