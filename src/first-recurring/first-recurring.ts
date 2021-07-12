export function getFirstRecurring(input: string): string | null {
  const charsSeen = new Set()

  for (const char of input) {
    if (charsSeen.has(char)) {
      return char
    }
    charsSeen.add(char)
  }

  return null
}
