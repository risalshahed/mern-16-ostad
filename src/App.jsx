import './App.css'
import Board from './components/Board.jsx';

/* 
Prottek ta Square er value hobe, X or O
Next Player X naki O

ei 2ta field / data, prottek ta User Intercation er sathe Update hobe

*/

const App = () => {
  return (
    <div className='p-24'>
      <Board />
    </div>
  )
  
}

export default App;