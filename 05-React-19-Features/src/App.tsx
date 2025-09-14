import { Suspense } from 'react'
import "./index.css"
import FetchTodo from './components/FetchTodo'

const App = () => {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <FetchTodo />
    </Suspense>
  )
}

export default App