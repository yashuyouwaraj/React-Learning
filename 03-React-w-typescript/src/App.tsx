import React from 'react'
import User from './components/User'

const App = () => {
  return (
    <div>
      <User name="Yashu" age={25} isStudent={true} />
      {/* <User>
        <h1>Hello</h1>
      </User> */}

    </div>
  )
}

export default App