// import { FaCartArrowDown } from "react-icons/fa";
// import { FaComputer } from "react-icons/fa6";
// import "./index.css";

import { useState } from "react";
import ComponentOne from "./components/ComponentOne";
import ComponentTwo from "./components/ComponentTwo";
import ExampleOne from "./components/ExampleOne";
import ExampleTwo from "./components/ExampleTwo";
import ExampleThree from "./components/ExampleThree";

// import IconComponent from "./components/IconComponent";
// import ProfileCard from "./components/ProfileCard";
// import StyledCart from "./components/StyledCart";
// import EventsHandlers from "./components/EventsHandlers";
// import UseStatesBasics from "./components/UseStatesBasics";
// import UseStatesUpdatingArrays from "./components/UseStatesUpdatingArrays";
// import UseStatesUpdatingObjects from "./components/UseStatesUpdatingObjects";
// import UserStatesUpdatingArrayOfObjects from "./components/UseStatesUpdatingArrayOfObjects";

// const App =() =>{
//   return (
//     <div>
//       <FaComputer />
//       <h1><FaCartArrowDown /> Separate file for styling</h1>
//     </div>
//   )
// }
// const App = () =>{
//   return(
//     <div>
//       {/* <StyledCart />
//       <ProfileCard />
//       <IconComponent /> */}
//       {/* <EventsHandlers /> */}
//       <UseStatesBasics />
//       <UseStatesUpdatingArrays />
//       <UseStatesUpdatingObjects />
//       <UserStatesUpdatingArrayOfObjects />
      
//     </div>
//   )
// }

// const App = () => {
//   const [count,setCount]=useState(0);
//   return <div>
//     <ComponentOne count={count} onClickHandler={() => setCount(count+1)}/>
//     <ComponentTwo count={count} onClickHandler={() => setCount(count+1)} />
//   </div>
// }

const App = ()=>{
  return <div>
      <ExampleOne />
      <ExampleTwo />
      <ExampleThree />
  </div>
}



export default App;
