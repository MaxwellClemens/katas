import * as uut from './longest-ones'
import chai from 'chai'
chai.should()

describe(`when calling longestOnes()`, () => {
  it(`should return 3 when given 156`, () => {
    const result = uut.longestOnes(156)
    result.should.eql(3)
  })

  it(`should return 1 when given 1`, () => {
    const result = uut.longestOnes(1)
    result.should.eql(1)
  })

  it(`should return 0 when given 0`, () => {
    const result = uut.longestOnes(0)
    result.should.eql(0)
  })
})
