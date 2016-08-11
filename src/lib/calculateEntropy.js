module.exports = function calculateEntropy (symbols, length) {
  return Math.ceil(Math.log2(Math.pow(symbols, length)))
}
