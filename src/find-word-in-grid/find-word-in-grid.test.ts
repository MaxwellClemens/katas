import chai from 'chai'
import { exists } from './find-word-in-grid'
const should = chai.should()

describe(`when checking if a word exists`, () => {
  const board = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E'],
  ]

  it(`should return true for ABCCED`, () => {
    exists(board, `ABCCED`).should.be.true
  })

  it(`should return true for SEE`, () => {
    exists(board, `SEE`).should.be.true
  })

  it(`should return false for ABCB`, () => {
    exists(board, `ABCB`).should.be.false
  })
})