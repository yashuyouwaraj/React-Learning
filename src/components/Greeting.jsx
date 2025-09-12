import React from 'react'

const Greeting = () => {
    const name = "Yashu Youwaraj";
    const date = new Date().toLocaleDateString();
  return (
    <div>
        <h1>Hello, {name}!</h1>
        <p>Welcome to the React world! on {date}</p>
    </div>
  )
}

export default Greeting