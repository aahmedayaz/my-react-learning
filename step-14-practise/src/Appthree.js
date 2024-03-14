import React, { useState } from 'react'

const Appthree = () => {
    const [arr , setArr] = useState(['hello' , 'world'])
    const arr1 = ['hello' , 'world']
  return (
    <>
        {
            arr1.map((a) => (
                <>
                    {
                       arr1.map((b) => (
                        <span>{
                            arr1.map((c) => (<span>{c}</span>))
                            }</span>
                       )) 
                    }
                    <h1>{a}</h1>
                </>
            ))
        }
    </>
  )
}

export default Appthree