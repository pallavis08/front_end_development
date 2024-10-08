import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [upperAllowed, setUpperAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const passwordRef = useRef(null)

  const generatePassword = useCallback(() => {
    let pass = ''
    let str = 'abcdefghijklmnopqrstuvwxyz'

    if(numberAllowed) str += '0123456789'
    if(charAllowed) str += '!@#$%^&*()_+'
    if(upperAllowed) str += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    for(let i=1; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length, numberAllowed, charAllowed, upperAllowed])

  useEffect(() => {
    generatePassword()

  }, [length, numberAllowed, charAllowed, upperAllowed])

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
  }

  return (
    <>
    <div className='w-full  max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-20 space-y-5 bg-slate-600 text-lime-500'>
      <h1 className='font-mono text-lg font-bold text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
        type='text'
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='Password'
        readOnly
        ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white hover:opacity-100 px-3 py-0.5 shrink-0'
        >copy</button>
      </div>
      <div
      className='flex items-center gap-x-1'>
        <input
        type='range'
        min={6}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e) => setLength(e.target.value)}
        name=''
        id=''
        />
        <label htmlFor='length'>Length: {length}</label>
      </div>

      <div
      className='flex items-center gap-x-2'>
        <input
        type='checkbox'
        defaultChecked={numberAllowed}
        onChange={() => {
          setNumberAllowed((prev) => !prev)
        }}
        name=''
        id=''
        />
        <label htmlFor='number'>Numbers</label>
      </div>

      <div
      className='flex items-center gap-x-2'>
        <input
        type='checkbox'
        defaultChecked={upperAllowed}
        onChange={() => {
          setUpperAllowed((prev) => !prev)
        }}
        name=''
        id=''
        />
        <label htmlFor='upper'>Upper Case</label>
      </div>

      <div
      className='flex items-center gap-x-2'>
        <input
        type='checkbox'
        defaultChecked={charAllowed}
        onChange={() => {
          setCharAllowed((prev) => !prev)
        }}
        name=''
        id=''
        />
        <label htmlFor='charInput'>Special Characters</label>
      </div>

    </div>

      
    </>
  )
}

export default App
