import React, { useId } from 'react'

const UniqueId = () => {
    const id = useId();

  return (
    <div>
        <label htmlFor={`${id}-email`}>Email</label>
        <input type="email" id={`${id}-email`} />

        <br />

        <label htmlFor={`${id}-password`}>password</label>
        <input type="password" id={`${id}-password`} />
    </div>
  )
}

export default UniqueId