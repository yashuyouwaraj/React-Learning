import React from 'react'

const Expressions = () => {
    const myName="Yashu Youwaraj";
    const multiply = (a,b) => a*b;
    const specialClass= "Anything-i-want"
  return (
    <div>
        <p>2+2={2+2}</p>
        <h1>{myName}</h1>
        <p>{multiply(2,3)}</p>
        <p className={specialClass}>This is a special paragraph.</p>
    </div>
  )
}

export default Expressions