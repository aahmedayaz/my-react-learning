import React, { useEffect, useState } from 'react'

const Child = ({onClick}) => {
    return (
        <>
            <button onClick={onClick} style={{padding: "5px 10px" , backgroundColor: "yellowgreen"}}>Hello</button>
        </>
    )
}

export default Child