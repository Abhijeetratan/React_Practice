import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
     <div className='w-full h-screen duration-200'
     style={{backgroundColor:color}}>
      
      <div className='fixed flex flex-wrap
      justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center
        gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
        <button
        onClick={()=> setColor("red")}
        className='outline-none px-4 py-1 rounded-full' style={{ backgroundColor: "red", fontFamily: "Arial, sans-serif" }}>Red  
        </button>
        <button 
        onClick={()=>setColor("blue")}
        className='outline-none px-4 py-1 rounded-full' style={{ backgroundColor: "blue", fontFamily: "Arial, sans-serif" }}>Blue 
        </button>
        <button 
        onClick={()=>setColor("Green")}
        className='outline-none px-4 py-1 rounded-full' style={{ backgroundColor: "green", fontFamily: "Arial, sans-serif" }}>Green
        </button>
        <button
        onClick={()=>setColor("Yellow")}
        className='outline-none px-4 py-1 rounded-full' style={{ backgroundColor: "yellow", fontFamily: "Arial, sans-serif" }}>Yellow
        </button>
        <button
        onClick={()=>setColor("Pink")} className='outline-none px-4 py-1 rounded-full' style={{ backgroundColor: "pink", fontFamily: "Arial, sans-serif" }}>Pink
        </button>
        </div>
      </div>
      </div> 
    </>
  )
}

export default App
