<a href="https://travis-ci.org/Xotic750/to-safe-integer-x"
  title="Travis status">
<img
  src="https://travis-ci.org/Xotic750/to-safe-integer-x.svg?branch=master"
  alt="Travis status" height="18">
</a>
<a href="https://david-dm.org/Xotic750/to-safe-integer-x"
  title="Dependency status">
<img src="https://david-dm.org/Xotic750/to-safe-integer-x/status.svg"
  alt="Dependency status" height="18"/>
</a>
<a
  href="https://david-dm.org/Xotic750/to-safe-integer-x?type=dev"
  title="devDependency status">
<img src="https://david-dm.org/Xotic750/to-safe-integer-x/dev-status.svg"
  alt="devDependency status" height="18"/>
</a>
<a href="https://badge.fury.io/js/to-safe-integer-x"
  title="npm version">
<img src="https://badge.fury.io/js/to-safe-integer-x.svg"
  alt="npm version" height="18">
</a>
<a href="https://www.jsdelivr.com/package/npm/to-safe-integer-x"
  title="jsDelivr hits">
<img src="https://data.jsdelivr.com/v1/package/npm/to-safe-integer-x/badge?style=rounded"
  alt="jsDelivr hits" height="18">
</a>

<a name="module_to-safe-integer-x"></a>

## to-safe-integer-x

Constructs and returns a new string which contains the specified number of copies of the string.

<a name="exp_module_to-safe-integer-x--module.exports"></a>

### `module.exports` ⇒ <code>\*</code> ⏏

Converts `value` to a safe integer.

**Kind**: static property of [<code>to-safe-integer-x</code>](#module_to-safe-integer-x)  
**Returns**: <code>number</code> - Returns the converted integer.

| Param | Type            | Description           |
| ----- | --------------- | --------------------- |
| value | <code>\*</code> | The value to convert. |

**Example**

```js
import {toSafeInteger} from 'to-safe-integer-x';

console.log(toSafeInteger(3)); // 3
console.log(toSafeInteger(Number.MIN_VALUE)); // 0
console.log(toSafeInteger(Infinity)); // 9007199254740991
console.log(toSafeInteger(-Infinity)); // -9007199254740991
console.log(toSafeInteger('3')); // 3
```
