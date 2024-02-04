import React, { useReducer } from 'react'
import Button from './Button'
import CounterReducer from '../reducers/CounterReducer'


const Counter = ({initialValue}) => {
    const [count, dispatchCount] = useReducer(CounterReducer, initialValue)

    return (
    <>
        <h1>Counter : {count}</h1>
        <Button text="Increment" dispatchCount={dispatchCount} action={{type: 'Increment', payload: 1}}/>
        <Button text="Decrement" dispatchCount={dispatchCount} action={{type: 'Decrement', payload: 1}}/>
        <Button text="Reset" dispatchCount={dispatchCount} action={{type: 'Reset', payload: 0}}/>
    </>
    )
}

export default Counter