import { useState, useCallback } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [useChar, setUsechar] = useState(false)

  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"
    if(useChar) str += "!@#$%^&*()+=[]_-`"

    for(let i = 0; i <length; i++){
      let char = Math.floor(Math.random() * str.length +1)
      pass = str.charAt(char)
    }
    setPassword(pass)

  }, [length, numberAllowed, useChar, setPassword, password])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
      <h1 className='text-white text-center'> Password </h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4 py-6'>
        <input 
        type='text'
        value={password}
        className='outline-none w-full py-1 px-3 rounded-lg'
        placeholder='password'
        readOnly
        />
        <button className='outline-none bg-blue-400 text-white px-3 py-0.5 shrink-0 rounded-lg'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
            type="range"
            min={8}
            max={50}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={numberAllowed}
          id='numberInput'
          onChange={()=>{
            setNumberAllowed((prev)=> !prev)
          }} />
          <label>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={numberAllowed}
          id='charInput'
          onChange={()=>{
            setUsechar((prev)=> !prev)
          }} />
          <label>Special Charecter</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
