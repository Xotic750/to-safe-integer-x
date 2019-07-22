import toSafeInteger from 'src/to-safe-integer-x';

describe('toSafeInteger', function() {
  it('basic', function() {
    expect.assertions(16);

    expect(toSafeInteger(NaN)).toBe(0);
    expect(toSafeInteger(Infinity)).toBe(Number.MAX_SAFE_INTEGER);
    expect(toSafeInteger(-Infinity)).toBe(Number.MIN_SAFE_INTEGER);
    [-0, 0, 42].forEach(function(num) {
      expect(Object.is(toSafeInteger(num), num)).toBe(true, `${num} returns itself`);

      expect(Object.is(toSafeInteger(-num), -num)).toBe(true, `-${num} returns itself`);
    });
    expect(toSafeInteger('0b10')).toBe(2, 'binary returns 2');
    expect(toSafeInteger('0o10')).toBe(8, 'octal returns 8');
    expect(toSafeInteger(' \t\r\n1 \t\r\n')).toBe(1, 'whitespaces are trimmed');
    expect(toSafeInteger('\u0085\u200b\ufffe10\u0085\u200b\ufffe')).toBe(0, 'non-whitespaces are not trimmed');
    expect(toSafeInteger('\u180e10\u180e')).toBe(0, 'non-whitespaces are not trimmed');
    expect(toSafeInteger(Math.PI)).toBe(3, 'pi returns 3');
    expect(function() {
      const uncoercibleObject = {
        toString() {
          return {};
        },
        valueOf() {
          return {};
        },
      };

      return toSafeInteger(uncoercibleObject);
    }).toThrowErrorMatchingSnapshot();
  });
});
