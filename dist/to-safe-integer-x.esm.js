import toInteger from 'to-integer-x';
import clamp from 'math-clamp-x';
var MAX_SAFE_INTEGER = 9007199254740991;
var MIN_SAFE_INTEGER = -MAX_SAFE_INTEGER;
/**
 * Converts `value` to an integer of safe bounds.
 *
 * @param {*} value - The value to convert.
 * @returns {number} Returns the converted integer.
 */

var toSafeInteger = function toSafeInteger(value) {
  return clamp(toInteger(value), MIN_SAFE_INTEGER, MAX_SAFE_INTEGER);
};

export default toSafeInteger;

//# sourceMappingURL=to-safe-integer-x.esm.js.map