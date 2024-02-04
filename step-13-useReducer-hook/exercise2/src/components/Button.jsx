import React from 'react'

const Button = ({text, dispatchCount, action}) => {

    let HandleClick = () => {
        dispatchCount(action)
    }

    return (
    <button onClick={HandleClick}>{text}</button>
    )
}

export default Button