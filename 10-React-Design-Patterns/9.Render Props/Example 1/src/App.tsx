import Counter from "./components/Counter"

const App = () => {
  return (
    <div>
      <Counter render={(count:number)=> <p>The current count is: {count}</p> } />
    </div>
  )
}

export default App