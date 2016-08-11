const SYMBOL_SETS = require('./lib/symbolSets.js')
const calculateEntropy = require('./lib/calculateEntropy.js')
const calculateLength = require('./lib/calculateLength.js')

module.exports = {
  calculateEntropy,
  calculateLength,
  SYMBOL_SETS
}
