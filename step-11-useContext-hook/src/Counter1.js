import React , { useContext }from 'react'
import { MyName , MyAge } from './App'



const Counter1 = () => {

    let name = useContext(MyName)
    let age = useContext(MyAge)

  return (
    <>
        <h1>{name}</h1>
        <h1>{age}</h1>
    </>
  )
}

export default Counter1