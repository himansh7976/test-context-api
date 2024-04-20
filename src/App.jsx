import { useState } from 'react'

import './App.css'
import CounterDis from './components/CounterDis'
import Countercount from './components/Countercount'
import { Counterprovider } from './context/Countercontext'

function App() {
 

  return (
    <>

    <Counterprovider>

      <CounterDis/>
      <Countercount/>
    </Counterprovider>
    </>
  )
}

export default App
