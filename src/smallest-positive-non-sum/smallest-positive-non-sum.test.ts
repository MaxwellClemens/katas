import chai from 'chai'
import { smallestPositiveNonSum } from './smallest-positive-non-sum'
chai.should()

describe(`Find the smallest positive integer that is not a sum of a subset of the array`, () => {
  it(`should return 7`, () => {
    const result = smallestPositiveNonSum([1, 2, 3, 10])
    result.should.eql(7)
  })
})
