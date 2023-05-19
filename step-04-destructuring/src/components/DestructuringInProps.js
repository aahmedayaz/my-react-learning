import React from 'react'

// Destructuring in Props
function DestructuringInProps({name , age}) {
  return (
    <>
      <h1>My name is {name}</h1>
      <h1>My Age is {age}</h1>
    </>
  )
}


// Destructuring in Functions
export function SecondDestructuringInProps(props) {
  let {name , age} = props;
  return (
    <>
      <h1>My name is {name}</h1>
      <h1>My Age is {age}</h1>
    </>
  )
}


export default DestructuringInProps