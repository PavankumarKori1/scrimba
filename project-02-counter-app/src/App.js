import React from 'react';
import { useState } from 'react';
import './App.css';

export default function App() {
  
  const [counter, setCounter] = useState(0);

  // function add() {
  //   setCounter(function(prevCount){
  //     return prevCount + 1
  //   })
  // }

  function add() {
    setCounter(prevCount => prevCount + 1)
  }

  // function minus() {
  //   setCounter(function(prevCount){
  //     return prevCount - 1
  //   })
  // }

  function minus() {
    setCounter(prevCount => prevCount - 1)
  }

  return (
      <div className="counter">
          <button className="counter--minus" onClick={minus}>–</button>
          <div className="counter--count">
              <h1>{counter}</h1>
          </div>
          <button className="counter--plus" onClick={add}>+</button>
      </div>
  )
}
