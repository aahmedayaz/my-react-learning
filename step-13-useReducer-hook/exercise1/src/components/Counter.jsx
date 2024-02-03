import React, { useReducer } from 'react'
import counterReducer from '../reducers/counterReducer'

const Counter = () => {

  const [count, dispatchCount] = useReducer(counterReducer, 0)  

  return (
    <>
        <h1>Counter : {count}</h1>
        <button onClick={() => dispatchCount({type: 'Increase' , payload: 1})}>Increase</button>
        <button onClick={() => dispatchCount({type: 'Decrease' , payload: 1})}>Decrease</button>
        <button onClick={() => dispatchCount({type: 'Reset' , payload: 0})}>Reset</button>
    </>
  )
}

export default Counter