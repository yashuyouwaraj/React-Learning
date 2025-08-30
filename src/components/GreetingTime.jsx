import React from 'react'

const GreetingTime = (props) => {
  return (
    <div>
        <h1>Time of the Day</h1>
        {props.timeOfDay==="morning" ? <p>Good Morning!</p> : <p>Good Afternoon!</p> }
    </div>
  )
}

export default GreetingTime