import React, { useState, useContext } from 'react'
import FormContext from '../context/FormContext'

const Form = () => {

    const [input, setInput] = useState({
        name: '',
        email: '',
        age: ''
    })

    const {SubmitForm} = useContext(FormContext)

    let HandleChange = (e) => {
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    }

    let SubmitInput = (e) => {
        e.preventDefault();
        SubmitForm(input.name, input.email, input.age)
    }

    return (
        <>
            <form action="" onSubmit={SubmitInput}>
                <div>
                    <label htmlFor="name">Name :</label>
                    <input type="text" name='name' id="name" value={input.name} onChange={HandleChange}/>
                </div>
                <div>
                    <label htmlFor="email">Email :</label>
                    <input type="email" name='email' id="email" value={input.email} onChange={HandleChange}/>
                </div>
                <div>
                    <label htmlFor="age">Age :</label>
                    <input type="number" name='age' id="age" value={input.age} onChange={HandleChange}/>
                </div>
                <input type="submit" value="Submit" />
            </form>
        </>
    )
}

export default Form