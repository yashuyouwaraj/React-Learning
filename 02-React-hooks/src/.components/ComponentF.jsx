import React from 'react'
import { Data, Data1 } from '../App'


const ComponentF = () => {
  return (
    <Data.Consumer>
        {(name)=>{
            return (
                <Data1.Consumer>
                    {(age)=>{
                        return (
                            <h1>
                                My name is {name} and Age is {age} years old.
                            </h1>
                        )
                    }}
                </Data1.Consumer>
            )
        }}
    </Data.Consumer>
  )
}

export default ComponentF