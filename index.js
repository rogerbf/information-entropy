function throwTypeError (message) {
  throw TypeError(message)
}

function entropyFromLength (setSize, passwordLength) {
  return Math.ceil(Math.log2(Math.pow(setSize, passwordLength)))
}

function lengthFromEntropy (setSize, entropy) {
  return Math.ceil(entropy / Math.log2(setSize))
}

function lengthOrNumber (target) {
  return (
    [ target ]
    .filter(el => el.length || typeof (el) === `number`)
    .map(el => el.length ? el.length : el)
    .pop()
  )
}

function calculateEntropy (symbols, password) {
  const setSize = lengthOrNumber(symbols)
  const passwordLength = lengthOrNumber(password)

  typeof (setSize) !== `number` &&
  throwTypeError(`first argument must have a length property or a be number`)
  typeof (passwordLength) !== `number` &&
  throwTypeError(`second argument must have a length property or a be number`)

  return entropyFromLength(setSize, passwordLength)
}

function calculateLength (symbols, entropy) {
  const setSize = lengthOrNumber(symbols)

  typeof (setSize) !== `number` &&
  throwTypeError(`first argument must have a length property or a be number`)
  typeof (entropy) !== `number` &&
  throwTypeError(`second argument must be number`)

  return lengthFromEntropy(setSize, entropy)
}

module.exports = {
  calculateEntropy,
  calculateLength
}
