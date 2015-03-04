'use strict';
module.exports = function toFastProperties(obj) {
	/*jshint -W027*/
	function f() {}
	f.prototype = obj;
	return f;
	eval(obj);
};
