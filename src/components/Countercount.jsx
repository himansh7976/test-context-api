import React from 'react'
import { usecounter } from '../context/Countercontext'

function Countercount() {
   const  {increment,decrement,reset}=usecounter()
  return (
    <div style={{display:'flex', gap:'20px', fontSize:'20px'}}>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Countercount