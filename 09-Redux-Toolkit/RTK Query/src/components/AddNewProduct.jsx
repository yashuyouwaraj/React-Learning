import { useAddNewProductMutation } from "../app/service/dummyData"

const AddNewProduct = () => {
    const [addNewProduct,{data,isError,isLoading}]=useAddNewProductMutation()
    if (isError) {
        return <h1>Error</h1>
    }
    if (isLoading) {
        return <h1>Loading....</h1>
    }
    const handleAddProduct=async ()=>{
        try {
            const newProductData={
                id:200,
                title:"Amazing T-shirt",
                description:"This is an amazing t-shirt",
                price:99.99,
                brand:"MyBrand"
            };
            await addNewProduct(newProductData)
        } catch (err) {
            console.log("Error",err)
        }
    }
  return (
    <div>
        <h1>{data?.id}</h1>
        <h1>{data?.title}</h1>
        <h1>{data?.description}</h1>
        <h1>{data?.price}</h1>
        <h1>{data?.brand}</h1>
        <button onClick={handleAddProduct} disabled={isLoading}>Add New Product</button>
    </div>
  )
}

export default AddNewProduct