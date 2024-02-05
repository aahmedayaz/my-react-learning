import React, { useContext } from 'react'
import FormContext from '../context/FormContext'

const Data = () => {

    const {formData} = useContext(FormContext)

    return (
    <>
        <div>Name : {formData.name} </div>
        <div>Email : {formData.email} </div>
        <div>Age : {formData.age} </div>
    </>
    )
}

export default Data