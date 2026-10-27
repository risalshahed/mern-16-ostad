import { useState } from "react";
import Square from "./Square.jsx"
import { calculateWinner } from "../utils/calculateWinner.js";

const Board = () => {
  const [values, setValues] = useState(
    Array(9).fill(null)
  );

  const [xIsNext, setXIsNext] = useState(true);

  // Calculate the Winner
  const winner = calculateWinner(values);
  let status;

  if(winner) {
    status = `Winner: ${winner}`
  // } else if(values.filter(Boolean).length === 9) {
  } else if(!values.includes(null)) {
    status = 'Match Draw'
  } else {
    status = `Next Player: ${xIsNext ? 'X' : 'O'}`
  }

  const handleClick = (i) => {
    // If value of a square is NOT NULL or there is a winner, return
    if(values[i] || calculateWinner(values)) {
      return;
    }
    console.log('clicked');
    const newValues = [...values];
    // Set the Value Either X or O
    if(xIsNext) {
      newValues[i] = 'X';
    } else {
      newValues[i] = 'O';
    }
    setValues(newValues);
    // Toggle the Next Player
    setXIsNext(!xIsNext);
  }

  return (
    <>
      <div>
        {status}
      </div>
      <div className="flex">
        <Square value={values[0]} onSquareClick={() => handleClick(0)} />
        <Square value={values[1]} onSquareClick={() => handleClick(1)} />
        <Square value={values[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="flex">
        <Square value={values[3]} onSquareClick={() => handleClick(3)} />
        <Square value={values[4]} onSquareClick={() => handleClick(4)} />
        <Square value={values[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="flex">
        <Square value={values[6]} onSquareClick={() => handleClick(6)} />
        <Square value={values[7]} onSquareClick={() => handleClick(7)} />
        <Square value={values[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  )
}

export default Board;