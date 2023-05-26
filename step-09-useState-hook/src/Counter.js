import React, { useState } from 'react'
import './Counter.css'

const Counter = () => {
  let user = {
    name : "Ahmed" ,
    age : 18 , 
    email : "ahmedayaz.business@gmail.com"
  }  
  let [count , setCount] = useState(0)
  let [data , setData] = useState(user)

  let Increment = () => {
    setCount(count+1)
  }
  let Decrement = () => {
    setCount(count-1)
  } 
  
  let ChangeData = (newState) => {
    setData((previousState) => {
        return (
            {
                ...previousState ,
                ...newState
            }
        )
    })
  }


  return (
    <>
        <div className='container'>
            <h1>{count}</h1>
            <button onClick={Increment} className='btn'> + </button>
            <button onClick={Decrement} className='btn'> - </button>
        </div>
        <table>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Age</td>
                    <td>Email</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{data.name}</td>
                    <td>{data.age}</td>
                    <td>{data.email}</td>
                </tr>
            </tbody>
        </table>
        <button className='btn' onClick={() => ChangeData({name : "Ayaz" , age : 20 , email : "ahmedayaz.contact@gmail.com"})}>Change Data</button>
    </>
  )
}

export default Counter