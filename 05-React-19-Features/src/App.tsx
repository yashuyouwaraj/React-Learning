import { Suspense } from 'react'
import "./index.css"
import FetchTodo from './components/FetchTodo'
import Theme from './components/Theme';
import Form from './components/Form';


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

const App = () => {
  return (
    <div>
      <Form />
    </div>
  )
}

export default App