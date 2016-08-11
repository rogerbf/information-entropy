const test = require('tape')
const calculateEntropy = require('./lib/calculateEntropy.js')
const calculateLength = require('./lib/calculateLength.js')
const SYMBOL_SETS = require('./lib/symbolSets.js')

test('calculateEntropy(symbolCount, length)', assert => {
  assert.ok(calculateEntropy(SYMBOL_SETS.HEXADECIMAL_NUMERALS, 32) === 128)
  assert.end()
})

test('calculateLength(symbolCount, entropy)', assert => {
  assert.ok(calculateLength(SYMBOL_SETS.CASE_SENSITIVE_ALPHANUMERIC, 128) === 22)
  assert.end()
})
