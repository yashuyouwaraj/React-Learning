
import axios from "axios";
import DataSource from "./components/shared/DataSource";
import Products from "./components/Details/Products";

const getServerData = (url: string) => async () => {
  const response=await axios.get(url)
  return response.data
}

const App = () => {
  return (
    <div className="mt-[20px]">
      <h1 className="text-3xl text-center font-bold w-full mb-[20px]">Welcome to the Fake Store</h1>
    <DataSource getDataFunc={getServerData("https://fakestoreapi.com/products")} resourceName="products">
      <Products products={null} />
    </DataSource>
    </div>
  );
};

export default App;