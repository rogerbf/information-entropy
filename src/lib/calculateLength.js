module.exports = function calculateLength (symbols, entropy) {
  return Math.ceil(entropy / Math.log2(symbols))
}
