import Deduplication from "./components/Deduplication"
import FetchFromMultipleEndpoints from "./components/FetchFromMultipleEndpoints"
import FetchOneItem from "./components/FetchOneItem"
import MutatingData from "./components/MutatingData"
import Pagination from "./components/Pagination"
import RaceCondition from "./components/RaceCondition"
import RefetchInterval from "./components/RefetchInterval"
import StaleTime from "./components/StaleTime"
import WithoutTanStackQuery from "./components/WithoutTanStackQuery"
import WithTanStackQuery from "./components/WithTanStackQuery"

const App = () => {
  return (
    <div>
      {/* <WithoutTanStackQuery /> */}
      {/* <RaceCondition /> */}
      {/* <WithTanStackQuery /> */}
      {/* <Deduplication /> */}
      {/* <StaleTime /> */}
      {/* <FetchOneItem /> */}
      {/* <RefetchInterval /> */}
      {/* <FetchFromMultipleEndpoints /> */}
      {/* <MutatingData /> */}
      <Pagination />
    </div>
  )
}

export default App