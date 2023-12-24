import { useCallback, useState } from "react"
import Child from "./components/Child"

function App() {

  let [count , setCount] = useState(0)

  let hello = useCallback( () => setCount((prev) => prev + 1) , [setCount])

  return (
    <>
      <h1>{count}</h1>
      <Child onClick={hello}/>
    </>
  )

}

export default App
