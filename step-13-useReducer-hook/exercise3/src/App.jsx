import './App.css'
import Data from './components/Data'
import Form from './components/Form'
import {FormContextProvider} from './context/FormContext'

function App() {

  return (
    <>
      <FormContextProvider>
        <Form />
        <Data />
      </FormContextProvider>
    </>
  )
}

export default App
