# to-fast-properties

> Force V8 to use fast properties for an object

[Read more.](https://stackoverflow.com/questions/24987896/)

Use `%HasFastProperties(object)` and `--allow-natives-syntax` to check whether an object already has fast properties.

## Install

```
$ npm install to-fast-properties
```

## Usage

```js
import toFastProperties from 'to-fast-properties';

const object = {
	foo: true,
	bar: true
};

delete object.foo;
// `object` now has slow properties

toFastProperties(object);
// `object` now has fast properties
```
