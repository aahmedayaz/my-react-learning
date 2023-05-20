import React from 'react'

function App() {
  let checkValue = (value) => {

    // If-else Conditional Rendering
    if(value === "Ahmed"){
      alert("Hello Ayaz")
    }
    else {
      alert("Hello Other")
    }

    // Ternary Operator Conditional Rendering
    value[0] === 'A' ? console.log("First Value is A") : console.log("First Value is not A")


    // Logical && Operator Conditional Rendering

    value[1] === "h" && console.log("This is Logical Operator Conditional Rendering")
  }

  return (
    <>
      <button onClick={() => checkValue("Ahmed")}>Submit</button>
    </>
  )

}

export default App