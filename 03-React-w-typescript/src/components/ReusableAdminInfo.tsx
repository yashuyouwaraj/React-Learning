import React from 'react'
import ReusableUserInfo, { type UserInfo } from './ReusableUserInfo'

type AdminInfo=UserInfo & {
    role:string ;
}

const ReusableAdminInfo = ({id,name,email,age,location,role}:AdminInfo) => {
  return (
    <ul>
        <h2>Admin Information 👇</h2>
        <li>ID: {id}</li>
        <li>Name: {name}</li>
        <li>Email: {email}</li>
        <li>Age: {age}</li>
        <li>Location: {location}</li>
        <li>Role: {role}</li>
    </ul>
  )
}

export default ReusableAdminInfo