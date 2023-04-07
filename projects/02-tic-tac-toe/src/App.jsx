import { useState } from 'react'
import './App.css'

//Constantes para usar en este componente y los anexos
const TURNS={
  X:'X',
  O:'O'
}

const WINNER_COMBOS=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]

/* const board= Array(9).fill(null) 
*  Asi dibuja el arrgelo y nos da una vista de como queda
*/
const Square=({children,isSelected,updateBoard, index})=>{
  const className=`square ${isSelected?'is-selected': ''}`

  const handleClick=()=>{
    //console.log('Actualizar tablero',updateBoard);
    updateBoard(index)
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}



function App() {
  console.log(WINNER_COMBOS);
  const [board,setBoard]=useState(Array(9).fill(null))

  const [turno,setTurno]=useState(TURNS.X)

  const [winner,setWinner]=useState(null)

  const resetGame=()=>{
    setBoard(Array(9).fill(null))
    setTurno(TURNS.X)
    setWinner(null)
  }

  const checkEndGame=(newBoard)=>{
    return newBoard.every((square)=> square!==null )
  }
  const checkWinner=(boardToCheck)=>{
    for(let v of WINNER_COMBOS){
      const [a,b,c]=v
      console.log(`Combo ${v} : ${a},${b},${c}`)
      
      console.log("checkWinner func",[a,b,c], `a[${a}]:${boardToCheck[a]}`,`b[${b}]:${boardToCheck[b]}`,`c[${c}]:${boardToCheck[c]}`)
      if(
          boardToCheck[a] &&
          boardToCheck[a]===boardToCheck[b] &&
          boardToCheck[a]===boardToCheck[c] 
      ){
        return boardToCheck[a]
      }
    }
    return false
    
  }

  const actualizarTablero=(index)=>{
    // si ya tiene algo regresa al flujo sin actualizar nada
    if(board[index] || winner) return 

    const newTurn= turno===TURNS.X?TURNS.O:TURNS.X
    setTurno(newTurn)

    const newBoard=[...board]
    newBoard[index]=turno
    setBoard(newBoard)

    //checar ganadores
    const newWinner=checkWinner(newBoard)
    console.log("new ganador",newWinner)
    if(newWinner){
      setWinner(newWinner)
      console.log(`Las fichas ${newWinner} ganaron`);
    }else if(checkEndGame(newBoard))
    {setWinner(false)}
    else
    {
      console.log(`empatados ${newWinner}`);
    }
  }

  console.log(board)

  return (
    <main className='board'>
      <h1>Tic-Tac-Toe</h1>
      <button onClick={resetGame}>Empezar de nuevo</button>
      <section className='game'>
        {
          board.map((_,index)=>{
            //console.log(index)
            return(
              <Square
              key={index}
              index={index} 
              updateBoard={actualizarTablero}          
              >
                {board[index]}
              </Square>
            )
          })
        }
      </section>
      <section className='turn'>
        <Square isSelected={turno===TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turno===TURNS.O}>{TURNS.O}</Square>
      </section>
      {
        winner !== null && (
          <section className='winner'>
            <div className='text'>
              <h2>
                {
                  winner === false
                  ? 'Empate'
                  : `Ganó: ${winner}`

                }
              </h2>
              <header className='win'>
                {winner && <Square className="mensaje">
                  {winner}
                  </Square>}
              </header>
              <footer>
                <button onClick={resetGame}>Empezar de nuevo</button>
              </footer>
            </div>
          </section>
        )
      }
    </main>
  )
}

export default App
