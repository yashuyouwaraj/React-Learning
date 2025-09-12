import React from 'react'

const Weather = (props) => {
  return (
    <div>
        <h1>Weather Condition</h1>
        {(props.temperature <15) && <p>Its Cold Outside</p>}
        {(15<props.temperature < 25) && <p>Its Nice Outside</p>}{(props.temperature >25) && <p>Its Hot Outside</p>}
    </div>
  )
}

export default Weather