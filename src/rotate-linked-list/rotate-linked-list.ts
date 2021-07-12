export class LinkedList {
  value: number
  next: LinkedList | undefined

  constructor(arr: number[]) {
    this.value = arr[0]

    this.next = undefined
    if (arr.length > 1) {
      this.next = new LinkedList(arr.slice(1))
    }
  }
}

export function rotateLinkedList(
  linkedList: LinkedList,
  count: number
): LinkedList | undefined {
  const cutHead = linkedList

  let pointer: LinkedList | undefined = linkedList
  for (let i = 0; i < count - 1; i++) {
    pointer = pointer?.next
  }
  const cutTail = pointer
  pointer = pointer?.next
  cutTail!.next = undefined

  const newHead = pointer

  while (pointer?.next != undefined) {
    pointer = pointer.next
  }

  pointer!.next = cutHead

  return newHead
}
