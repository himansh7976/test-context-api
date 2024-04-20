import React from 'react'
import { usecounter } from '../context/Countercontext'

function CounterDis() {

   const {count}=usecounter();
  return (
    <div >

    <h1>COUNTERl</h1>
    <h1>
      {count}
    </h1>

    </div>
  )
}

export default CounterDis