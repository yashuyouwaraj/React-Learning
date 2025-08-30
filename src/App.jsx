// import { FaCartArrowDown } from "react-icons/fa";
// import { FaComputer } from "react-icons/fa6";
// import "./index.css";

import IconComponent from "./components/IconComponent";
import ProfileCard from "./components/ProfileCard";
import StyledCart from "./components/StyledCart";

// const App =() =>{
//   return (
//     <div>
//       <FaComputer />
//       <h1><FaCartArrowDown /> Separate file for styling</h1>
//     </div>
//   )
// }
const App = () =>{
  return(
    <div>
      <StyledCart />
      <ProfileCard />
      <IconComponent />
    </div>
  )
}

export default App;
