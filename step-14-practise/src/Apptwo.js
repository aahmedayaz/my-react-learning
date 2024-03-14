import React, { useState } from 'react'
import { useEffect } from 'react'

const Apptwo = () => {
    const [input, setInput] = useState('')
    useEffect(() => {
        console.log("Rendered")
        console.log(input)
    } , [input])
  return (
    <>
        <button onClick={(e) => console.log(e.target.name)} name='add-btn'>Click</button>
        <input type="text" name='add-input' value={input} onChange={(e) => 
            {
                setInput(e.target.value)
            }
        }/>
    </>
  )
}

export default Apptwo