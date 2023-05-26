import React from 'react'

const Users = ({user}) => {
  return (
    <>
        <p>My Username is {user.name} & his age is {user.age}</p>
    </>
  )
}

export default Users