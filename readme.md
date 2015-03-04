# to-fast-properties [![Build Status](https://travis-ci.org/sindresorhus/to-fast-properties.svg?branch=master)](https://travis-ci.org/sindresorhus/to-fast-properties)

> Force V8 to use fast properties for an object

[Read more.](http://stackoverflow.com/questions/24987896/)

Use `%HasFastProperties(object)` and `--allow-natives-syntax` to check whether an object already has fast properties.


## Install

```
$ npm install --save to-fast-properties
```


## Usage

```js
var toFastProperties = require('to-fast-properties');
var obj = {unicorn: true};
var objWithFastProperties = toFastProperties(obj);
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
