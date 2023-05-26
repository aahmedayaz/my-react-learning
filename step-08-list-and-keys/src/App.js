import React from 'react'
import Movies from './components/Movies'
import Users from './components/Users'

const App = () => {

  let movies = ["Harry Potter" , "Golmaal 3" , "Pirates of Carribean 4"]
  let users = [
    {
      name : "Ahmed Ayaz" ,
      age : 21
    },
    {
      name : "Anthony Gonsalvis" , 
      age : 25
    },
    {
      name : "Gabbar Singh" , 
      age : 35
    }
  ]

  return (
    <>
      <Movies movies={movies}/>
      {
        users.map((user , index) =>  <Users user={user} key={index}/>)
      }
    </>
  )
}

export default App