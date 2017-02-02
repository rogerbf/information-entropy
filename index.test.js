const { calculateEntropy, calculateLength, symbolSets } = require(`./index`)

test(`calculateEntropy`, () => {
  expect(calculateEntropy(symbolSets.hexadecimalNumerals, 8)).toEqual(32)
  expect(calculateEntropy({ length: 3 }, 8)).toEqual(13)

  expect(calculateEntropy.bind(null, {}, 8)).toThrowError(/first argument/)
  expect(calculateEntropy.bind(null, 4, {})).toThrowError(/second argument/)
})

test(`calculateEntropy with buffer`, () => {
  const password = Buffer.from(`aabcbbcc`)
  const symbolSet = Buffer.from(`abc`)
  expect(calculateEntropy(symbolSet, password)).toEqual(13)
})

test(`calculateLength`, () => {
  expect(calculateLength(symbolSets.caseInsensitiveAlphanumeric, 128))
  .toEqual(25)

  expect(calculateLength.bind(null, {}, 8)).toThrowError(/first argument/)
  expect(calculateLength.bind(null, 4, {})).toThrowError(/second argument/)
})
