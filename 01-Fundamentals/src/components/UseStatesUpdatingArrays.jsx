import React from 'react'
import { useState } from 'react'

const UseStatesUpdatingArrays = () => {
  const [friends,setFriends] = useState(['Alex','John']);
  const addOneFriend=() => setFriends([...friends, "Yashu"])
  const removeFriend= ()=> setFriends(friends.filter((m)=> m!== 'Yashu'));
  const updateOneFriend = ()=> setFriends(friends.map((f)=>(f==='Alex' ? 'Alex Smith' : f)));

    return (
    <div>
        {friends.map((f) =>  (
            <li key={Math.random()}>{f}</li>
        ))}
        <button onClick={addOneFriend}>addOneFriend</button>
        <button onClick={removeFriend}>removeFriend</button>
        <button onClick={updateOneFriend}>updateOneFriend</button>

    </div>
  )
}

export default UseStatesUpdatingArrays