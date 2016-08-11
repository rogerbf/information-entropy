# information-entropy

Calculate the information entropy. Based on a Wikipedia article about  [password strength](https://en.wikipedia.org/wiki/Password_strength).

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
