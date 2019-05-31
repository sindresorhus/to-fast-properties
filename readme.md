# to-fast-properties [![Build Status](https://travis-ci.org/sindresorhus/to-fast-properties.svg?branch=master)](https://travis-ci.org/sindresorhus/to-fast-properties)

> Force V8 to use fast properties for an object

[Read more.](http://stackoverflow.com/questions/24987896/)

Use `%HasFastProperties(object)` and `--allow-natives-syntax` to check whether an object already has fast properties.


## Install

```
$ npm install to-fast-properties
```


## Usage

```js
const toFastProperties = require('to-fast-properties');

const obj = {
	foo: true,
	bar: true
};

delete obj.foo;
// `obj` now has slow properties

toFastProperties(obj);
// `obj` now has fast properties
```


---

<div align="center">
	<b>
		<a href="https://tidelift.com/subscription/pkg/npm-to-fast-properties?utm_source=npm-to-fast-properties&utm_medium=referral&utm_campaign=readme">Get professional support for this package with a Tidelift subscription</a>
	</b>
	<br>
	<sub>
		Tidelift helps make open source sustainable for maintainers while giving companies<br>assurances about security, maintenance, and licensing for their dependencies.
	</sub>
</div>
