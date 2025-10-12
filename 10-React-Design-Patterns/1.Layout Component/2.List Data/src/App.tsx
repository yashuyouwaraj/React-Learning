import GamesInfo from "./components/GamesInfo"
import MoviesInfo from "./components/MoviesInfo"
import ProductInfo from "./components/ProductInfo"
import RenderList from "./components/RenderList"
import RenderListChallenge1 from "./components/RenderListChallenge1"
import { clothing, electronics, games, homeGoods, movies } from "./data/Data"

// const App = () => {
//   return (
//     <>
//     <RenderList data={games} resourceName="games" dataToRender={GamesInfo} />
//     <hr />
//     <br />
//     <br />
//     <RenderList data={movies} resourceName="movies" dataToRender={MoviesInfo} />
//     </>
//   )
// }

// export default App

//---------------Challenge 1-----------------

const App = () => {
  return (
    <div className="flex flex-wrap justify-center items-center">
      <RenderList
        data={electronics}
        resourceName="product"
        dataToRender={ProductInfo}
      />
      <RenderList
        data={homeGoods}
        resourceName="product"
        dataToRender={ProductInfo}
      />
      <RenderList
        data={clothing}
        resourceName="product"
        dataToRender={ProductInfo}
      />
    </div>
  );
};

export default App;