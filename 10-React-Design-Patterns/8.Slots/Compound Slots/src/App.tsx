import Card from "./components/Card"


const App = () => {
  return (
    <div>
      <Card.Title>
        <h1>Card Title</h1>
      </Card.Title>
      <Card.Content>
        <p>Card Content</p>
      </Card.Content>
      <Card.Button>
        <button>Click Me</button>
      </Card.Button>
    </div>
  )
}

export default App