import { useState } from "react";

interface UserProfiles {
  name: string;
  age: number;
  location: string;
}

const UserProfile = () => {
  const [user, setUser] = useState<UserProfiles>({
    name: "",
    age: 0,
    location: "",
  });

  const updateName = (name:string)=>{
    setUser((prevUser)=>({...prevUser,name}));
  }

  const updateAge = (age:string)=>{
    setUser((prevUser)=>({...prevUser,age:Number(age)}))
  }

  const updateLocation = (location:string)=>{
    setUser((prevUser)=>({...prevUser,location}))
  }

  return (
    <div>
      <h1>User Profile</h1>
      <input type="text" placeholder="Name" value={user.name} onChange={e=>updateName(e.target.value)}/>
      <input type="number" placeholder="Age" value={user.age>0? user.age:''} onChange={e=>updateAge(e.target.value)}/>
      <input type="text" placeholder="Location" value={user.location} onChange={e=>updateLocation(e.target.value)}/>
      <ul>
        <li>Name: {user.name}</li>
        <li>Age: {user.age}</li>
        <li>Location: {user.location}</li>
      </ul>
    </div>
  );
};

export default UserProfile;
