import React from 'react'
import { useState } from 'react'

const UserStatesUpdatingArrayOfObjects = () => {
  const [movies, setMovies] = useState([
    {id:1, title:'Spider Man', ratings: 3},
    {id:2, title:'SuperMan', ratings: 5}
  ])
  const handleClick =()=> {setMovies(movies.map(m=>m.id===1 ? {...movies,title: "John Wick 5"}: m))}

    return (
    <div>
        <h1>{movies.map((m)=>(
            <li key={Math.random()}>{m.title}</li>
        ))}</h1>
        <button onClick={handleClick}>Change Name</button>
    </div>
  )
}

export default UserStatesUpdatingArrayOfObjects