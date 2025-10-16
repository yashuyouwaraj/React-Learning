import type { ComponentConfig } from "./utils/ComponentFactory"
import ComponentFactory from "./utils/ComponentFactory"

const buttonConfig:ComponentConfig={
  type:"button",
  props:{
    label:"Click Me",
    onClick:()=>alert("Clicked"),
    disabled:false
  }
}

const cardConfig:ComponentConfig={
  type:"card",
  props:{
    title:"My Man Card Title",
    content:"Some content Here",
    footer:"footer"
  }
}

const modalConfig:ComponentConfig={
  type:"modal",
  props:{
    header:" Hello Modal Title",
    content:"Some content Here",
    footer:"footer"
  }
}

const App = () => {

  return (
    <div>
      {ComponentFactory(buttonConfig)}
      {ComponentFactory(cardConfig)}
      {ComponentFactory(modalConfig)}
    </div>
  )
}

export default App