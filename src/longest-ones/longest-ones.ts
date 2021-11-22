export function longestOnes(n: number): number {
  const binaryString = n.toString(2)

  let currentLength = 0
  let longestLength = 0
  for (const binary of binaryString) {
    if (binary === `1`) {
      currentLength++
    }
    if (binary === `0`) {
      if (longestLength < currentLength) {
        longestLength = currentLength
      }

      currentLength = 0
    }
  }
  if (longestLength < currentLength) {
    longestLength = currentLength
  }

  return longestLength
}
