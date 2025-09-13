import React from 'react'
import User from './components/User'
import Button from './components/Button'
import UserInfo from './components/UserInfo'
import AdminInfo from './components/AdminInfor'
import ReusableUserInfo from './components/ReusableUserInfo'
import ReusableAdminInfo from './components/ReusableAdminInfo'

// const App = () => {
//   return (
//     <div>
//       <User name="Yashu" age={25} isStudent={true} />
//       <User>
//         <h1>Hello</h1>
//       </User>
//       <Button label="Click Me" onClick={()=>console.log('Button Clicked')} disabled={false} />
//       <UserInfo user={{id:1,name:'Yashu',email:'yashu@gmail.com'}} />
//       <AdminInfo admin={{id:2,name:'Aman',email:'aman@gmail.com',role:'Admin'}} />
//     </div>
//   )
// }


const App = () => {
  return (
    <div>
      <ReusableUserInfo id={1} name="Yashu" email="yashu@gmail.com" age={25} location={['Chennai, India']} />
      <ReusableAdminInfo id={2} name="Aman" email="aman@gmail.com" age={30} location={['Mumbai, India']} role="Admin" />
    </div>
  )
}

export default App