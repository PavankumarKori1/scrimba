import React, { useState } from 'react'
import boxes from './boxes';
import { Box } from './Box';
import './App.css';

const App = () => {
  const [squares, setSquares] = useState(boxes)

  function toggle(id) {
    setSquares(prevSquares => {
      return prevSquares.map((square) =>{
        return square.id === id ? {...square, on: !square.on} : square
      })
    })
  }
  
  const squareElemnts = squares.map(square => (
    <Box 
      key={squares.id}
      id={square.id}
      on={squares.on}
      clickHandler={toggle}
    />
  ))

  return (
    <main>
      {squareElemnts}
    </main>
  )
}

export default App

