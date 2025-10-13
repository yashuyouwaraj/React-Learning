import axios from "axios"
import React from "react"
import { useEffect, useState } from "react"

interface Todo{
    id:number
    title:string
    completed:boolean
}
interface SingleTodoLoaderProps{
    children:React.ReactNode
}
interface ChildComponentProps{
    todos:Todo | null
}


const SingleTodoLoader = ({ children }: SingleTodoLoaderProps) => {
    const [todos,setTodos]=useState<Todo | null>(null)
    useEffect(()=>{
        (async()=>{
            const response = await axios.get<Todo>('https://jsonplaceholder.typicode.com/todos')
            setTodos(response.data)
        })()
    },[])
  return (
    <>
    {React.Children.map(children,(child)=>{
        if(React.isValidElement<ChildComponentProps>(child)){
            return React.cloneElement(child,{todos})
        }
        return child
    })}
    </>
  )
}

export default SingleTodoLoader