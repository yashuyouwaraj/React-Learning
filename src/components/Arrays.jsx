import React from 'react'

const Arrays = () => {
  const usersInfo=[{
    name:"John",
    email:"john@example.com",
    location:"New York"
  },{
    name:"Jane",
    email:"jane@example.com",
    location:"Los Angeles"  
  },{
    name:"Bob",
    email:"bob@example.com",
    location:"Chicago"
  }];
  return (
    <div>
        <h1>Users Information</h1>
        {usersInfo.map(({name,email,location}) => (
          <div key={Math.random}>
            <ul>
                <li>Name: {name}</li>
                <li>Email: {email}</li>
                <li>Location: {location}</li>
            </ul>
          </div>
        ))}
    </div>
  )
}

export default Arrays