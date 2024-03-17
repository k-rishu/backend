import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15)
  // let counter = 15;

  const addValue = ()=>{
    // counter ++;
    if(counter >= 20){
      alert("Again Dude stop !!")
      return
    }
    setCounter(counter +1);
    // console.log("Value added:" + counter);
  }

  const removeValue = ()=>{
    if(counter <= 0){
      alert("Stop Shiting!")
      return;
    }
    setCounter(counter - 1);
   
  }

  return (
   <>
   <h1>Counter Valaue: {counter} </h1>
   <button onClick={addValue}>Add Value</button>
   <br/>
   <button onClick={removeValue}>Remove Value</button>
   </>
  )
}

export default App
