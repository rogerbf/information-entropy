# information-entropy

Calculate the information entropy.

``` shell
npm install information-entropy
```

## Usage

``` javascript
const password = require('information-entropy')

const symbolSet = ['a', 'b', 'c']
const passwordLength = 6

password.calculateEntropy(symbolSet.length, passwordLength)
// 10 (bits)

const desiredEntropy = 128

password.calculateLength(symbolSet.length, desiredEntropy)
// 81 (symbols)
```
