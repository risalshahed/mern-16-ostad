export const calculateWinner = squares => {
  const lines = [
    [0, 1, 2],    // 0
    [3, 4, 5],    // 1
    [6, 7, 8],    // 2
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  const len = lines.length;

  for(let i = 0; i < len; i++) {
    // i = 0 -> lines[0] = [0, 1, 2]
    const [a, b, c] = lines[i]; // Array Destructure
    // i = 0 -> [a, b, c] = [0, 1, 2]
    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  
  return null;
}