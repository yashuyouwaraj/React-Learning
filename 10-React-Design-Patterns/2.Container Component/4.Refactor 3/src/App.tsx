
import axios from "axios";
import TodoList from "./components/Details/TodoList";
import DataSource from "./components/shared/DataSource";
import CommentsList from "./components/Details/CommentsList";

const getServerData = (url: string) => async () => {
  const response=await axios.get(url)
  return response.data
}

const App = () => {
  return (
    <>
    <DataSource getDataFunc={getServerData("https://jsonplaceholder.typicode.com/todos/1")} resourceName="todo">
      <TodoList todo={null} />
    </DataSource>

    <br />
    <hr />

    <DataSource getDataFunc={getServerData("https://jsonplaceholder.typicode.com/comments/1")} resourceName="comments">
      <CommentsList comments={null} />
    </DataSource>
    </>
  );
};

export default App;