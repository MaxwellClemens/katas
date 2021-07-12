import chai from 'chai'
import { getUnsortedBounds } from './unsorted-bounds'
const should = chai.should()

describe(`when determining the unsorted bounds`, () => {
  it(`should return undefined if it is sorted`, () => {
    const result = getUnsortedBounds([1, 2, 3, 4, 5])
    should.not.exist(result)
  })
  it(`should return bounds that need to be sorted`, () => {
    const result = getUnsortedBounds([3, 7, 5, 6, 9])
    result!.should.eql([1, 3])
  })
})
