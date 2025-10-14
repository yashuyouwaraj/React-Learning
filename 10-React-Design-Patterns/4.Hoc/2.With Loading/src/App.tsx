import { useEffect, useState } from "react"
import MyComponent from "./components/MyComponent"
import withLoading from "./utils/withLoading"

const MyComponentWithLoading = withLoading(MyComponent)

function App(){
  const [isLoading,setIsLoading]=useState(true)
  const [data,setData]=useState("")

  useEffect(()=>{
    setTimeout(()=>{
      setData("Data Fetched!")
      setIsLoading(false)
    },300)
  },[])

  return <MyComponentWithLoading isLoading={isLoading} data={data} />

}


export default App