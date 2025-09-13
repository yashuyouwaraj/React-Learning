

export type UserInfo={
    id:number ;
    name:string ;
    email:string ;
    age: number;
    location: string[];
};

const ReusableUserInfo = ({ id, name, email, age, location }: UserInfo) => {
  return (
    <ul>
      <h2>User Information 👇</h2>
      <li>ID: {id}</li>
      <li>Name: {name}</li>
      <li>Email: {email}</li>
      <li>Age: {age}</li>
      <li>Location: {location}</li>
    </ul>
  )
}

export default ReusableUserInfo