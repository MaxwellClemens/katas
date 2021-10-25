export function smallestPositiveNonSum(arr: number[]): number {
  const allSums = new Set<number>()

  populateAllSums(allSums, arr, 0)

  for (let i = 1; i; i++) {
    if (!allSums.has(i)) {
      return i
    }
  }
  return -1
}

function populateAllSums(
  allSums: Set<number>,
  arr: number[],
  currentSum: number
) {
  if (arr.length === 0) {
    allSums.add(currentSum)
    return
  }

  populateAllSums(allSums, arr.slice(1), currentSum)
  populateAllSums(allSums, arr.slice(1), currentSum + arr[0])
}
