import React, {createContext, useReducer} from 'react'
import FormReducer from '../reducers/FormReducer';

const FormContext = createContext({
    name: '',
    email: '',
    age: ''
})

export default FormContext;

export const FormContextProvider = ({children}) => {

    const [formData, dispatchFormData] = useReducer(FormReducer, {
        name: '',
        email: '',
        age: ''
    })

    let SubmitForm = (name, email, age) => {
        dispatchFormData({
            type: 'Submit_Form',
            payload: {
                name: name,
                email: email,
                age: age
            }
        })
    }

    return(
        <FormContext.Provider value={{formData, SubmitForm}}>
            {children}
        </FormContext.Provider>
    )
}
