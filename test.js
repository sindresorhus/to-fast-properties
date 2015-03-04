'use strict';
var test = require('ava');
var toFastProperties = require('./');

test(function (t) {
	t.assert(%HasFastProperties(toFastProperties({})));
	t.end();
});
