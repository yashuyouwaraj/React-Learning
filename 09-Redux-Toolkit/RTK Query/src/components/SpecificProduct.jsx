import { useGetProductByIdQuery } from "../app/service/dummyData"

const SpecificProduct = () => {
    const {data,isError,isLoading}=useGetProductByIdQuery(12)
    if(isError){
        return <h1>OOOOOh No we got an Error</h1>
    }
    if(isLoading){
        return <h1>Loading.........</h1>
    }
  return (
    <div>
        <h1>{data?.brand}</h1>
        <h1>{data?.category}</h1>
        <h1>{ data?.description }</h1>
    </div>
  )
}

export default SpecificProduct