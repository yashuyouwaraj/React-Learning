import GamesInfo from "./components/GameInfo";
import Modal from "./components/Modal";
import { games } from "./data/data";

const App = () => {
  return (
    <>
      <Modal>
        <GamesInfo data={games} />
      </Modal>
    </>
  );
};

export default App;