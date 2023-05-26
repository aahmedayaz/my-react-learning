import React from 'react'

const Movies = ({movies}) => {

    return (
        <>
            {
                movies.map((movie , index) => <h3 key={index}>My No.{index+1} Favourite Movie is {movie}</h3>)
            }
        </>
    )
}

export default Movies