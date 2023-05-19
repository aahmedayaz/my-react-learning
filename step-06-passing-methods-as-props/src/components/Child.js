import React from 'react'

function Child({call}) {

    return (
        <>
            <button onClick={() => {call("Ayaz")}}>Click Me</button>
        </>
    )
}

export default Child