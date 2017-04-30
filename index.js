'use strict';
module.exports = function toFastproperties(o) {
	function Sub() {}
	Sub.prototype = o;
	const receiver = new Sub(); // Create an instance
	function ic() {
		return typeof receiver.foo; // Perform access
	}
	ic();
	ic();
	return o;
	eval('o' + o); // Ensure no dead code elimination
};
