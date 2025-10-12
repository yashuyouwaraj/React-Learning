interface RenderListChallenge1Props{
  data:any[]
  resourceName:string
  dataToRender:React.FC<any>
}

const RenderListChallenge1 = ({ data, resourceName, dataToRender:ItemComponent }: RenderListChallenge1Props) => {
  return (
    <div className="product-list">
      {data.map((item, index) => (
        <div key={index}>
          <ItemComponent key={index} {...{[resourceName]: item}} />
        </div>
      ))}
    </div>
  )
}

export default RenderListChallenge1