import React from 'react'
import Heading from './components/Heading';

function App() {
  const arr = ['Heading1' , 'Heading2' , 'Heading3']
  return (
    <>
      <Heading value = {arr[0]} />
      <Heading value = {arr[1]} />
      <Heading value = {arr[2]} />
    </>
  );
}

export default App;
