import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';

function App() {
  let [number, setNumber] = useState(0)
  let a = useRef(18)


  useEffect(() => {
    console.log('State : ' , number )
    console.log('UsRef : ' , a.current )
  })

  const handleclick = () => {
    a.current = a.current + 1
  }

  return (
    <div className="App">
      <span>State value : {number}</span>
      <button onClick={() => setNumber(number+1)}>Add</button>
      <span>Regular value : {a.current}</span>
      <button onClick={handleclick}>Add</button>
    </div>
  );
}

export default App;
