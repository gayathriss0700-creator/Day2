import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Welcome to Vite</h1>
     <h1 style ={{
      color:"red",
      fontSize:"50px",
      textAlign:"center"
     }}>Welcome to Vite</h1>
     <p className='text-gray-500 text-lg text-center'>
      Learn React step by step .
     </p>
     <button className='bg-blue-500 text-white px-4 py-2 rounded' onClick={() => setCount((count) => count + 1)}>
     submit
     </button>
     <p className='text-gray-500 text-lg text-center'>
      Count is : {count}
     </p>
    </>
  )
}

export default App
