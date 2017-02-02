# information-entropy

Calculate the required length or the entropy of a password. Inspired by the following Wikipedia article on [password strength](https://en.wikipedia.org/wiki/Password_strength).

The result of these calculations assumes that the password generator uses a truly random selection process, where each symbol is randomly drawn from the set.

## usage

```javascript
const { calculateEntropy, calculateLength, symbolSets } = require(`information-entropy`)

const passwordLength = 24
calculateEntropy(symbolSets.hexadecimalNumerals, passwordLength)
// 96

const entropy = 128
calculateLength(symbolSets.asciiPrintableCharacters, entropy)
// 20

const customSymbolSet = [ `a`, `b`, 2 ]
calculateLength(customSymbolSet, entropy)
// 81
```

## api

### `calculateEntropy(symbolSet, passwordLength)`

Returns entropy in bits.

`symbolSet` and `passwordLength` can be anything with a `.length` property or a number denoting a length.

### `calculateLength(symbolSet, bitsOfEntropy)`

Returns the required number of random selections from the set.

`symbolSet` can be anything with a `.length` property or a number denoting a size. `bitsOfEntropy` must be a number.
