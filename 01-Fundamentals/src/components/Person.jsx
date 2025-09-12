import React from 'react'

const data1 = () => {
    return (
        <Person
        name= "Yashu Youwaraj"
        age = "24"
        />
    )
}

const Person = (props) => {
  return (
    <div>
        <h2>Name : {props.name}</h2>
        <p>Age : {props.age}</p>
    </div>
  )
}

export default data1