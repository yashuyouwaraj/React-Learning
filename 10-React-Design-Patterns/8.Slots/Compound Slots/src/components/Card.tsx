import type { ReactNode } from "react"
import CardTitle from "./CardTitle"
import CardContent from "./CardContent"
import CardButton from "./CardButton"

const Card = ({children}:{children:ReactNode}) => {
  return (
    <div>{children}</div>
  )
}

Card.Title=CardTitle
Card.Content=CardContent
Card.Button=CardButton

export default Card