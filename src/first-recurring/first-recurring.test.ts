import chai from 'chai'
import { getFirstRecurring } from './first-recurring'
const should = chai.should()

describe.only(`when finding the first recurring character`, () => {
  it(`should return null when there is no recurring character`, () => {
    const result = getFirstRecurring(`abcdef`)
    should.not.exist(result)
  })
  it(`should return the correct character`, () => {
    const result = getFirstRecurring(`acbbac`)
    result!.should.eql(`b`)
  })
})
