export function exists(board: string[][], word: string): boolean {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (canFormWordFromHere(i, j, word, board)) {
        return true
      }
    }
  }

  return false
}

function canFormWordFromHere(
  i: number,
  j: number,
  word: string,
  board: string[][],
  usedIndexes: number[][] = []
): boolean {
  if (i < 0 || i >= board.length || j < 0 || j >= board[i].length) {
    return false
  }
  if (usedIndexes.find((x) => x[0] === i && x[1] === j)) {
    return false
  }

  if (board[i][j] !== word[0]) {
    return false
  }
  
  if (word.length === 1) {
    return true
  }

  const newWord = word.substring(1)
  usedIndexes.push([i, j])

  const up = canFormWordFromHere(i - 1, j, newWord, board, usedIndexes)
  const down = canFormWordFromHere(i + 1, j, newWord, board, usedIndexes)
  const left = canFormWordFromHere(i, j - 1, newWord, board, usedIndexes)
  const right = canFormWordFromHere(i, j + 1, newWord, board, usedIndexes)

  return up || down || left || right
}
