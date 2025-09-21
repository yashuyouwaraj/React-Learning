import { Suspense, useState, useTransition } from 'react'
import "./index.css"
import FetchTodo from './components/FetchTodo'
import Theme from './components/Theme';
import Form from './components/Form';
import Count from './components/Count';
import Home from './components/Home';
import Contact from './components/Contact';
import Post from './components/Post';


// const App = () => {
//   return (
//     <div className="flex justify-center items-center w-full mt-[10rem]">
//       <Theme />
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <Suspense fallback={<h2>Loading...</h2>}>
//       <FetchTodo />
//     </Suspense>
//   )
// }

// const App = () => {
//   return (
//     <div>
//       <Form />
//     </div>
//   )
// }


// import FormStatus from './components/FormStatus';
// const App = () => {
//   return (
//     <div>
//       <FormStatus />
//     </div>
//   )
// }

// const App = () => {
//   return (
//     <div>
//       <Count />
//     </div>
//   )
// }


const App = () => {
  const [activeTab,setActiveTab]=useState('home')
  const [isPending,startTransition]=useTransition();

  const handleTabChange=(tab:any)=>{
    startTransition(()=>{
      setActiveTab(tab);
    })
  }

  const renderContent = ()=>{
    switch(activeTab){
      case 'home':
        return <Home />
      case 'contact':
        return <Contact />
      case 'post':
        return <Post />
      default:
        return <Home />
    }
  }
  return <div>
    <div className='tabs mt-2'>
      <button className='border-2 p-4 ml-2' onClick={()=>handleTabChange('home')}>Home</button>
      <button className='border-2 p-4 ml-2' onClick={()=>handleTabChange('post')}>Post</button>
      <button className='border-2 p-4 ml-2' onClick={()=>handleTabChange('contact')}>Contact</button>
    </div>
    {isPending && <p className='mt-2 text-lg'>Loading...............</p> }
    <div className='content ml-25 text-3xl mt-5'>
      {renderContent()}
    </div>
  </div>

}

export default App