import React from 'react'
import { useState } from 'react'

const UseStatesUpdatingObjects = () => {
    const [movie, setMovie] = useState({
        title: 'Spiderman',
        rating: 7
    })
    const handleClick =()=>{
        setMovie({...movie,rating:5})
    }

    return (
    <div>
        <h1>Title: {movie.title}</h1>
        <p>Rating: {movie.rating}</p>
        <button onClick={handleClick}>Change Rating</button>
    </div>
  )
}

export default UseStatesUpdatingObjects