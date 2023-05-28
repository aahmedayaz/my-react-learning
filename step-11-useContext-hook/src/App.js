import React , {createContext , useState}  from 'react'
import Counter2 from './Counter2'

export let MyName = createContext();
export let MyAge = createContext();

const App = () => {
  let [name , setName] = useState('Ahmed Ayaz')
  let [age , setAge] = useState(21)  
  return (
    <>
      <MyName.Provider value={name}>
        <MyAge.Provider value={age}>
            <Counter2/>
        </MyAge.Provider>
      </MyName.Provider>
    </>
  )
}

export default App