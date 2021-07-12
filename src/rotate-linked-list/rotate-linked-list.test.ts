import chai from 'chai'
import { LinkedList, rotateLinkedList } from './rotate-linked-list'
chai.should()

describe(`when rotating a linked list`, () => {
  it(`should change rotate 2 places`, () => {
    const linkedList = new LinkedList([7, 7, 3, 5])

    let result: LinkedList | undefined = rotateLinkedList(linkedList, 2)
    const expected = [3, 5, 7, 7]

    for (let value of expected) {
      result!.value.should.eql(value)
      result = result?.next
    }
  })
})
