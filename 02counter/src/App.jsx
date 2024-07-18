import { useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter,setcounter] = useState(15)
  //const counter =5;

  const addvalue=()=>{
    if(counter<20)
    {
    console.log()
    //counter = counter + 1
    setcounter(counter+1)
    }
  }
  const removevalue=()=>{
    if(counter>0){
    setcounter(counter-1)
    }
  }

  return (
    <>
      <h1>COUNT</h1>
      <h2>Counter Value : {counter}</h2>

      <button
       onClick={addvalue}>Add Value : {counter}</button>
      <br/>
      <button
      onClick={removevalue}>Remove Value : {counter}</button>
    </>
  )
}

export default App
