// import React, { useEffect, useState } from "react";
// import BasicEffect from "./.components/BasicEffect";
// import CounterEffect from "./.components/CounterEffect";
// import FetchDataEffect from "./.components/FetchDataEffect";
// import { createContext } from "react";
// import ComponentA from "./.components/ComponentA"
// import ComponentD from "./.components/ComponentD";
// import ComponentG from "./.components/ComponentG";
// import UserContext from "./.components/UserContext";
import CounterReducer from "./counterReducer";
import UpdateUser from "./.components/UpdateUser";
import UseReducer from "./.components/UseReducer";
import UserProfile from "./.components/UserProfile";
import { UserProvider } from "./UserContext";
import Counter from "./.components/Counter";
import UseRef from "./.components/UseRef";
import FocusInput from "./.components/FocusInput";
import Timer from "./.components/Timer";
import useFetch from "./.components/useFetch";
import UniqueId from "./.components/UniqueId";

// const App =()=>{
//   const [value,setValue] = useState(0)
//   const [something,setSometing]=useState(0)

//   useEffect(()=>{
//     if(value>0){
//       console.log('call useEffect')
//       document.title=`Increment ${value}`
//     }

//   },[value])
//   return <div>
//     <h2>{value}</h2>
//     <button onClick={()=>setValue(value+1)}>Click Me</button>
//     <button onClick={()=>setSometing(value+1)}>Increment by Something</button>
//   </div>
// }

// const App = ()=>{
//   const [data, setData]=useState([])

//   useEffect(()=>{
//     async function getData() {
//       const response = await fetch("https://jsonplaceholder.typicode.com/posts")
//       const data = await response.json()
//       if(data && data.length) setData(data)
//     }
//   getData()
//   },[])

//   return <div>
//     <ul>
//       {data.map(todo=>(
//         <section key="todo.id">
//           <li>{todo.title}</li>
//           <li>Body===={todo.body}</li>
//         </section>
//       ))}
//     </ul>
//   </div>
// }

// const App = () => {
//   return (
//     <div>
//       <BasicEffect />
//     </div>
//   )
// }

// const App = () => {
//   return (
//     <div>
//       <CounterEffect />
//     </div>
//   )
// }

// const App = ()=>{
//   return <div>
//     <FetchDataEffect />
//   </div>
// }

// const App = () => {
//   const name = "HuXn";
//   return <ComponentA name={name} />;
// };

// export const Data = createContext();
// export const Data1 = createContext();
// const App = () => {
//   const name = "Huxn"
//   const age = 25
//   return <div>
//     <Data.Provider value={name}>
//       <Data1.Provider value={age}>
//         <ComponentD />
//       </Data1.Provider>
//     </Data.Provider>
//   </div>;
// };

// export const Data = createContext();
// export const Data1 = createContext();
// const App = () => {
//   const name = "Huxn"
//   const age = 25
//   return <div>
//     <Data.Provider value={name}>
//       <Data1.Provider value={age}>
//         <ComponentG />
//       </Data1.Provider>
//     </Data.Provider>
//   </div>;
// };

// const App = () => {
//   return (
//     <UserProvider>
//       <UserProfile />
//       <UpdateUser />
//       <h1>Sucessful</h1>
//     </UserProvider>
//   );
// };

// const App = () =>{
//   return <div>
//     <UseReducer />
//     <Counter />
//   </div>
// }

// const App = () =>{
//   return <div>
//     <UseRef />
//     <FocusInput />
//     <Timer />
//   </div>
// }


// const App = ()=>{
//   const [data]=useFetch("https://jsonplaceholder.typicode.com/todos")
//   return <div>
//     {data && data.map((item)=>{
//       return <ul key={item.id}>
//         <li>{item.title}</li>
//       </ul>
//     })}
//   </div>
// }

const App = ()=>{
  return <div>
    <UniqueId />
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi tempora numquam animi facere dolor sed sunt ducimus at accusantium perferendis.</p>
    <UniqueId />
  </div>
}

export default App;
