import ButtonFactory from "./shared/ButtonFactory"


const App = () => {
  // const buttonType= "primary"
  // const buttonType= "secondary"
  const buttonType= "danger"
  const buttonLabel="Click Me"
  return (
    <div>
      {ButtonFactory(buttonType,buttonLabel)}
    </div>
  )
}

export default App