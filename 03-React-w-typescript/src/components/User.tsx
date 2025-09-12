import { type FC, type ReactNode } from 'react'

// -------------------------------------
// 1. Passing Types

// const User = (props: { name: string; age: number; isStudent: boolean }) => {
//   return (
//     <main>
//       <h2>{props.name}</h2>
//       <p>{props.age}</p>
//       <p>{props.isStudent}</p>
//     </main>
//   );
// };


// -------------------------------------
// 2. Destructuring Props Values
// const User = ({name,age,isStudent,}:{ name:string ; age:number ; isStudent:boolean }) => {
//   return (
//     <div>
//         <h2>{name}</h2>
//         <p>Age: {age}</p>
//         <p>Student: {isStudent ? 'Yes' : 'No'}</p>
//     </div>
//   )
// }

// -------------------------------------
// // 3. Creating Custom Types (type alias & Interfaces)
// type UserProps={
//     name:string ;
//     age:number ;
//     isStudent:boolean ;
// }
// interface UserProps{
//     name:string ;
//     age:number ;
//     isStudent:boolean ;
// }
// const User = ({name,age,isStudent,}:UserProps) => {
//   return (
//     <div>
//         <h2>{name}</h2>
//         <p>Age: {age}</p>
//         <p>Student: {isStudent ? 'Yes' : 'No'}</p>
//     </div>
//   )
// }
// -------------------------------------
// 4. Children
// interface UserShape{
//     children:ReactNode
// }

// const User = ({children}:UserShape) => {
//   return (
//     <div>
//         <h1>{children}</h1>
//     </div>
//   )
// }

//-------------------------------------
//5.Modern Way of Typing

interface UserProps{
    name:string ;
    age:number ;
    isStudent:boolean;
}
const User:FC<UserProps> = ({name,age,isStudent}) => {
  return (
    <div>
        <h2>{name}</h2>
        <p>Age: {age}</p>
        <p>Student: {isStudent ? 'Yes' : 'No'}</p>
    </div>
  )
}

export default User
