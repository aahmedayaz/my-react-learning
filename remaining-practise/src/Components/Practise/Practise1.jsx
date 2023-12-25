import React, { useState, useEffect, useRef } from 'react'

const Practise1 = () => {

    let [input , setInput] = useState("")

    let passwordRef = useRef(null)
    console.log(passwordRef)
    
    useEffect(() => {
        console.log("Rendered")
    })

    let handleChange = (e) => {
        setInput(e.target.value)
    }

    let handleClick = () => {
        passwordRef.current.select()
        // document.execCommand('copy')  // this is working but this is depecrated
        navigator.clipboard.writeText(passwordRef.current.value)  // This is ClipBoard API 
    }

    
    return (
    <div>
        {input}
        <br />
        <input type="text" ref={passwordRef} value={input} onChange={handleChange}/>
        <button onClick={handleClick}>Copy</button>
    </div>
    )
}

export default Practise1