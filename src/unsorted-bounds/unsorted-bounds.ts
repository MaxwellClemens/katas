export function getUnsortedBounds(arr: number[]): number[] | undefined {
  const sortedArr = [...arr].sort((a, b) => a - b)

  let leftBound: number | undefined = undefined
  let rightBound: number | undefined = undefined

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== sortedArr[i]) {
      leftBound = i
      break
    }
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] !== sortedArr[i]) {
      rightBound = i
      break
    }
  }

  if (leftBound == undefined || rightBound == undefined) {
    return undefined
  }

  return [leftBound, rightBound]
}
