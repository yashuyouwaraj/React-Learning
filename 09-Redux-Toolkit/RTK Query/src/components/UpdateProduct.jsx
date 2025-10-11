import { useUpdateProductMutation } from "../app/service/dummyData"


const UpdateProduct = ({productId}) => {
    const[updateProduct,{data,isError,isLoading}]= useUpdateProductMutation()

    if(isError){
        <h1>{error}</h1>
    }
    if(isLoading){
        <h1>Loading....</h1>
    }
    const handleUpdateProduct=async () => {
        try {
            const updateProductData={
                title:"Title updated 🤝"
            }
            await updateProduct({id:productId,updateProduct:updateProductData})
        } catch (er) {
            console.log("Error updating the product",err)
        }
    }

  return (
    <div>
        <h1>{data?.title}</h1>
        <button onClick={handleUpdateProduct} disabled={isLoading}>updateProduct</button>
    </div>
  )
}

export default UpdateProduct