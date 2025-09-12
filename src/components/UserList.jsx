import React from "react";

const UserList = () => {
  const users = [
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Jane", age: 30 },
    { id: 3, name: "Bob", age: 22 },
  ];
  return (
    <div>
      <h1>User Details</h1>
      {users.map(({ id, name, age }) => {
        return (
          <div key={id}>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
          </div>
        );
      })}
    </div>
  );
};

export default UserList;
